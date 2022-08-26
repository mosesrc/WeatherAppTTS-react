// 📝: DATA
// import { FIPScodes } from '../../data/city-list';
// import { countryCodes } from '../../data/country-codes';

// //  // NOTE: Coordinates by zip/post code
// //  fetch(
// //     "http://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country code}&appid={API key}"
// //   );

// //   // NOTE: Coordinates by location name
// //   fetch(
// //     `http://api.openweathermap.org/geo/1.0/direct?q=${"Newport News"}&limit=${5}&appid=${apiKey}`
// //   )
// //     .then((res) => res.json())
// //     .then((data) => console.log(data));

// //   // NOTE: Call Current Weather Data
// //   fetch(
// //     ` https://api.openweathermap.org/data/2.5/weather?lat=${cities[0].lat}&lon=${cities[0].lon}&appid=${apiKey}`
// //   )
// //     .then((res) => res.json())
// //     .then((data) => console.log(data));

// /* ---📌 COMMENT--- More Specific weather functions that get data in the USA and beyond:   */

// // NOTE: Getting Location by zipcode
// async function getLocationByZipCode(str) {
//   const response = await fetch(config.byZipCodeUrl + `zip?zip=${str}&appid=${config.apiKey}`);

//   const data = await response.json();

//   return data;
// }

// // NOTE:: Getting Location by city and state
// async function getLocationByCityState(str) {
//   const response = await fetch(
//     config.byLocationUrl + `direct?q=${str}&limit=${5}&appid=${config.apiKey}`
//   );
//   const data = await response.json();
//   console.log(data);
//   return data;
// }

//  // 📝: Check whether search is city, state or zipcode, country or country
//  const searchCheck = str => {
//     let hasNumber = /\d/;
//     const result = hasNumber.test(str);
//     return result;
//   };

//   // 📝: Handles Search for City
//   async function searchForCity(searchValue) {
//     let targetData = null;
//     if (searchCheck(searchValue)) {
//       targetData = await getLocationByZipCode(searchValue.replaceAll(', ', ','));
//     } else {
//       targetData = await getLocationByCityState(searchValue.replaceAll(', ', ','));
//     }
//     console.log('Search for City - targetData = ' + JSON.stringify(targetData));

//     if (targetData) await getCurrentWeather(targetData);
//   }

//   // NOTE: Search for Current Weather
//   async function getCurrentWeather(obj) {
//     console.log('In get current weather: ' + obj.lat + ', ' + obj.lng + ' ' + config.apiKey);
//     const response = await fetch(
//       config.currentWeatherUrl + `lat=${obj.lat}&lon=${obj.lon}&appid=${config.apiKey}`
//     );
//     const json = await response.json();
//     console.log(json);
//     setCitiesArray(arr => [...arr, json]);
//   }
