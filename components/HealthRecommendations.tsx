type HealthProps = {
  aqi: number;
  place: string;
  state: string;
  country: string;
};

export default function HealthRecommendations({ aqi, place,state,country }: HealthProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <h2 className="text-2xl font-bold">Health Recommendations for Residents of {place}, {state}, {country}</h2>
      {aqi <= 50 ? (
        <>
          <p className="mt-4">
            At present air quality in {place} is good which means people can enjoy both outdoor and indoor activities without any health concerns. Clean air is beneficial for both physical and mental health. Breathing fresh air improves lung function, helps in better sleep and increases concentration during study or work. Residents of {place} can safely spend time outside, do exercise, go for walks or enjoy leisure with friends and family. During good air quality, outdoor activities such as cycling, running and playing can be encouraged because breathing fresh and pure air increases stamina and also reduces stress levels.
          </p>
          <p className="mt-2">
            Residents can open windows to take full advantage of ventilation which will maintain the circulation of fresh air. This is also a good time to place indoor plants. Indoor plants help in keeping the air inside homes clean. For sensitive groups such as children, elderly people and pregnant women, these conditions are completely safe. Residents of {place} can focus on habits such as balanced diet, regular exercise and proper rest without worrying about air pollution.
          </p>
        </>
      ) : aqi <= 100 ? (
        <>
          <p className="mt-4">
            The air quality in {place} is currently at a moderate level, which means that while the air is generally acceptable, sensitive groups may experience mild symptoms such as throat irritation or slight breathing discomfort after prolonged exposure. For most residents, daily routines can continue as usual, but it is recommended to remain cautious during peak traffic hours or times of higher pollution. Outdoor activities like walking and light exercise are still safe, though it is better to avoid areas with heavy vehicle emissions. 
          </p>
          <p className="mt-2">
            Citizens are advised to plan outdoor workouts during early morning or late evening when the air is usually cleaner. Indoors, residents should keep windows closed when traffic is high and consider using air purifiers to maintain a healthy environment. Staying hydrated and consuming antioxidant-rich foods can help the body manage pollution exposure. Sensitive groups, including children, older adults, and those with respiratory or heart conditions, should limit prolonged physical exertion outdoors to prevent potential irritation. People in the area may also benefit from practicing relaxation techniques such as yoga or meditation indoors. With careful planning and small adjustments, the local community can continue to live comfortably and protect long-term health, even when the air is at a moderate level.

          </p>
        </>
      ) : (
        <>
          <p className="mt-4">
            The air quality in {place} has reached a level that is considered unhealthy for sensitive groups, which means that individuals with asthma, heart disease, or other respiratory conditions may be at risk of experiencing symptoms like coughing, shortness of breath, or fatigue. Children and older adults are also more vulnerable and should avoid spending long hours outdoors. The local community is encouraged to reduce exposure by staying indoors during times of high pollution and using air purifiers or clean ventilation methods to maintain healthy indoor air.
          </p>
          <p className="mt-2">
            Residents should avoid activities that worsen indoor pollution, such as smoking or burning candles, and instead focus on keeping rooms well ventilated and dust free. Outdoor activities should be minimized, especially vigorous exercise, and it is better to choose light stretching or indoor workouts instead. People in the area can further protect themselves by wearing protective masks if they need to travel outside. Maintaining hydration and eating a diet rich in fruits and vegetables can also help reduce the body’s reaction to pollutants. Sensitive groups should monitor health closely and seek medical guidance if symptoms worsen. By taking these precautions, citizens can safeguard their well being and minimize the impact of unhealthy air until conditions improve.
          </p>
        </>
      )}
    </div>
  );
}
