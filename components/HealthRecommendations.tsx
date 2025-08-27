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
            The air quality in ${place} is currently considered good, which means that almost everyone can enjoy outdoor and indoor activities without any health concerns. Clean air provides many benefits for both physical and mental health, including better lung function, improved sleep quality, and sharper focus during work or study. Local residents can safely spend long hours outside whether they are exercising, walking, or enjoying leisure time with friends and family. Outdoor activities such as cycling, jogging, and sports are highly encouraged in this environment because breathing fresh air supports stamina and reduces stress levels.
          </p>
          <p className="mt-2">
            The local community can also make the most of natural ventilation at home by opening windows to let fresh air circulate. This is also a great time to grow indoor plants, which further help maintain healthy air indoors. For sensitive groups such as children or older adults, the present conditions remain completely safe and no additional precautions are required. Citizens can focus on healthy habits like balanced nutrition, regular exercise, and proper rest without worrying about air pollution. People in the area should take this opportunity to enjoy the outdoors and maintain an active lifestyle since such clean conditions may not always be consistent throughout the year.
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
