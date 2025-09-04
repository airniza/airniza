import AqiStatus from "./AqiStatus";
import { calculateAQI } from "./helpers/AqiCalculator";

export default async function FetchLocationData(city: string) {
  // 1. Radar API call (for state, country, lat, lon)
  const radarRes = await fetch(
    `https://api.radar.io/v1/geocode/forward?query=${city}`,
    {
      headers: {
        Authorization: process.env.RADAR_SECRET_KEY || "",
      },
      cache: "no-store",
    }
  );

  const radarData = await radarRes.json();
  const location = radarData.addresses?.[0];

  if (!location) {
    throw new Error("Location not found..");
  }

  const { latitude, longitude, state, country } = location;

  // 2. OpenWeather Air Pollution API

  const end = Math.floor(Date.now() / 1000);
  const start = end - 86400;

  const url = `http://api.openweathermap.org/data/2.5/air_pollution/history?lat=${latitude}&lon=${longitude}&start=${start}&end=${end}&appid=${process.env.openweatherkey}`;

  const res = await fetch(url, { next: { revalidate: 3600 } }); // cache 1h
  const opwdata = await res.json();

  const result = calculateAQI(opwdata.list);

  if (!result) {
    throw new Error("Air Quality data is not available..");
  }

  const aqi = result.finalAQI;
  const mainPollutant = result.primaryPollutant;
  const pm2_5 = Number(
    (result.pollutants.find((p) => p.name === "PM2.5")?.avg ?? 0).toFixed(1)
  );
  const pm10 = Number(
    (result.pollutants.find((p) => p.name === "PM10")?.avg ?? 0).toFixed(1)
  );
  const o3 = Number(
    (result.pollutants.find((p) => p.name === "O₃")?.max8h ?? 0).toFixed(3)
  );
  const co = Number(
    (result.pollutants.find((p) => p.name === "CO")?.max8h ?? 0).toFixed(3)
  );
  const no2 = Number(
    (result.pollutants.find((p) => p.name === "NO₂")?.last1h ?? 0).toFixed(1)
  );
  const so2 = Number(
    (result.pollutants.find((p) => p.name === "SO₂")?.last1h ?? 0).toFixed(1)
  );

  // 3. OpenWeather Weather API (for temp, humidity, wind speed)
  const weatherRes = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.openweatherkey2}`,
    {
      cache: "no-store",
    }
  );

  const weatherData = await weatherRes.json();
  const temp = weatherData?.main?.temp
    ? Math.round(weatherData.main.temp)
    : null; // °C
  const humidity = weatherData?.main?.humidity ?? null; // %
  const ws = weatherData?.wind?.speed
    ? Math.round(weatherData.wind.speed * 3.6) // m/s → km/h
    : null;

  const { condition, exp, ic } = AqiStatus(aqi);

  // ✅ Final return
  return {
    aqi,
    condition,
    exp,
    ic,
    mainPollutant,
    pm2_5,
    pm10,
    co,
    no2,
    so2,
    o3,
    temp, // °C
    humidity, // %
    ws, // km/h
    state,
    country,
  };
}
