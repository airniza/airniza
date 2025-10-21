import React from "react";
import { cityData } from "./LocaldataofCities";

type CityParagraphProps = {
  city: string;
};

const CityParagraph: React.FC<CityParagraphProps> = ({ city }) => {
  const data = cityData[city.toLowerCase()]; // city key ko lowercase me check karo

  if (!data) return null; // agar city match nahi hui to kuchh render mat karo

  const paragraph = `${city.charAt(0).toUpperCase() + city.slice(1)} is ${data.city_feature}. 
It experiences ${data.climate_description}, with major pollution sources including ${data.pollution_cause}. 
Local environmental factors such as ${data.local_factor} influence overall air quality.`;

  return <p>{paragraph}</p>;
};

export default CityParagraph;
