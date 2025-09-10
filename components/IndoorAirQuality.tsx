type IndoorProps = {
  aqi: number;
  place?: string;
  state?: string;
  country: string;
};

export default function IndoorAirQuality({ aqi, place,state,country }: IndoorProps) {
  const location = [place,state,country].filter(Boolean).join(", ");
  const singleLocation = `${place || state || country}`
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold">Indoor Air Quality {location}</h2>
      {aqi <= 50 ? (
        <>
          <p className="mt-4">
            When the air quality in {singleLocation} or any other place is kept in the good category, people often assume that the environment inside homes and offices will also be good. However, this is not always the case because there are many factors that affect indoor air quality. Cooking smoke, cleaning sprays, pet dander, and mold that devlops due to miosture are soe of the elements that influence indoor air quality. These are not the only reasons, there can be many other factors as well. In the absence of proper ventilation, pollutants get trappped in closed spaces. As a result, even when the outdoor air is clean, people may sometimes feel mils irritation in the eyes, dryness in the throat, or slightly difficulty in breathing. Therefore, before asuming that indoor air is good just because the outdoor air is clean one should always consider the indoor factors.
          </p>
          <p className="mt-2">
            During good outdoor air quality, indoor air quality can also be improved with some simple methods, but certain precatutions are necessary. You can open windows during comfortable weather for cross ventilation, and use an exhaust fan while cooking. Keeping surfaces free from dust can greatly reduce indoor pollutants. Instead of strong chemical cleaning sprays, you can use natural cleaning solutions. A dehumidifier can help control moisture, and indoor plants that purify the air can also be placed. These steps are especially beneficial for children, elderly people , and pregnant women. With these sensible practices, residents of {singleLocation} can create an environment that maintains health and comfort for a long time.
          </p>
        </>
      ) : aqi <= 100 ? (
        <>
          <p className="mt-4">
            When the air quality in {singleLocation} or any other place reaches a moderate level, indoor air quality is usually manageable for residents. However, poor ventilation, smoking inside the house, the use of strong cleaning agents and smoke from gas stoves can make the situation worse. This can cause indoor air to become more polluted than outdoor air. Sensitive groups such as asthma patients and older adults may experience symptoms like fatigue, coughing or breathing with a slight whistling sound. Therefore, always assuming that if the outdoor air quality is moderate can be risky. Indoor factors should be considered before making such as assumption.

          </p>
          <p className="mt-2">
            In such situations, residents of {singleLocation} should make efforts to improve indoor air quality by reducing sources of pollution and maximizing the flow of cleam air. Avoid smoking inside the house, use an exhaust fan in the kitchen for proper ventilation and use HEPA filters to clean the air. Small steps like placing indoor plants can also help reduce indoor air pollution to some extent. Dust particles and allergens that cause breathing problems can be removed by regularly cleaning mattresses and carpets. Drinking enough water, exercising and getting proper rest are healthy lifestyle habits that help protect against the effects of pollution levels. With these small efforts the people of {singleLocation} can improve indoor air quality and protect their health.

          </p>
        </>
      ) : (
        <>
          <p className="mt-4">
            When the outdoor air quality in {singleLocation} reaches levels considered unhealthy for sensitive groups, the indoor environment can quickly become a refuge, but only if managed carefully. Outdoor pollutants can seep indoors through open windows or cracks, while indoor sources such as cooking fumes, pet dander, or mold can further deteriorate the situation. This combination often results in indoor air that may pose significant challenges, particularly for children, older adults, and those with respiratory or heart conditions. Symptoms like shortness of breath, persistent coughing, or fatigue can appear more quickly indoors if preventive measures are not in place.
          </p>
          <p className="mt-2">
            To protect indoor spaces during such times, residents should keep windows and doors closed to limit outdoor infiltration, while using air purifiers with HEPA and activated carbon filters. Activities like vacuuming with a high-efficiency filter, wiping down surfaces, and maintaining humidity at balanced levels can help reduce allergen buildup. Sensitive individuals should avoid strenuous activity and focus on light, relaxing indoor routines. A nutrient-rich diet, proper hydration, and adequate rest can also support the body’s defense system. By turning their homes into controlled environments, the people of {singleLocation} can shield themselves from the harsher outdoor conditions and sustain healthier living during periods of compromised air quality.
          </p>
        </>
      )}
    </div>
  );
}
