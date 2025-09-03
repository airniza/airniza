import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import NewNavigation from "@/components/NewNavigation";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Airniza",
    template: "%s - Airniza"
  },
  description:
    "Check real-time Air Quality Index (AQI), PM2.5, humidity, and temperature to monitor air pollution instantly.",
    applicationName: "Airniza",
    openGraph:{
      siteName: "Airniza",
      title: "Airniza",
      description: "Check real-time AQI, PM2.5, humidity, and temperature to stay informed about air pollution instantly.",
      url: "https://airniza.com",
      type: "website"


    },
    other: {"apple-mobile-web-app-title": "Airniza",
            "mobile-web-app-capable": "Yes",
            "apple-mobile-web-app-status-bar-style": "default"

    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

     // WebSite schema
 const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://airniza.com/#website",
  "name": "Airniza",
  "url": "https://airniza.com/",
  "inLanguage": "en",
  "publisher": {
    "@type": "Organization",
    "@id": "https://airniza.com/#organization",
    "name": "Airniza",
    "url": "https://airniza.com/",
    "logo": {
      "@type": "ImageObject",
      "@id": "https://airniza.com/#logo",
      "url": "https://airniza.com/logo.png",
      "width": 250,
      "height": 60,
      "caption": "Airniza Logo"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61579195018666",
      "https://x.com/air_quality_now"
    ]
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://airniza.com/search?query={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};







  return (
    <html lang="en" suppressHydrationWarning >
      <head>
      <script id="adsense-init" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5703495087334224"
     crossOrigin="anonymous"></script>
     <meta property="fb:app_id" content="24164145333270926" />
      </head>
      
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
        <NewNavigation />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-C4HYV9CTDC" />
      </body>
    </html>
  );
}
