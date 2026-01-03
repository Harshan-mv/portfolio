// src/analytics/analytics.js

/* =====================================================
   Configuration
===================================================== */

const ANALYTICS_ENDPOINT = "/api/events";
const SESSION_KEY = "vv_session_id";
const CONSENT_KEY = "vv_analytics_consent";

/* =====================================================
   Session Management (Anonymous)
===================================================== */

/**
 * Generate a lightweight anonymous session ID
 * No PII, no fingerprinting
 */
function generateSessionId() {
  return (
    "sess_" +
    Math.random().toString(36).substring(2, 10) +
    Date.now().toString(36)
  );
}

/**
 * Get or create session ID (persisted per browser)
 */
function getSessionId() {
  try {
    let sessionId = localStorage.getItem(SESSION_KEY);
    if (!sessionId) {
      sessionId = generateSessionId();
      localStorage.setItem(SESSION_KEY, sessionId);
    }
    return sessionId;
  } catch {
    // Fallback if storage is unavailable
    return generateSessionId();
  }
}

/* =====================================================
   Consent Management (Privacy-aware)
===================================================== */

/**
 * Check if analytics tracking is allowed
 * Default: true (demo-friendly)
 */
export function hasConsent() {
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    return stored === null ? true : stored === "true";
  } catch {
    return true;
  }
}

/**
 * Explicitly set user consent
 */
export function setConsent(value) {
  try {
    localStorage.setItem(CONSENT_KEY, String(value));
  } catch {
    // Ignore storage failures
  }
}

/* =====================================================
   Core Event Tracking
===================================================== */

/**
 * Track an analytics event
 *
 * @param {string} eventName - canonical event name
 * @param {object} payload - event metadata
 */
export async function trackEvent(eventName, payload = {}) {
  try {
    if (!hasConsent()) return;

    if (!eventName || typeof eventName !== "string") return;

    const event = {
      event_name: eventName,
      session_id: getSessionId(),
      timestamp: new Date().toISOString(),
      url: window.location.pathname,
      user_agent: navigator.userAgent,
      payload
    };

    // Fire-and-forget (never block UI)
    if (navigator.sendBeacon) {
      navigator.sendBeacon(
        ANALYTICS_ENDPOINT,
        JSON.stringify(event)
      );
    } else {
      fetch(ANALYTICS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(event),
        keepalive: true
      }).catch(() => {});
    }
  } catch (err) {
    // Analytics must NEVER break the site
    console.warn("Analytics tracking failed:", err);
  }
}
