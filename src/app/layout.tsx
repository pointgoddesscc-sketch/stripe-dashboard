import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OrgSuite Stripe Dashboard",
  description: "Professional payments dashboard for Point Goddess CC / PSE Management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container">
            <h1>OrgSuite Stripe Dashboard</h1>
            <p className="subtitle">Point Goddess CC / PSE Management</p>
          </div>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
