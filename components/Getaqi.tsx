"use server";

import { GeoIP } from "./GeoIP";

// GeoIP response type
type GeoIPResponse = {
  address: {
    latitude: number;
    longitude: number;
  };
};

// Location by IP start
const ipcords = (await GeoIP()) as GeoIPResponse;

const ip_lat = ipcords.address.latitude;
const ip_lon = ipcords.address.longitude;

const lat = ip_lat;
const lon = ip_lon;
// Location by IP end

// Exported function
export async function Getaqi() {
  const response = await fetch(
    `https://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=${process.env.apikey}`,
    {
      next: { revalidate: 86400 }, // ⏱️ 1 day caching
    }
  );

  const data = await response.json();
  return data;
}
