import { locations } from "@/components/Locations";
import Link from "next/link";
import { CountryBreadcrumbs } from "@/components/allBreadcrumbs/countryBreadcrumbs";
import AirQualityDashboard from "@/components/AirQualityDashboard";
import { Badge } from "@/components/ui/badge";
import FetchLocationData from "@/components/FetchLocationData";
import Faqs from "@/components/Faqs";
import MajorPollutants from "@/components/MajorPollutants";
import { CountrypageSchema } from "@/components/allSchema/CountrypageSchema";

// Shared Promise Start
async function getData(place: string) {
  return FetchLocationData(place); // Always call API based on URL slug/param
}
// Shared Promise End

// ✅ Metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;

  const countryName = country
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  const { aqi, temp, humidity, ws, condition, mainPollutant } = await getData(
    countryName
  );

  return {
    title: `${countryName} Air Quality Index (AQI) and Air Pollution`,
    description: `The current air quality in ${countryName} is ${aqi} (${condition}). Main pollutant is ${mainPollutant}, temperature ${temp}°C, humidity ${humidity}%, and wind speed ${ws} km/h.`,
    url: `https://airniza.com/${country}`,
    alternates: {
      canonical: `https://airniza.com/${country}`,
    },
    openGraph: {
      title: `${countryName} Air Quality Index (AQI)`,
      description: `The current air quality in ${countryName} is ${aqi} (${condition}). Main pollutant is ${mainPollutant}, temperature ${temp}°C, humidity ${humidity}%, and wind speed ${ws} km/h.`,
      url: `https://airniza.com/${country}`,
      type: "article",
    },
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;

  if (!country) throw new Error("No country provided in params");

  // Slug -> Convert to readable country name
  const countrySlug = country;
  const countryName = countrySlug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  // ✅ API call always based on URL param
  const {
    aqi,
    temp,
    humidity,
    ws,
    condition,
    exp,
    mainPollutant,
    pm2_5,
    pm10,
    no2,
    o3,
    co,
    so2,
  } = await getData(countryName);

  // Local data: only show states if country exists in locations
  const countryData = locations.find((c) => c.country === countrySlug);

  //Country page Schema
  const schemaData = CountrypageSchema({
    Country: countryName,
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

  return (
    <main className="p-0">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
      <AirQualityDashboard
        mainPollutant={mainPollutant}
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
        breadcrumbs={<CountryBreadcrumbs country={countryName} />}
      />
      <MajorPollutants
        pm25={pm2_5}
        pm10={pm10}
        no2={no2}
        o3={o3}
        co={co}
        so2={so2}
      />

      {/* Show states list only if available in local data */}
      {countryData && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-bold mb-6">
            Explore State-wise Air Quality Index (AQI) in the {countryName}
          </h2>

          <div className="flex flex-wrap gap-3">
            {countryData.states.map((state) => {
              const stateName = state.state
                .replace(/-/g, " ")
                .replace(/\b\w/g, (c) => c.toUpperCase());

              return (
                <Link key={state.state} href={`/${countrySlug}/${state.state}`}>
                  <Badge
                    variant="secondary"
                    className="cursor-pointer text-sm px-4 py-2 text-primary"
                  >
                    {stateName}
                  </Badge>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl font-bold mb-3">
          Frequently Asked Questions about Air Quality {countryName}
        </h3>
        <Faqs place={countryName} aqi={aqi} status={condition} exp={exp} />
      </div>
    </main>
  );
}
