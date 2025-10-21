type PollutantData = {
  source: string;
  healthImpact: string;
  prevention: string;
};

const pollutantInfo: Record<string, PollutantData> = {
  pm25: {
    source:
      "PM2.5 particles come from vehicle exhaust industrial emissions and burning of wood or coal",
    healthImpact:
      "These fine particles can enter deep into the lungs and may cause breathing issues heart disease and long term health problems",
    prevention:
      "Avoid outdoor activity when air quality is poor use air purifiers indoors and wear protective masks if needed",
  },
  pm10: {
    source:
      "PM10 is mainly released from road dust construction work and industrial pollution",
    healthImpact:
      "It can cause throat irritation coughing and make asthma or bronchitis worse",
    prevention:
      "Stay indoors when dust levels are high and keep windows closed to reduce exposure",
  },
  o3: {
    source:
      "Ozone forms when sunlight reacts with gases from vehicles and industries",
    healthImpact:
      "It can irritate the lungs and throat and make it difficult to breathe especially for people with asthma",
    prevention:
      "Try to avoid outdoor exercise during afternoon hours when ozone levels are usually high",
  },
  no2: {
    source:
      "Nitrogen dioxide mainly comes from vehicles and power plants that burn fuel",
    healthImpact:
      "Continuous exposure can harm the lungs and increase the chance of respiratory infections",
    prevention:
      "Avoid staying near heavy traffic and keep good ventilation indoors",
  },
  so2: {
    source:
      "Sulfur dioxide is produced when coal or oil is burned in factories or power plants",
    healthImpact:
      "It can irritate the eyes nose and throat and may cause asthma attacks",
    prevention:
      "Limit outdoor activities during pollution alerts and use indoor air filters if possible",
  },
  co: {
    source:
      "Carbon monoxide comes from vehicle exhaust and incomplete burning of fuels",
    healthImpact:
      "It reduces oxygen in the body which can cause tiredness dizziness and headaches",
    prevention:
      "Ensure good ventilation indoors and avoid staying near running vehicles",
  },
};

type PollutantInfoProps = {
  city: string;
  mainPollutant: string;
};

export default function PollutantInfo({
  city,
  mainPollutant,
}: PollutantInfoProps) {
  const key = mainPollutant.toLowerCase().replace(".", "");
  const pollutant = pollutantInfo[key as keyof typeof pollutantInfo];

  if (!pollutant) {
    return (
      <p>
        Information about air pollution in {city} is not available for{" "}
        {mainPollutant}.
      </p>
    );
  }

  const text = `In ${city}, the main air pollutant is ${mainPollutant}. It mostly comes from ${pollutant.source}. ${pollutant.healthImpact}. To stay safe, ${pollutant.prevention}.`;

  return <p className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-5 py-5">{text}</p>;
}
