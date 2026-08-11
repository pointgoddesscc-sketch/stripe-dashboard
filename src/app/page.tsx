import { isStripeConfigured } from "@/lib/stripe";

export default function HomePage() {
  const configured = isStripeConfigured();

  return (
    <>
      <div className="card">
        <h2>
          Dashboard Status
          {configured ? (
            <span className="badge">Live</span>
          ) : (
            <span className="badge" style={{ background: "#5f6368" }}>
              Demo
            </span>
          )}
        </h2>
        <p className="muted">
          {configured
            ? "Stripe is configured with a secret key. Ready for real API calls."
            : "Running in demo mode. Add a Stripe test key (sk_test_...) to .env.local to enable live data."}
        </p>
      </div>

      <div className="grid">
        <div className="card">
          <h2>Balance</h2>
          <p className="stat">{configured ? "…" : "—"}</p>
          <p className="muted">Available to payout</p>
        </div>
        <div className="card">
          <h2>Customers</h2>
          <p className="stat">{configured ? "…" : "—"}</p>
          <p className="muted">Total customers</p>
        </div>
        <div className="card">
          <h2>Invoices</h2>
          <p className="stat">{configured ? "…" : "—"}</p>
          <p className="muted">Open invoices</p>
        </div>
      </div>

      <div className="card" style={{ marginTop: "1.5rem" }}>
        <h2>Security & next steps</h2>
        <ol className="muted" style={{ paddingLeft: "1.25rem" }}>
          <li>Use only <strong>test</strong> keys while developing</li>
          <li>Copy .env.example → .env.local</li>
          <li>Run <code>npm install && npm run dev</code></li>
          <li>Deploy to Vercel and store keys as Environment Variables</li>
        </ol>
      </div>
    </>
  );
}
