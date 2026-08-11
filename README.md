# OrgSuite Stripe Dashboard

Professional Stripe payments dashboard for **Point Goddess CC / PSE Management**.

Built with Next.js + TypeScript. Ready for local development and Vercel deployment.

---

## Features included

- Clean dark professional UI
- Dashboard status (Live / Demo mode)
- Placeholder cards for Balance, Customers, Invoices
- Secure Stripe client helper
- Environment-based configuration only

---

## Clone into Working Copy

```
https://github.com/pointgoddesscc-sketch/stripe-dashboard.git
```

---

## Quick start (local)

1. Clone the repository
2. Copy environment template:
   ```bash
   cp .env.example .env.local
   ```
3. Add **test** Stripe keys only:
   - `STRIPE_SECRET_KEY=sk_test_...`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...`
4. Install and run:
   ```bash
   npm install
   npm run dev
   ```
5. Open http://localhost:3000

---

## Project structure

```
stripe-dashboard/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── lib/
│       └── stripe.ts
├── .env.example
├── .gitignore
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```

---

## Security rules

- Use **test keys only** while developing
- Never commit real secret keys or a real `.env.local`
- On Vercel, store keys as Environment Variables / Secrets
- Prefer restricted API keys when moving to production

---

## Deploy to Vercel

1. Import this repository in Vercel
2. Add the Stripe environment variables in the Vercel project settings
3. Deploy

---

## Next extensions (optional)

- Fetch real balance, customers, and invoices with the Stripe API
- Add pagination and search
- Webhook endpoint for payment events
- Role-based access if needed later

---

**Account:** pointgoddesscc@gmail.com  
**GitHub:** pointgoddesscc-sketch  
**Stack:** Next.js 14 · TypeScript · Stripe

This dashboard is production-ready as a professional starter.
