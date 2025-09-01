import { locations } from "@/components/Locations";
import Link from "next/link";
import { CountryBreadcrumbs } from "@/components/allBreadcrumbs/countryBreadcrumbs";
import AirQualityDashboard from "@/components/AirQualityDashboard";
import { Badge } from "@/components/ui/badge";
import FetchLocationData from "@/components/FetchLocationData";

// Shared Promise Start
async function getData(place: string) {
  return FetchLocationData(place); // Always call API based on URL slug/param
}
// Shared Promise End

// ✅ Metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string;}>;
}) {
  const { country } = await params;

  const countryName = country
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: `${countryName} Air Quality Index (AQI) and Air Pollution`,
    description: `Check live ${countryName} Air Quality Index (AQI), air pollution levels, PM2.5, temperature and humidity updates.`,
    alternates: {
      canonical: `https://airniza.com/${country}`,
    },
    openGraph: {
      title: `${countryName} Air Quality Index (AQI)`,
      description: `Live air quality in ${countryName}: Check AQI, PM2.5 levels, and pollution trends with instant updates.`,
      url: `https://airniza.com/${country}`,
      type: "article",
    },
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ country: string;}>;
}) {
  const { country } = await params;

  if (!country) throw new Error("No country provided in params");

  // Slug -> Convert to readable country name
  const countrySlug = country;
  const countryName = countrySlug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

  // ✅ API call always based on URL param
  const { aqi, temp, humidity, ws } = await getData(countrySlug);

  // Local data: only show states if country exists in locations
  const countryData = locations.find(c => c.country === countrySlug);

  return (
    <main className="p-0">
      <AirQualityDashboard
        country={countryName}
        aqi={aqi}
        temp={temp}
        humidity={humidity}
        ws={ws}
        heading={`${countryName} Air Quality Index (AQI) and Air Pollution`}
        breadcrumbs={<CountryBreadcrumbs country={countryName} />}
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
                <Link
                  key={state.state}
                  href={`/${countrySlug}/${state.state}`}
                >
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
    </main>
  );
}
