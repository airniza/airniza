import AqiStatus from "./AqiStatus";
import Pm25Converter from "./Pm25Converter";

type RadarResponse = {
  addresses?: {
    latitude: number;
    longitude: number;
    state: string;
    country: string;
  }[];
};

type AirVisualResponse = {
  data?: {
    current?: {
      pollution?: {
        aqius: number;
      };
      weather?: {
        tp: number;
        hu: number;
        ws: number;
      };
    };
  };
};

export default async function FetchCityData(city: string) {
  const radarRes = await fetch(
    `https://api.radar.io/v1/geocode/forward?query=${city}`,
    {
      headers: {
        Authorization: process.env.RADAR_SECRET_KEY || "",
      },
      cache: "no-store",
    }
  );

  const radarData = (await radarRes.json()) as RadarResponse;

  const location = radarData.addresses?.[0];
  if (!location) {
    throw new Error("Location not found..");
  }

  // IQAir API call
  const aqiRes = await fetch(
    `https://api.airvisual.com/v2/nearest_city?lat=${location.latitude}&lon=${location.longitude}&key=${process.env.apikey}`,
    {
      cache: "no-store",
    }
  );

  const aqiData = (await aqiRes.json()) as AirVisualResponse;

  const pollution = aqiData.data?.current?.pollution;
  if (!pollution) {
    throw new Error("Air Quality data is not available..");
  }

  const pmTwo5 = Pm25Converter(pollution.aqius)?.toFixed(1);
  const { condition, exp } = AqiStatus(pollution.aqius);

  return {
    aqi: pollution.aqius,
    pm25: pmTwo5,
    condition,
    exp,
    temp: aqiData.data!.current!.weather!.tp,
    humidity: aqiData.data!.current!.weather!.hu,
    ws: aqiData.data!.current!.weather!.ws,
    state: location.state,
    country: location.country,
  };
}
