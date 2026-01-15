import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import "../globals.css"; 
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import NewNavigation from "@/components/NewNavigation";
import WebsiteSchema from "@/components/allSchema/WebsiteSchema";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Airniza",
    template: "%s - Airniza",
  },
  description:
    "Check real-time Air Quality Index (AQI), PM2.5, humidity, and temperature to monitor air pollution instantly.",
  
  // 1. Google Discover Large Image Preview permission
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },

  // 2. RSS Feed Link for Google Discover and Readers
  alternates: {
    types: {
      'application/rss+xml': [
        { url: 'https://airniza.com/feed.xml', title: 'Airniza | Latest Web Stories' },
      ],
    },
  },

  applicationName: "Airniza",
  openGraph: {
    siteName: "Airniza",
    title: "Airniza",
    description:
      "Check real-time AQI, PM2.5, humidity, and temperature to stay informed about air pollution instantly.",
    url: "https://airniza.com",
    type: "website",
  },
  other: {
    "apple-mobile-web-app-title": "Airniza",
    "mobile-web-app-capable": "Yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // WebSite schema data
  const schemaData = WebsiteSchema();

  return (
    <div className={`${inter.variable} ${playfair.variable} antialiased`}>
      {/* Scripts and Meta for Main Website only */}
      <Script
        id="adsense-init"
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5703495087334224"
        crossOrigin="anonymous"
      />
      
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <NewNavigation />
      
      <main>
        {children}
      </main>

      <Footer />
      <GoogleAnalytics gaId="G-C4HYV9CTDC" />
    </div>
  );
}