 function AqiStatus(aqi: number) {
    if (aqi <= 50) return {condition:"Good", fore:"#00e400", ic:"1a", exp:"Air quality is considered satisfactory, and air pollution poses little or no risk to health."};
    if (aqi <= 100) return {condition:"Moderate", fore:"#ffce1b", ic:"2a", exp:"Air quality is acceptable for most people, but sensitive groups (like children, elderly, or people with respiratory issues) may experience minor health effects."};
    if (aqi <= 150) return {condition:"Poor", fore:"#ff7e00", ic:"3a", exp: "Members of sensitive groups may experience health effects, while the general public is less likely to be affected."};
    if (aqi <= 200) return {condition:"Unhealthy", fore:"#ff0000", ic:"4a", exp: "Everyone may begin to experience health effects, and sensitive groups may face more serious risks."};
    if (aqi <= 300) return {condition:"Severe", fore:"#8f3f97", ic:"5a", exp: "This level triggers a health alert: everyone may experience serious health effects."};
    return {condition:"Hazardous", fore:"#8f3f97", ic:"6a", exp: "This is a health warning of emergency conditions: the entire population is likely to be affected."};
  }
  export default AqiStatus;

  