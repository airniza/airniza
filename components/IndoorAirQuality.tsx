type IndoorProps = {
  aqi: number;
  place: string;
  state: string;
  country: string;
};

export default function IndoorAirQuality({ aqi, place,state,country }: IndoorProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold">Indoor Air Quality {place}, {state}, {country}</h2>
      {aqi <= 50 ? (
        <>
          <p className="mt-4">
            When the outdoor air quality in City is categorized as good, people often assume that the indoor environment is automatically healthy as well. However, this is not always the case, since enclosed spaces can trap pollutants from sources like cooking smoke, cleaning sprays, pet dander, and even humidity that leads to mold. Limited ventilation can allow these elements to build up, sometimes making the air inside homes and offices less clean than the fresh conditions outdoors. As a result, residents may still notice mild irritation in the eyes, throat dryness, or minor breathing discomfort despite favorable outdoor readings.
          </p>
          <p className="mt-2">
            Maintaining indoor air quality during good outdoor conditions involves simple preventive actions. Opening windows to allow cross-ventilation when the weather is comfortable, using exhaust fans while cooking, and keeping surfaces free from dust can significantly reduce indoor pollutants. Choosing natural cleaning products instead of strong chemical sprays, controlling moisture with dehumidifiers, and introducing air-purifying plants are also effective practices. For sensitive groups such as children or the elderly, these steps help ensure a healthier living space. By combining outdoor freshness with smart indoor care, residents of City can create an environment that supports long-term health and comfort.
          </p>
        </>
      ) : aqi <= 100 ? (
        <>
          <p className="mt-4">
            When outdoor air quality in City falls into the moderate range, it may still be manageable for most people, but indoor conditions can sometimes worsen. Poor ventilation, smoking indoors, the use of strong cleaning agents, or emissions from gas stoves can raise the concentration of harmful particles indoors, making it more polluted than outside. For sensitive groups like asthma patients or older adults, this difference can trigger symptoms such as coughing, mild wheezing, or fatigue. Even if the outdoor air is only moderately polluted, neglecting indoor factors can increase risks for residents.

          </p>
          <p className="mt-2">
            To improve indoor air quality under these conditions, the local community should focus on reducing pollutant sources and maximizing clean airflow. Running HEPA filters, ensuring proper kitchen ventilation, and minimizing indoor smoking or incense burning can reduce airborne irritants. Regular cleaning of carpets and upholstery helps remove dust mites and allergens that aggravate breathing issues. Drinking enough water, taking light exercise indoors, and resting well are important lifestyle measures to support resilience against moderate pollution levels. By adopting these practices, households in City can limit the impact of moderate outdoor air quality and safeguard their daily well-being.


          </p>
        </>
      ) : (
        <>
          <p className="mt-4">
            When the outdoor air quality in City reaches levels considered unhealthy for sensitive groups, the indoor environment can quickly become a refuge, but only if managed carefully. Outdoor pollutants can seep indoors through open windows or cracks, while indoor sources such as cooking fumes, pet dander, or mold can further deteriorate the situation. This combination often results in indoor air that may pose significant challenges, particularly for children, older adults, and those with respiratory or heart conditions. Symptoms like shortness of breath, persistent coughing, or fatigue can appear more quickly indoors if preventive measures are not in place.
          </p>
          <p className="mt-2">
            To protect indoor spaces during such times, residents should keep windows and doors closed to limit outdoor infiltration, while using air purifiers with HEPA and activated carbon filters. Activities like vacuuming with a high-efficiency filter, wiping down surfaces, and maintaining humidity at balanced levels can help reduce allergen buildup. Sensitive individuals should avoid strenuous activity and focus on light, relaxing indoor routines. A nutrient-rich diet, proper hydration, and adequate rest can also support the body’s defense system. By turning their homes into controlled environments, the people of City can shield themselves from the harsher outdoor conditions and sustain healthier living during periods of compromised air quality.
          </p>
        </>
      )}
    </div>
  );
}
