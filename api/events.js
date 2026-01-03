// api/events.js

import clientPromise from "./_db.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    let event = req.body;

    // Handle sendBeacon payloads
    if (typeof event === "string") {
      try {
        event = JSON.parse(event);
      } catch {
        return res.status(400).json({ error: "Invalid JSON payload" });
      }
    }

    // Basic validation
    if (
      !event ||
      typeof event !== "object" ||
      !event.event_name ||
      !event.session_id ||
      !event.timestamp
    ) {
      return res.status(400).json({ error: "Invalid event payload" });
    }

    const timestamp = new Date(event.timestamp);
    if (isNaN(timestamp.getTime())) {
      return res.status(400).json({ error: "Invalid timestamp" });
    }

    const client = await clientPromise;
    const db = client.db("analytics");
    const events = db.collection("events");

    // Privacy-safe IP masking
    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.socket?.remoteAddress ||
      "unknown";

    const maskedIp =
      typeof ip === "string" ? ip.replace(/\d+$/, "0") : "unknown";

    await events.insertOne({
      event_name: event.event_name,
      session_id: event.session_id,
      timestamp,
      url: event.url || null,
      payload: event.payload || {},
      user_agent: event.user_agent || null,
      ip_masked: maskedIp
    });

    // Analytics-style response
    return res.status(204).end();
  } catch (error) {
    console.error("Analytics ingestion error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
