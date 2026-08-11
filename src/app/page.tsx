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
            ? "Stripe is configured. Real data will appear when API calls are added."
            : "Running in demo mode. Add STRIPE_SECRET_KEY (test key) to .env.local to enable live data."}
        </p>
      </div>

      <div className="grid">
        <div className="card">
          <h2>Balance</h2>
          <p className="stat">—</p>
          <p className="muted">Available to payout</p>
        </div>
        <div className="card">
          <h2>Customers</h2>
          <p className="stat">—</p>
          <p className="muted">Total customers</p>
        </div>
        <div className="card">
          <h2>Invoices</h2>
          <p className="stat">—</p>
          <p className="muted">Open invoices</p>
        </div>
      </div>

      <div className="card" style={{ marginTop: "1.5rem" }}>
        <h2>Next steps</h2>
        <ol className="muted" style={{ paddingLeft: "1.25rem" }}>
          <li>Copy .env.example → .env.local</li>
          <li>Add Stripe test keys only</li>
          <li>Run npm install && npm run dev</li>
          <li>Extend with real Stripe API calls when ready</li>
        </ol>
      </div>
    </>
  );
}
