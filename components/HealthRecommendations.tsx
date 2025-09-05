type HealthProps = {
  aqi: number;
  place?: string;
  state?: string;
  country: string;
};

export default function HealthRecommendations({ aqi, place,state,country }: HealthProps) {
  const location = [place,state,country].filter(Boolean).join(", ");
  const singleLocation = `${place || state || country}`
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <h2 className="text-2xl font-bold">Health Recommendations for Residents of {location}</h2>
      {aqi <= 50 ? (
        <>
          <p className="mt-4">
            At present air quality in {singleLocation} is good which means people can enjoy both outdoor and indoor activities without any health concerns. Clean air is beneficial for both physical and mental health. Breathing fresh air improves lung function, helps in better sleep and increases concentration during study or work. Residents of {singleLocation} can safely spend time outside, do exercise, go for walks or enjoy leisure with friends and family. During good air quality, outdoor activities such as cycling, running and playing can be encouraged because breathing fresh and pure air increases stamina and also reduces stress levels.
          </p>
          <p className="mt-2">
            Residents can open windows to take full advantage of ventilation which will maintain the circulation of fresh air. This is also a good time to place indoor plants. Indoor plants help in keeping the air inside homes clean. For sensitive groups such as children, elderly people and pregnant women, these conditions are completely safe. Residents of {singleLocation} can focus on habits such as balanced diet, regular exercise and proper rest without worrying about air pollution.
          </p>
        </>
      ) : aqi <= 100 ? (
        <>
          <p className="mt-4">
           Moderate air quality is generally acceptable, but in {singleLocation}, long exposure to moderate air quality may cause mild symptoms in sensitive groups such as slight breathing difficulty in throat irritation. The general residents of {singleLocation} can continue their daily activities. During peak traffic hours, it is important to take precautions. Outdoor activities like walking and exercise are usually safe, although it is better to avoid areas with heavy vehicle emissions.
          </p>
          <p className="mt-2">
            Residents should do outdoor exercises either early in the morning or late in the evening when the air is usually cleaner. During heavy traffic hours, windows should be kept closed and the use of an air purifier can be considered. Eating food rich in antioxidents and drinking enough water will help the body deal with the effects of pollution. Sensitive groups such as children, older adults and those who have breathing or heart problems should avoid doing stenous activities outside for long periods. People in the area can also practice relaxation methods at home such as meditation or yoga. With a little planning and small changes, the people of {singleLocation} can protect their health for the long term.

          </p>
        </>
      ) : (
        <>
          <p className="mt-4">
            The air quality in {singleLocation} has reached a level that is considered unhealthy for sensitive groups, which means that individuals with asthma, heart disease, or other respiratory conditions may be at risk of experiencing symptoms like coughing, shortness of breath, or fatigue. Children and older adults are also more vulnerable and should avoid spending long hours outdoors. The local community is encouraged to reduce exposure by staying indoors during times of high pollution and using air purifiers or clean ventilation methods to maintain healthy indoor air.
          </p>
          <p className="mt-2">
            Residents should avoid activities that worsen indoor pollution, such as smoking or burning candles, and instead focus on keeping rooms well ventilated and dust free. Outdoor activities should be minimized, especially vigorous exercise, and it is better to choose light stretching or indoor workouts instead. People in the area can further protect themselves by wearing protective masks if they need to travel outside. Maintaining hydration and eating a diet rich in fruits and vegetables can also help reduce the body’s reaction to pollutants. Sensitive groups should monitor health closely and seek medical guidance if symptoms worsen. By taking these precautions, citizens can safeguard their well being and minimize the impact of unhealthy air until conditions improve.
          </p>
        </>
      )}
    </div>
  );
}
