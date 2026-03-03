import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmsans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aeyshaa.com"),
  title: {
    default: "Aeysha Mahmood — Author & Storyteller",
    template: "%s | Aeysha Mahmood",
  },
  description:
    "Aeysha Mahmood is a published children's book author, book designer, and founder of Ryterly Publishing. Explore her books and publishing services.",
  keywords: [
    "Aeysha Mahmood",
    "children's book author",
    "Ryterly Publishing",
    "Lilly and Tommy",
    "History's Wildest Tales",
    "children's books",
    "author",
  ],
  authors: [{ name: "Aeysha Mahmood" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://aeyshaa.com",
    siteName: "Aeysha Mahmood",
    title: "Aeysha Mahmood — Author. Storyteller. Publishing Visionary.",
    description:
      "From children's tales that spark imagination to wild history that makes kids say 'No way!' — I write books that bring stories to life.",
    images: [
      {
        url: "/assets/Aeysha-headshot.webp",
        width: 1200,
        height: 630,
        alt: "Aeysha Mahmood",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aeysha Mahmood — Author & Storyteller",
    description: "Children's book author and founder of Ryterly Publishing.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmsans.variable} ${cormorant.variable}`}>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='12' fill='%23B76E79'/><text y='.9em' font-size='72' x='50' text-anchor='middle' fill='white' font-family='Georgia,serif' font-weight='bold'>A</text></svg>" />
      </head>
      <body className="bg-offwhite font-dmsans">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
