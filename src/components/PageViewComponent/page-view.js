import React, { useState, useEffect, useReducer } from 'react';
import './page-view.css';
import { useLocation } from 'react-router-dom';
// 📝: CONFIG FILE
import { config } from '../../services/config';

// 📝: VIEWS
import ListView from '../ListComponent/list-view';
import ToggleButtons from '../ToggleButtonsComponent/toggle-buttons';
import DailyView from '../DailyViewComponent/daily-view';
import WeeklyView from '../WeeklyViewComponent/weekly-view';

// 📝: DATA
import { FIPScodes } from '../../data/city-list';
import { countryCodes } from '../../data/country-codes';

// ✅: SETTING CITIES ARRAY
const initialState = { citiesArray: [] };

function PageView(props) {
  // ✅: USE REDUCER HOOK
  const { citiesArray } = initialState;
  const [state, dispatch] = useReducer(citiesReducer, citiesArray);

  // 📝: Path Locations
  const pathName = useLocation().pathname;

  // 📝: Add State for input value
  const [value, setValue] = useState('');
  const [specifiedLocation, setSpecifiedLocation] = useState({});
  const [weatherObj, setWeatherObj] = useState({});
  // const [citiesArray, setCitiesArray] = useState([]);

  // ✅: REDUCER FUNCTION
  function citiesReducer(state, action) {
    switch (action.type) {
      case 'ADD_CITY':
        return { citiesArray: [...state, action.payload] };
      default:
        throw new Error('This is not working bruh!');
    }
  }

  // 📝: Using useEffect to load weather objects
  // useEffect(() => {
  //   setCitiesArray(arr => [...arr, [specifiedLocation, weatherObj]]);
  // }, []);

  // NOTE: Logic for finding country codes is
  const getCountryCode = (obj, str) => {
    return obj.find(country => country.alphaTwo === str.toUpperCase());
  };

  // NOTE: Getting Location by zipcode
  async function getLocationByZipCode(str) {
    let [zipCode, country] = str.split(', ');
    console.log(zipCode);

    const { alphaTwo } = await getCountryCode(countryCodes, country);
    console.log(alphaTwo);
    const response = await fetch(
      config.byZipCodeUrl + `zip?zip=${zipCode},${alphaTwo}&appid=${config.apiKey}`
    );

    const data = await response.json();
    console.log(data);
    setSpecifiedLocation(data);
    return data;
  }

  // NOTE:: Getting Location by city and state
  async function getLocationByCityState(str) {
    let [city, state] = str.split(', ');
    let currentLocation;

    if (city) city = city[0].toUpperCase() + city.slice(1);
    // console.log('\nIn Fetch for city');

    const response = await fetch(
      config.byLocationUrl + `direct?q=${city}&limit=${5}&appid=${config.apiKey}`
    );
    const data = await response.json();

    // 📝: LOGIC TO MATCH OBJ
    if (state) {
      currentLocation = await data.find(item => item.state.toLowerCase() === state.toLowerCase());
      if (currentLocation) setSpecifiedLocation(currentLocation);
    }
    return currentLocation;
  }

  // NOTE: Search for Current Weather
  async function getCurrentWeather(obj) {
    const response = await fetch(
      config.currentWeatherUrl + `lat=${obj.lat}&lon=${obj.lon}&appid=${config.apiKey}`
    );
    const json = await response.json();
    setWeatherObj(json);

    return json;
  }

  // 📝: Check whether search is city, state or zipcode, country or country
  const searchCheck = str => {
    let hasNumber = /\d/;
    const result = hasNumber.test(str);
    return result;
  };

  // 📝: Handles Search for City
  async function handleChange(event) {
    event.stopPropagation();
    event.preventDefault();

    // 📝: Event Delegation
    let targetData = null;
    const parentEl = event.target.offsetParent;
    const input = parentEl.children[0].value;

    if (event.target.name === 'sendCitySearch') {
      if (searchCheck(input)) {
        targetData = await getLocationByZipCode(input);
      } else {
        targetData = await getLocationByCityState(input);
      }

      if (targetData) await getCurrentWeather(targetData);
      setValue(input);
      dispatch({
        type: 'ADD_CITY',
        payload: [specifiedLocation, weatherObj],
      });
    }
  }

  console.log('\nThis is the weather object which is a city item');
  console.log(weatherObj);

  console.log('\nThis is the location object ');
  console.log(specifiedLocation);

  console.log('\nThis is the cities array which is a list of cities');
  console.log(citiesArray);

  // 📝: Empty list Message
  const emptyList = () => {
    return (
      <div className="col">
        <div className="empty-message text-center">
          <p>There are no cites in User's list</p>
          <p>User must search and select a city to view weather information</p>
        </div>
      </div>
    );
  };

  return (
    <div onClick={handleChange} className="container-fluid page-view position-relative pb-3">
      <div className="row pt-4 d-flex justify-content-center">
        <div className="col-4 d-none d-md-inline-block d-flex flex-column p-4 list-block rounded-4">
          <ListView
            currentWeather={weatherObj}
            currLocation={specifiedLocation}
            cityList={citiesArray}
          />
        </div>
        <div className="col-sm-8 col-11 view-block rounded-4">
          <div className="row">
            <div className="col mt-1 d-none d-md-flex d-flex justify-content-center">
              <ToggleButtons />
            </div>
          </div>
          <div className="row d-flex justify-content-center align-items-center mt-3">
            {pathName.includes('weekly_view') ? <WeeklyView /> : <div />}
            {pathName.includes('daily_view') ? <DailyView /> : <div />}
            {citiesArray.length === 0 ? emptyList() : <div />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageView;

// <div className='row d-flex flex-column align-items-center mt-3'>
