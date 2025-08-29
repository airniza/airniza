import Link from "next/link";


export const metadata = {
  title: "License",
  description: "Airniza license page", 
  alternates:{
    canonical: "https://airniza.com/license"
  }
}




export default function LicensePage() {
  const licenseSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Air Quality Data License and Usage Policy",
    "url": "https://airniza.com/license",
    "description": "Learn how to use Airniza's real-time air quality data, including AQI, PM2.5, temperature, and humidity information. Follow proper attribution and licensing guidelines.",
    "license": "https://creativecommons.org/licenses/by/4.0/",
    "publisher": {
      "@type": "Organization",
      "name": "Airniza",
      "url": "https://airniza.com"
    }
  };

  return (
    <main className="prose max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(licenseSchema) }}
      />

      <h1 className="text-3xl font-bold mb-4">
        Air Quality Data License and Usage Policy
      </h1>

      <p className="text-gray-700">
        Airniza provides <strong>real-time air quality data</strong>, including AQI, PM2.5, temperature, and humidity, to help individuals, researchers, and organizations make informed decisions. This page explains <strong>how our air quality data can be used, shared, and properly attributed</strong> under our licensing guidelines.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Permitted Use of Data</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>{`Personal, educational, and research use of Airniza's real-time air quality data.`}</li>
        <li>Quoting or republishing small portions with clear attribution to Airniza.</li>
        <li>Using data in news articles, blogs, or presentations with proper attribution.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Restricted Use</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>No resale, commercial redistribution, or bulk data extraction without written permission.</li>
        <li>No automated scraping or use of bots to extract large datasets.</li>
        <li>{`No presenting Airniza's data as your own without proper attribution.`}</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">License Information</h2>
      <p className="text-gray-700">
        {`Airniza's air quality data is published under the <strong>Creative Commons Attribution 4.0 International License (CC BY 4.0)</strong>. This license allows sharing and adaptation of the data with proper credit.`}
      </p>
      <p className="text-gray-700">
        Full license details:{" "}
        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener"
          className="text-blue-600 underline"
        >
          https://creativecommons.org/licenses/by/4.0/
        </a>
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-2">Attribution Example</h2>
      <blockquote className="italic border-l-4 border-gray-300 pl-4 text-gray-600">
        Air quality data sourced from Airniza
      </blockquote>

      <h2 className="text-2xl font-bold mt-8 mb-4">Contact</h2>
      <p className="text-gray-700">
        For questions about data licensing or attribution, you can{" "}
        <Link href="/contact-us" className="text-blue-600 font-bold underline">
          contact us
        </Link>{" "}
        anytime.
      </p>
    </main>
  );
}
