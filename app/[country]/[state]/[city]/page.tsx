import AirQualityDashboard from "@/components/AirQualityDashboard";
import Faqs from "@/components/Faqs";
import { RelatedCities } from "@/components/RelatedCities";
import { CityPageBreadcrumbs } from "@/components/allBreadcrumbs/CityPageBreadcrumbs";
import { PlaceToSlug } from "@/components/helpers/PlaceToSlug";
import FetchLocationData from "@/components/FetchLocationData";
import MajorPollutants from "@/components/MajorPollutants";
import { CitypageSchema } from "@/components/allSchema/CitypageSchema";
import SocialShare from "@/components/SocialShare";
import SecondParagraph from "@/components/Page UI Helpers/SecondParagraph";
import PollutantInfo from "@/components/Page UI Helpers/MainPollutantinfo";
import AdClientWrapper from "@/components/ui/AdClientWrapper";
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

  const siteURL = "https://airniza.com";
  const pageUrl = `${siteURL}/${country}/${state}/${citySlug}-air-quality`;

  const { aqi, condition, temp, humidity, ws, mainPollutant } = await getData(
    cityName
  );

  const metaDescription = `The live air quality index (AQI) in ${cityName} is ${aqi} (${condition}). Main pollutant: ${mainPollutant}. Temperature: ${temp}°C, humidity: ${humidity}%, wind speed: ${ws} km/h.
`;

  return {
    title: `${cityName} Live Air Quality Index (AQI) and Air Pollution`,
    description: metaDescription,
    alternates: {
      canonical: pageUrl,
    },

    openGraph: {
      title: `${cityName} Live Air Quality Index (AQI) and Air Pollution`,
      description: metaDescription,
      url: pageUrl,
      siteName: "Airniza",
      locale: "en_US",
      type: "website",
      images: [
        `https://airniza.com/api/og?city=${encodeURIComponent(
          cityName
        )}&aqi=${aqi}`,
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${cityName} Live Air Quality Index (AQI) and Air Pollution`,
      description: metaDescription,
      images: [
        `https://airniza.com/api/og?city=${encodeURIComponent(
          cityName
        )}&aqi=${aqi}`,
      ],
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

  const {
    aqi,
    condition,
    exp,
    temp,
    humidity,
    ws,
    state,
    country,
    co,
    no2,
    o3,
    so2,
    pm2_5,
    pm10,
    mainPollutant,
  } = await getData(cityName);
  const countrySlug = PlaceToSlug(country);
  const stateSlug = PlaceToSlug(state);

  const schemaData = CitypageSchema({
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
      {/*Ad Unit 1 */}

      <AirQualityDashboard
        place={cityName}
        state={state}
        country={country}
        aqi={aqi}
        pm25={pm2_5}
        mainPollutant={mainPollutant}
        NO2={no2}
        SO2={so2}
        CO={co}
        O3={o3}
        PM10={pm10}
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
      {/*Ad Unit 2 */}
      <AdClientWrapper
        adSlot="4717622864"
        adFormat="fluid"
        adLayout="in-article"
        style={{ margin: "20px 0" }}
      />
       
      <MajorPollutants
        pm25={pm2_5}
        pm10={pm10}
        no2={no2}
        o3={o3}
        co={co}
        so2={so2}
        place={cityName}
      />
      {/*Ad Unit 3 */}
      <PollutantInfo city={cityName} mainPollutant={mainPollutant} />
      <SecondParagraph city={citySlug} cityName={cityName} />

      <RelatedCities
        country={country}
        currentPlace={cityName}
        currentState={state}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl font-bold mb-3">
          Frequently Asked Questions about Air Quality {cityName}
        </h3>
        <Faqs place={cityName} aqi={aqi} status={condition} exp={exp} />
        <SocialShare
          url={`https://airniza.com/${countrySlug}/${stateSlug}/${citySlug}-air-quality`}
          city={cityName}
        />
      </div>
    </main>
  );
}
