export const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  currentWeatherUrl: process.env.REACT_APP_CURRENT_WEATHER_URL,
  byLocationUrl: process.env.REACT_APP_GEOCODING_URL,
  byZipCodeUrl: process.env.REACT_APP_GEOCODING_URL,
  byAnyUsCity: process.env.REACT_APP_ANY_US_CITY
};

//prettier-ignore
/* ---📌 COMMENT--- Extended URLs:   */
// NOTE: currentWeatherUrl
// lat={lat}&lon={lon}&appid={API key}

// NOTE: byLocationUrl
// direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

// NOTE: byZipCodeUrl
// zip?zip={zip code},{country code}&appid={API key}

// NOTE: Any US City
// q={city name},us&appid={API key}
