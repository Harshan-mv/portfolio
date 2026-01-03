import React, { useEffect, useState } from "react";

export default function AnalyticsLab() {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    fetch("/api/analytics-summary")
      .then((res) => res.json())
      .then((data) => setSummary(data))
      .catch(() => setSummary(null));
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Analytics Lab</h1>
        <p className="text-slate-600 mb-10">
          Live analytics generated from real user interactions on this
          portfolio using a custom, event-driven tracking system.
        </p>

        {!summary && (
          <p className="text-slate-500">Loading analytics…</p>
        )}

        {summary && (
          <>
            {/* High-level metrics */}
            <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              <Metric label="Total Events" value={summary.totalEvents} />
              <Metric label="Unique Sessions" value={summary.uniqueSessions} />
              <Metric
                label="Event Types"
                value={Object.keys(summary.eventsByType).length}
              />
            </section>

            {/* Event Breakdown */}
            <Section title="Event Breakdown">
              {Object.entries(summary.eventsByType).map(([k, v]) => (
                <Row key={k} label={k} value={v} />
              ))}
            </Section>

            {/* Project Engagement */}
            <Section title="Project Engagement">
              {Object.keys(summary.projectClicks).length === 0 ? (
                <p className="text-slate-500">No project clicks yet.</p>
              ) : (
                Object.entries(summary.projectClicks).map(([k, v]) => (
                  <Row key={k} label={k} value={v} />
                ))
              )}
            </Section>

            {/* CTA Performance */}
            <Section title="CTA Performance">
              {Object.keys(summary.ctaClicks).length === 0 ? (
                <p className="text-slate-500">No CTA clicks yet.</p>
              ) : (
                Object.entries(summary.ctaClicks).map(([k, v]) => (
                  <Row key={k} label={k} value={v} />
                ))
              )}
            </Section>

            {/* A/B Experiment Results */}
            <Section title="A/B Experiment Results">
              {!summary.ctaExperiments ||
              Object.keys(summary.ctaExperiments).length === 0 ? (
                <p className="text-slate-500">
                  No experiment data available yet.
                </p>
              ) : (
                Object.entries(summary.ctaExperiments).map(
                  ([experimentName, variants]) => {
                    const computed = computeExperimentMetrics(variants);
                    const winner = getWinnerVariant(computed);

                    return (
                      <div
                        key={experimentName}
                        className="mb-6 border rounded-xl overflow-hidden"
                      >
                        <div className="bg-slate-100 px-4 py-2 font-semibold text-sm">
                          Experiment: {experimentName}
                        </div>

                        <table className="w-full text-sm">
                          <thead className="bg-slate-50">
                            <tr>
                              <th className="text-left px-4 py-2">Variant</th>
                              <th className="text-right px-4 py-2">Views</th>
                              <th className="text-right px-4 py-2">Clicks</th>
                              <th className="text-right px-4 py-2">CTR</th>
                            </tr>
                          </thead>
                          <tbody>
                            {Object.entries(computed).map(
                              ([variant, data]) => {
                                const isWinner = variant === winner;

                                return (
                                  <tr
                                    key={variant}
                                    className={`border-t ${
                                      isWinner
                                        ? "bg-green-50 font-semibold"
                                        : ""
                                    }`}
                                  >
                                    <td className="px-4 py-2">
                                      Variant {variant}
                                      {isWinner && (
                                        <span className="ml-2 text-green-600 text-xs">
                                          WINNER
                                        </span>
                                      )}
                                    </td>
                                    <td className="px-4 py-2 text-right">
                                      {data.views}
                                    </td>
                                    <td className="px-4 py-2 text-right">
                                      {data.clicks}
                                    </td>
                                    <td className="px-4 py-2 text-right">
                                      {(data.ctr * 100).toFixed(1)}%
                                    </td>
                                  </tr>
                                );
                              }
                            )}
                          </tbody>
                        </table>
                      </div>
                    );
                  }
                )
              )}
            </Section>
          </>
        )}
      </div>
    </div>
  );
}

/* ---------- Analytics helpers ---------- */

function computeExperimentMetrics(variants) {
  const result = {};

  Object.entries(variants).forEach(([variant, data]) => {
    const views = data.views || 0;
    const clicks = data.clicks || 0;

    result[variant] = {
      views,
      clicks,
      ctr: views > 0 ? clicks / views : 0
    };
  });

  return result;
}

function getWinnerVariant(variants) {
  let winner = null;
  let bestScore = -1;

  Object.entries(variants).forEach(([variant, data]) => {
    // Primary: CTR, Secondary: clicks, Tertiary: views
    const score = data.ctr * 1000 + data.clicks * 10 + data.views;

    if (score > bestScore) {
      bestScore = score;
      winner = variant;
    }
  });

  return winner;
}

/* ---------- UI helpers ---------- */

function Metric({ label, value }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 text-center">
      <p className="text-slate-500 text-sm">{label}</p>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="bg-white rounded-xl shadow-sm p-4">
        {children}
      </div>
    </section>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between border-b last:border-b-0 py-2 text-sm">
      <span className="text-slate-700">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}
