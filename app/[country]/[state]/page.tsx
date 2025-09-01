import { locations } from "@/components/Locations"; 
import Link from "next/link";
import { StateBreadcrumbs } from "@/components/allBreadcrumbs/stateBreadcrumbs";
import AirQualityDashboard from "@/components/AirQualityDashboard";
import { Badge } from "@/components/ui/badge"; 
import FetchLocationData from "@/components/FetchLocationData";

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

  const stateName = state.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  const countryName = country.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

  const title = `${stateName} Air Quality Index (AQI) and ${countryName} Air Pollution`;
  const description = `Check live ${stateName} Air Quality Index (AQI), air pollution levels, PM2.5, temperature and humidity updates.`;
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
    },
  };
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ city: string; country: string; state: string }>;
}) {
  const { state, country } = await params;

  if (!state || !country) throw new Error("Country or state not provided in params");

  // ✅ Normalize slugs to display names
  const stateSlug = state;
  const stateName = state.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  const countrySlug = country;
  const countryName = country.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

  // ✅ Always fetch data from API (even if local data exists)
  const { aqi,temp, humidity, ws } =
    await getData(state);

  // ✅ Local data lookup for states & cities
  const countryData = locations.find(c => c.country === countrySlug);
  const stateData = countryData?.states.find(s => s.state === stateSlug);

  return (
    <main className="p-0">
      {/* ✅ Air Quality Dashboard */}
      <AirQualityDashboard
        state={stateName}
        country={countryName}
        aqi={aqi}
        temp={temp}
        humidity={humidity}
        ws={ws}
        breadcrumbs={<StateBreadcrumbs country={country} state={state} />}
      />

      {/* ✅ Show cities if available in local data */}
      {stateData && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-semibold mb-3">Explore City-wise Air Quality Index (AQI) in {stateName}</h2>
          <div className="flex flex-wrap gap-2">
            {stateData.cities.map((city) => {
              const cityName = city.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
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
    </main>
  );
}
