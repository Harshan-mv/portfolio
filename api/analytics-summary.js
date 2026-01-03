// api/analytics-summary.js

import clientPromise from "./_db.js";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("analytics");
    const events = db.collection("events");

    /* -------------------------------
       High-level metrics
    -------------------------------- */
    const totalEvents = await events.countDocuments();
    const uniqueSessions = await events.distinct("session_id");

    /* -------------------------------
       Event breakdown
    -------------------------------- */
    const eventsByTypeAgg = await events.aggregate([
      { $group: { _id: "$event_name", count: { $sum: 1 } } }
    ]).toArray();

    const eventsByType = {};
    eventsByTypeAgg.forEach(e => {
      eventsByType[e._id] = e.count;
    });

    /* -------------------------------
       Project engagement
    -------------------------------- */
    const projectClicksAgg = await events.aggregate([
      { $match: { event_name: "project_external_click" } },
      {
        $group: {
          _id: "$payload.project_title",
          count: { $sum: 1 }
        }
      }
    ]).toArray();

    const projectClicks = {};
    projectClicksAgg.forEach(p => {
      if (p._id) projectClicks[p._id] = p.count;
    });

    /* -------------------------------
       CTA raw clicks (non-experiment)
    -------------------------------- */
    const ctaClicksAgg = await events.aggregate([
      { $match: { event_name: "cta_click" } },
      {
        $group: {
          _id: "$payload.cta",
          count: { $sum: 1 }
        }
      }
    ]).toArray();

    const ctaClicks = {};
    ctaClicksAgg.forEach(c => {
      if (c._id) ctaClicks[c._id] = c.count;
    });

    /* -------------------------------
       A/B Experiment Views
    -------------------------------- */
    const experimentViewsAgg = await events.aggregate([
      { $match: { event_name: "experiment_view" } },
      {
        $group: {
          _id: {
            experiment: "$payload.experiment",
            variant: "$payload.variant"
          },
          views: { $sum: 1 }
        }
      }
    ]).toArray();

    /* -------------------------------
       A/B Experiment Clicks (FIXED)
    -------------------------------- */
    const experimentClicksAgg = await events.aggregate([
      { $match: { event_name: "experiment_click" } },
      {
        $group: {
          _id: {
            experiment: "$payload.experiment",
            variant: "$payload.variant"
          },
          clicks: { $sum: 1 }
        }
      }
    ]).toArray();

    /* -------------------------------
       Merge experiment data (normalized)
    -------------------------------- */
    const ctaExperiments = {};

    // Initialize views
    experimentViewsAgg.forEach(v => {
      const { experiment, variant } = v._id;

      if (!ctaExperiments[experiment]) {
        ctaExperiments[experiment] = {};
      }

      ctaExperiments[experiment][variant] = {
        views: v.views,
        clicks: 0
      };
    });

    // Merge clicks
    experimentClicksAgg.forEach(c => {
      const { experiment, variant } = c._id;

      if (!ctaExperiments[experiment]) {
        ctaExperiments[experiment] = {};
      }

      if (!ctaExperiments[experiment][variant]) {
        ctaExperiments[experiment][variant] = {
          views: 0,
          clicks: 0
        };
      }

      ctaExperiments[experiment][variant].clicks = c.clicks;
    });

    /* -------------------------------
       Response (RAW COUNTS ONLY)
    -------------------------------- */
    return res.status(200).json({
      totalEvents,
      uniqueSessions: uniqueSessions.length,
      eventsByType,
      projectClicks,
      ctaClicks,
      ctaExperiments
    });
  } catch (error) {
    console.error("Analytics summary error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
