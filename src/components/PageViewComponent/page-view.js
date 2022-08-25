import React, { useState, useEffect } from 'react';
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

// 📝: Other components

function PageView(props) {
  // 📝: Path Locations
  const pathName = useLocation().pathname;

  // 📝: Add State for input value
  const [value, setValue] = useState('');
  const [specifiedLocation, setSpecifiedLocation] = useState({});
  const [weatherObj, setWeatherObj] = useState({});
  const [citiesArray, setCitiesArray] = useState([]);

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
      console.log('\nStart If');
      console.log(state);
      currentLocation = await data.find(item => item.state.toLowerCase() === state.toLowerCase());
      if (currentLocation) setSpecifiedLocation(currentLocation);
      console.log('\nEnd If');
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
    console.log(result);
    return result;
  };

  // 📝: Handles Search for City
  async function handleChange(event) {
    let targetData = null;
    const parentEl = event.target.offsetParent;
    // 📝: Event Delegation
    if (event.target.name === 'sendCitySearch') {
      if (searchCheck(parentEl.children[0].value)) {
        console.log('In click Handler for zipcode');
        targetData = await getLocationByZipCode(parentEl.children[0].value);
      } else {
        console.log('In click Handler for city/state');
        targetData = await getLocationByCityState(parentEl.children[0].value);
      }

      if (targetData) getCurrentWeather(targetData);
      setValue(event.target.value);
    }
  }

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
    <div onClick={handleChange} className="container-fluid page-view position-relative">
      <div className="row pt-4 d-flex justify-content-center">
        <div className="col-4 d-none d-md-inline-block d-flex flex-column p-4 list-block rounded-4">
          <ListView currentWeather={weatherObj} currLocation={specifiedLocation} />
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
