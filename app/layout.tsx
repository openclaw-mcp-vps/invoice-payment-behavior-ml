import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InvoicePredict — Predict Which Invoices Will Be Paid Late",
  description: "ML model predicts invoice payment likelihood based on customer history and invoice data. Built for freelancers and small business owners."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="92c2205e-81eb-479c-96d4-ce93624b4d1b"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
