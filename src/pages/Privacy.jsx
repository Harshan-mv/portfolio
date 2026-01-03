import React from "react";
import { hasConsent, setConsent } from "../analytics/analytics";

export default function Privacy() {
  const consent = hasConsent();

  return (
    <div className="min-h-screen px-6 py-24 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Privacy & Analytics</h1>

      <p className="text-slate-600 mb-6">
        This site uses a custom analytics system to understand how visitors
        interact with the portfolio. No personal data is collected.
      </p>

      <div className="bg-slate-100 p-4 rounded-xl">
        <p className="mb-4">
          Analytics Tracking:{" "}
          <strong>{consent ? "Enabled" : "Disabled"}</strong>
        </p>

        <button
          onClick={() => {
            setConsent(!consent);
            window.location.reload();
          }}
          className="px-4 py-2 bg-slate-900 text-white rounded-lg"
        >
          {consent ? "Disable Tracking" : "Enable Tracking"}
        </button>
      </div>
    </div>
  );
}
