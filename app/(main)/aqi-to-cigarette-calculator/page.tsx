import FetchLocationData from "@/components/FetchLocationData";
import CigeretteLocationSearch from "@/components/helpers/CigeretteLocationSearch";
import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

/* =========================
   METADATA (SEO + OpenGraph + Twitter)
========================= */
export async function generateMetadata(
  { searchParams }: { searchParams: Promise<{ city?: string }> }
): Promise<Metadata> {
  const params = await searchParams;
  const city = params.city;

  const title = city
    ? `AQI to Cigarette Calculator – ${city} Air Pollution Exposure`
    : "AQI to Cigarette Calculator – Air Pollution Smoking Equivalent";

  const description = city
    ? `Understand air pollution exposure in ${city} by converting real-time PM2.5 levels into a cigarette-equivalent estimate for awareness.`
    : "Estimate cigarette-equivalent exposure from air pollution using real-time PM2.5 levels. Free online AQI to cigarette smoke calculator.";

  const url = "https://airniza.com/aqi-to-cigarette-calculator";
  const image = "https://airniza.com/og-images/aqi-cigarette-calculator.png"; // Replace with your actual OG image

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Airniza",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "AQI to Cigarette Calculator",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      site: "@airniza", // replace with your Twitter handle
    },
  };
}

/* =========================
   PAGE COMPONENT
========================= */
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ city?: string }>;
}) {
  const params = await searchParams;
  const cityName = params.city;

  let data = null;

  if (cityName) {
    try {
      data = await FetchLocationData(cityName);
    } catch (e) {
      console.error("Fetch failed for city:", cityName);
    }
  }

  const cigs = data ? (data.pm2_5 / 22).toFixed(1) : null;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* ================= HEADER ================= */}
      <header className="bg-slate-900 py-16 px-4 text-center text-white border-b-4 border-red-600">
        <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
          AQI to Cigarette Calculator
        </h1>

        <p className="text-slate-400 mb-8 max-w-xl mx-auto text-sm">
          Convert real-time PM2.5 air pollution levels into a cigarette-equivalent
          estimate (AQI to cigarette smoke) for easy awareness and comparison.
        </p>

        <div className="max-w-md mx-auto">
          <CigeretteLocationSearch />
        </div>
      </header>

      {/* ================= MAIN ================= */}
      <main className="max-w-4xl mx-auto px-4 -mt-10 pb-24">
        {/* ===== RESULT ===== */}
        {data && cigs ? (
          <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="bg-white rounded-3xl shadow-xl border p-8 md:p-12 text-center">
              <p className="text-xs  uppercase text-red-600 tracking-widest mb-4">
              <span className="font-bold">Location:</span>  {cityName}, {data.state}, {data.country}
              </p>

              <div className="flex justify-center items-baseline gap-2 mb-4">
                <span className="text-8xl md:text-9xl font-black">{cigs}</span>
                <span className="text-xl font-bold text-slate-400 uppercase">
                  cigarettes / day
                </span>
              </div>

              <p className="text-xs text-slate-500">
                Comparison based on widely referenced PM2.5 exposure research
              </p>

              <div className="flex flex-wrap justify-center gap-2 p-4">
                {[...Array(Math.max(0, Math.floor(Number(cigs))))].map((_, i) => (
                  <span key={i} className="text-4xl">
                    🚬
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-2xl border shadow-sm">
                <p className="text-[10px] font-bold text-slate-400 uppercase">
                  AQI Index
                </p>
                <p className="text-xl font-black text-orange-600">{data.aqi}</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border shadow-sm">
                <p className="text-[10px] font-bold text-slate-400 uppercase">
                  PM2.5
                </p>
                <p className="text-xl font-black">
                  {data.pm2_5} <span className="text-[10px]">µg/m³</span>
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border shadow-sm">
                <p className="text-[10px] font-bold text-slate-400 uppercase">
                  Air Quality
                </p>
                <p className="text-sm font-bold text-red-600 uppercase">
                  {data.condition}
                </p>
              </div>
            </div>
          </section>
        ) : (
          <div className="bg-white p-20 rounded-3xl border-4 border-dashed border-slate-200 text-center font-bold text-slate-400 uppercase tracking-widest">
            Search a city to begin
          </div>
        )}

        {/* ================= CONTENT ================= */}
        <article className="mt-20 prose prose-slate max-w-none bg-white p-8 rounded-3xl border shadow-lg text-sm md:text-base">
          <h2 className="text-xl font-bold mb-1">How does the AQI to cigarette calculation work?</h2>
          <p>
            Berkeley Earth and other studies have found that breathing in an average PM2.5 concentration of about 22 µg/m³ for a long time may be similar to smoking one cigarette a day. This calculator converts AQI levels to a cigarette-equivalent estimate for easy understanding.
          </p>

          <h2 className="text-xl font-bold mb-1 mt-3">Is this calculator medically accurate?</h2>
          <p>
            The tool is intended for awareness and educational purposes only.  It provides approximate comparison data and should not be considered medical advice.
          </p>

          <h2 className="text-xl mb-1 mt-3 font-bold">Why PM2.5 is compared to cigarettes?</h2>
          <p>
            PM2.5 particles are small enough to reach deep into the lungs, and
            comparisons with cigarettes make it easier for general audiences to
            visualize the impact of air <Link href={"/united-states"} className="text-primary">pollution</Link>.
          </p>
        </article>

        {/* ================= FAQ ================= */}
        <section className="mt-16 bg-white rounded-3xl border shadow-lg p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-black mb-6">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1">
              <AccordionTrigger>
                What does AQI to cigarette comparison mean?
              </AccordionTrigger>
              <AccordionContent>
                It is an approximate way to explain PM2.5 air pollution levels
                using a familiar reference (cigarettes). Helps visualize exposure.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2">
              <AccordionTrigger>
                Is breathing polluted air the same as smoking?
              </AccordionTrigger>
              <AccordionContent>
                No. Air pollution and smoking affect the body differently. This
                tool is for awareness only.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3">
              <AccordionTrigger>
                Which pollutant is used in this calculator?
              </AccordionTrigger>
              <AccordionContent>
                The calculator uses PM2.5 because it is widely monitored and
                consistently studied in air quality research.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4">
              <AccordionTrigger>
                Limitations & disclaimer
              </AccordionTrigger>
              <AccordionContent>
                Actual exposure varies by location, time outdoors, and indoor
                air quality. Results are estimates only and not medical advice.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* ================= SCHEMA ================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "AQI to Cigarette Calculator",
              "applicationCategory": "HealthApplication",
              "operatingSystem": "Web",
              "url": "https://airniza.com/aqi-to-cigarette-calculator",
              "description":
                "An interactive calculator converting PM2.5 air pollution data into cigarette-equivalent exposure for awareness and educational purposes.",
              "isAccessibleForFree": true,
              "creator": {
                "@type": "Organization",
                "name": "Airniza",
                "url": "https://airniza.com",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What does AQI to cigarette comparison mean?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "It is an approximate way to explain PM2.5 air pollution levels using a familiar reference (cigarettes)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is breathing polluted air the same as smoking?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "No. Air pollution and smoking affect the body differently. This tool is for awareness only."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which pollutant is used in this calculator?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "The calculator uses PM2.5 because it is widely monitored and studied in air quality research."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Limitations & disclaimer",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                      "Actual exposure varies by location, time outdoors, and indoor air quality. Results are estimates only and not medical advice."
                  }
                }
              ]
            }),
          }}
        />
      </main>
    </div>
  );
}
