import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://udayacgamage-portfolio.vercel.app"),
  title: "Udaya Chathuranga — Networking, Security & Development",
  description:
    "Udaya Chathuranga: network-focused developer and BICT undergraduate in Sri Lanka. Explore networking, IoT monitoring, Flutter and React Native mobile apps, and web projects.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Udaya Chathuranga — Networking, Security & Development",
    description:
      "Connected systems. Curiosity at work. Explore my networking, IoT, mobile, and web projects.",
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
