import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

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
    "Official website of Aeysha Mahmood — children's book author, storyteller, and founder of Ryterly Publishing. Explore her books, story, and publishing journey.",
  keywords: [
    "Aeysha Mahmood",
    "children's book author",
    "Ryterly Publishing",
    "Lilly and Tommy",
    "History's Wildest Tales",
    "kids books",
    "self-publishing",
    "author website",
  ],
  authors: [{ name: "Aeysha Mahmood" }],
  creator: "Aeysha Mahmood",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://aeyshaa.com",
    siteName: "Aeysha Mahmood",
    title: "Aeysha Mahmood — Author & Storyteller",
    description: "Children's book author and founder of Ryterly Publishing.",
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
  alternates: {
    canonical: "https://aeyshaa.com",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Aeysha Mahmood",
  url: "https://aeyshaa.com",
  description:
    "Official website of Aeysha Mahmood — children's book author, storyteller, and founder of Ryterly Publishing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmsans.variable} ${cormorant.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#FFF0F3" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='12' fill='%23B76E79'/><text y='.9em' font-size='72' x='50' text-anchor='middle' fill='white' font-family='Georgia,serif' font-weight='bold'>A</text></svg>"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="bg-offwhite font-dmsans">
        {/* Skip to main content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-rosegold focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:font-dmsans focus:text-sm focus:outline-none"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
