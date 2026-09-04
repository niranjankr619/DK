import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/layout/ScrollProgress";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["600", "700", "800"],
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DezinersKnot — How a Milestone Gets Paid",
  description:
    "Interactive financial and operational breakdown of milestone escrow, Cashfree payment rails, commissions, and unit economics for DezinersKnot.",
  keywords: ["DezinersKnot", "Escrow", "Design Milestone", "Cashfree", "Design Marketplace", "Unit Economics"],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "DezinersKnot — How a Milestone Gets Paid",
    description: "Transparent milestone payments, automated compliance, and 91% net designer payout.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${instrument.variable}`}>
      <body className="bg-black text-tx font-instrument antialiased min-h-screen">
        <ScrollProgress />
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 md:px-8 pt-6 pb-16">
          {children}
        </div>


      </body>
    </html>
  );
}
