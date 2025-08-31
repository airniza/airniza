import AirQualityDashboard from "@/components/AirQualityDashboard";
import Faqs from "@/components/Faqs";
import { RelatedCities } from "@/components/RelatedCities";
import { CitySchema } from "@/components/allSchema/CitySchema";
import { CityPageBreadcrumbs } from "@/components/allBreadcrumbs/CityPageBreadcrumbs";
import { PlaceToSlug } from "@/components/helpers/PlaceToSlug";
import IndoorAirQuality from "@/components/IndoorAirQuality";
import HealthRecommendations from "@/components/HealthRecommendations";
import FetchLocationData from "@/components/FetchLocationData";

// Shared Promise Start
async function getData(place: string) {
  return FetchLocationData(place);
}
// Shared Promise End

// ✅ Helper functions
function formatCitySlug(city: string): string {
  // remove trailing "-air-quality" if exists
  return city.replace(/-air-quality$/, "");
}

function formatCityName(citySlug: string): string {
  return citySlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; country: string; state: string }>;
}) {
  const { city, state, country } = await params;

  const citySlug = formatCitySlug(city); // "lucknow" | "new-york"
  const cityName = formatCityName(citySlug); // "Lucknow" | "New York"
  const countryName = formatCityName(country)

  const siteURL = "https://airniza.com";

  

  const pageUrl = `${siteURL}/${country}/${state}/${citySlug}-air-quality`;

  return {
    title: `${cityName} Air Quality Index (AQI) and Air Pollution`,
    description: `Check live ${cityName} Air Quality Index (AQI), air pollution levels, PM2.5, temperature and humidity updates.`,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${cityName} Air Quality Index (AQI) and ${countryName} Air Pollution`,
      description: `Check live ${cityName} Air Quality Index (AQI), air pollution levels, PM2.5, temperature and humidity updates.`,
      url: pageUrl,
      siteName: "Airniza",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${cityName} Air Quality Index (AQI) and ${countryName} Air Pollution`,
      description: `Check live ${cityName} Air Quality Index (AQI), air pollution levels, PM2.5, temperature and humidity updates.`,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string; country: string; state: string }>;
}) {
  const { city } = await params;

  const citySlug = formatCitySlug(city); // "lucknow"
  const cityName = formatCityName(citySlug); // "Lucknow"

  const { aqi, pm2_5, condition, exp, temp, state,country, humidity, ws } =
    await getData(cityName);
    const countrySlug = PlaceToSlug(country);
    const stateSlug = PlaceToSlug(state);
      
    
    
    

  const schemaData = CitySchema({
    City: cityName,
    pageUrl: `https://airniza.com/${countrySlug}/${stateSlug}/${citySlug}-air-quality`,
    country: country,
    Aqi: aqi,
    Pm2five: pm2_5,
    Temp: temp,
    Humidity: humidity,
    Ws: ws,
    Condition: condition,
    state: state,
    exp: exp
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
        place={cityName}
        state={state}
        country={country}
        aqi={aqi}
        temp={temp}
        humidity={humidity}
        ws={ws}
        breadcrumbs={
          <CityPageBreadcrumbs
            country={country}
            state={state}
            city={cityName}
          />
        }
      />

      <RelatedCities
        country={country}
        currentPlace={cityName}
        currentState={state}
      />
       <IndoorAirQuality aqi={aqi} place={cityName} state={state} country={country}/>
      <HealthRecommendations aqi={aqi} place={cityName} state={state} country={country}/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl font-bold mb-3">
          Frequently Asked Questions about Air Quality {cityName}
        </h3>
        <Faqs place={cityName} aqi={aqi} status={condition} exp={exp} />
        
      </div>
    </main>
  );
}
