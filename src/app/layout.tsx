import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://udayacgamage-portfolio.vercel.app"),
  title: "Udaya Chathuranga — Networking, Security & Development",
  description:
    "Udaya Chathuranga — BICT undergraduate at the University of Sri Jayewardenepura focusing on network engineering, cyber security, IoT telemetry, and software development.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Udaya Chathuranga — Networking, Security & Development",
    description:
      "Network engineering, IoT telemetry pipelines, and software development portfolio of Udaya Chathuranga.",
    type: "website",
    images: [{ url: "/profile.jpg", alt: "Udaya Chathuranga" }],
  },
  twitter: { card: "summary", images: ["/profile.jpg"] },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
