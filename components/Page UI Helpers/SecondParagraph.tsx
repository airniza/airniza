import React from "react";
import { cityData, CityInfo } from "./LocaldataofCities";
import Image from "next/image";

type CityAirQualityProps = {
  city: string; // should match a key in cityData
  cityName?: string; // optional display name
};

export default function CityAirQuality({
  city,
  cityName,
}: CityAirQualityProps) {
  const data: CityInfo | undefined = cityData[city];
  if (!data) return null;

  const displayName = cityName ?? city.replace(/-/g, " ");

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-5 py-5">
      <h2 className="text-2xl text-primary font-bold mb-3">
        About {cityName}: Climate, Air Quality and Local Environment
      </h2>

      {/* Paragraph 1: Overview + Climate */}
      <p>{data.description}</p>

      {/* Image if available */}
      {data.image && (
        <div className="mt-6 ">
          <figure className="my-6">
            <Image
              src={data.image}
              alt={`${cityName} air quality`}
              width={600}
              height={315}
              className="mx-auto rounded-xl"
            />
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              {cityName}
            </figcaption>
          </figure>
        </div>
      )}
      {/* Paragraph 2: Pollution Insight */}
      <p className="mt-2">{data.pollutionInsight}</p>
    </section>
  );
}
