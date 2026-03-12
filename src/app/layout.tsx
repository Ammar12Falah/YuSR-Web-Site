import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "YuSR — Applied AI for the Physical World",
  description:
    "YuSR builds enterprise language models, domain-specific AI systems, and autonomous agent platforms. From subsurface physics to intelligent orchestration.",
  keywords: [
    "AI",
    "LLM",
    "enterprise AI",
    "geoscience AI",
    "agent platform",
    "MoE",
    "YuSR",
  ],
  openGraph: {
    title: "YuSR — Applied AI for the Physical World",
    description:
      "Enterprise language models, domain AI, and agent orchestration.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
