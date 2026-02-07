import type { Metadata } from "next";
import { Inter, Playfair_Display, Montserrat } from "next/font/google"; // Added premium fonts
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "Edistone Real Estates | Luxury Living Redefined",
  description: "Experience the pinnacle of luxury with Edistone Real Estates Private Limited. Building dreams, crafting legacies in Ghaziabad and NCR.",
  icons: {
    icon: '/favicon.ico', // Default Next.js icon or replace with custom
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: "Edistone Real Estates",
    description: "Premium Real Estate in Ghaziabad and NCR",
    url: "https://edistonerealestates.com",
    siteName: "Edistone",
    images: [
      {
        url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${montserrat.variable}`}>
      <body className="antialiased bg-slate-50 text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}
