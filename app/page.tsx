// app/page.tsx
import ClientShowDataWrapper from "@/components/helpers/ClientShowdataWrapper";
import HomepageSchema from "@/components/allSchema/HomepageSchema";

export const metadata = {
  title: "Airniza",
  description:
    "Get real-time air quality index (AQI) data, PM2.5, humidity, temperature, and pollution levels for cities across the world. Updated instantly.",
  alternates: {
    canonical: "https://airniza.com/",
  },
};

export default async function Home() {
  const schemaData = HomepageSchema();

  // Server-side fallback for IP-based location
  let fallbackData = null;
  try {
    // Use your absolute URL for server-side fetch
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/getaqi`);
    if (res.ok) {
      fallbackData = await res.json();
    } else {
      console.error("Failed to fetch fallback AQI data, status:", res.status);
    }
  } catch (e) {
    console.error("Error fetching fallback AQI data", e);
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Schema markup */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main>
        {/* Client-side live location update */}
        <ClientShowDataWrapper fallbackData={fallbackData} />
      </main>
    </div>
  );
}
