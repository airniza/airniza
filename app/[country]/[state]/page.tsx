import { locations } from "@/components/Locations";
import Link from "next/link";
import { StateBreadcrumbs } from "@/components/allBreadcrumbs/stateBreadcrumbs";
import AirQualityDashboard from "@/components/AirQualityDashboard";
import { Badge } from "@/components/ui/badge";
import FetchLocationData from "@/components/FetchLocationData";
import MajorPollutants from "@/components/MajorPollutants";
import Faqs from "@/components/Faqs";
import { StatepageSchema } from "@/components/allSchema/StatepageSchema";
import { fetchAIContent } from "@/lib/aiworker";

export const revalidate = 3600; // 1 hour


// ✅ Shared Promise: Fetch AQI and weather data for given location
async function getData(place: string) {
  return FetchLocationData(place);
}

// ✅ Metadata function
export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; country: string; state: string }>;
}) {
  const { country, state } = await params;

  const stateName = state
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  const countryName = country
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  const { aqi, temp, humidity, ws, condition, mainPollutant } = await getData(
    state
  );

  const title = `${stateName} Air Quality Index (AQI) and ${countryName} Air Pollution`;
  const description = `The current air quality in ${stateName} is ${aqi} (${condition}). Main pollutant is ${mainPollutant}, temperature ${temp}°C, humidity ${humidity}%, and wind speed ${ws} km/h.`;
  const canonical = `https://airniza.com/${country}/${state}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      images: [
        `https://airniza.com/api/og?city=${encodeURIComponent(
          stateName
        )}&aqi=${aqi}`,
      ],
    },
  };
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ city: string; country: string; state: string }>;
}) {
  const { state, country } = await params;

  if (!state || !country) throw new Error("Country or state not provided");

  // ✅ Normalize slugs to display names
  const stateSlug = state;
  const stateName = state
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  const countrySlug = country;
  const countryName = country
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  // ✅ Always fetch data from API (even if local data exists)
  const {
    aqi,
    temp,
    humidity,
    ws,
    pm2_5,
    pm10,
    no2,
    o3,
    co,
    so2,
    mainPollutant,
    exp,
    condition,
  } = await getData(state);

  // ✅ Local data lookup for states & cities
  const countryData = locations.find((c) => c.country === countrySlug);
  const stateData = countryData?.states.find((s) => s.state === stateSlug);


// ✅ Generate AI prompt
  const aiPrompt = `
Explain AQI ${aqi} in ${stateName} in HTML format.
Use headings (<h2>, <h3>), bold (<strong>), lists (<ul><li>) where appropriate.
Include health precautions for children, elderly, and sensitive groups.
Use simple, SEO-friendly language.
Do not include Markdown symbols like ** or *.
`;

  // ✅ Fetch AI content from Worker
  let aiContent = "";
  try {
    aiContent = await fetchAIContent(aiPrompt);
  } catch (error) {
    console.error("AI Worker fetch failed:", error);
    aiContent = "AI content is currently unavailable. Please check back later.";
  }


  //Statepage Schema
  const schemaData = StatepageSchema({
    State: stateName,
    country: countryName,
    Aqi: aqi,
    Pm2five: pm2_5,
    Temp: temp,
    Humidity: humidity,
    Ws: ws,
    Condition: condition,
    exp: exp,
    Pm10: pm10,
    O3: o3,
    NO2: no2,
    SO2: so2,
    CO: co,
    mainPollutant: mainPollutant,
  });
  // ✅ RETURN props + ISR 1 hour
  

  

  return (
    <main className="p-0">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      {/* ✅ Air Quality Dashboard */}
      <AirQualityDashboard
        state={stateName}
        country={countryName}
        aqi={aqi}
        pm25={pm2_5}
        NO2={no2}
        SO2={so2}
        CO={co}
        O3={o3}
        PM10={pm10}
        temp={temp}
        humidity={humidity}
        ws={ws}
        mainPollutant={mainPollutant}
        breadcrumbs={<StateBreadcrumbs country={country} state={state} />}
      />
      {/* ✅ AI-generated content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <h3 className="text-2xl font-bold mb-3">Air Quality Overview for {stateName}</h3>
  <div dangerouslySetInnerHTML={{ __html: aiContent }} className="prose dark:prose-invert" />
</div>


      <MajorPollutants
        pm25={pm2_5}
        pm10={pm10}
        no2={no2}
        o3={o3}
        co={co}
        so2={so2}
      />

      {/* ✅ Show cities if available in local data */}
      {stateData && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-semibold mb-3">
            Explore City-wise Air Quality Index (AQI) in {stateName}
          </h2>
          <div className="flex flex-wrap gap-2">
            {stateData.cities.map((city) => {
              const cityName = city
                .replace(/-/g, " ")
                .replace(/\b\w/g, (c) => c.toUpperCase());
              return (
                <Link
                  key={city}
                  href={`/${countrySlug}/${stateSlug}/${city}-air-quality`}
                >
                  <Badge
                    variant="secondary"
                    className="cursor-pointer text-sm px-4 py-2 text-primary"
                  >
                    {cityName}
                  </Badge>
                </Link>
              );
            })}
          </div>
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl font-bold mb-3">
          Frequently Asked Questions about Air Quality {stateName}
        </h3>
        <Faqs place={stateName} aqi={aqi} status={condition} exp={exp} />
      </div>
    </main>
  );
}

