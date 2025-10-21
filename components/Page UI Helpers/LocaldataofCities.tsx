export type CityInfo = {
  city_feature: string;
  climate_description: string;
  pollution_cause: string;
  local_factor: string;
  image?: string; // optional
};

export const cityData: Record<string, CityInfo> = {
  //-------------------Australia----------------------------//
  // South Australia
  "mount-gambier": {
    city_feature:
      "a growing tech hub in northern Alabama surrounded by rolling hills and the Tennessee River",
    climate_description:
      "a humid subtropical climate with hot summers, mild winters, and occasional storms",
    pollution_cause:
      "industrial emissions, traffic congestion, and regional ozone formation",
    local_factor:
      "valley geography that can trap pollutants and high summer humidity affecting air quality",
  },

  // Sydney example
  "sydney": {
    city_feature: "harbour city with coastal climate",
    climate_description: "mild winters and warm summers",
    pollution_cause: "vehicle emissions and bushfire smoke",
    local_factor: "sea breeze affects air quality levels",
  },

  // Add more cities as needed
};
