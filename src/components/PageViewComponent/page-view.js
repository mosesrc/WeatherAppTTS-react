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

// 📝: Other components

function PageView(props) {
  // 📝: Path Locations
  const pathName = useLocation().pathname;

  // 📝: Add State for input value
  const [value, setValue] = useState('');
  const [weatherObj, setWeatherObj] = useState({});
  const [citiesArray, setCitiesArray] = useState([]);

  // NOTE: Logic for finding state code
  const getStateCode = (obj, str) => {
    const arr = Object.keys(obj);
    const code = arr.find(el => el === str);
    return obj[code];
  };

  // NOTE:: Getting Location Object No Weather Data Yet
  async function getLocation(str) {
    let [city, state] = str.split(', ');
    if (state) state = state.toUpperCase();
    console.log(state);
    const stateCode = getStateCode(FIPScodes, state);

    console.log(city, stateCode);
    const response = await fetch(
      config.byLocationUrl + `direct?q=${city},${stateCode}&limit=${5}&appid=${config.apiKey}`
    );
    const json = await response.json();
    console.log('Location Object Found!');
    // logic to match obj
    return json;
  }

  // NOTE: Search for Current Weather
  async function getCurrentWeather([obj]) {
    console.log(obj);
    const response = await fetch(
      config.currentWeatherUrl + `lat=${obj.lat}&lon=${obj.lon}&appid=${config.apiKey}`
    );
    const json = await response.json();
    setWeatherObj(json);
    return json;
  }

  // 📝: Handles Search for City
  const handleChange = event => {
    // 📝: Event Delegation
    if (event.target.name === 'searchedInput') {
      const targetData = getLocation(event.target.value);
      targetData.then(data => console.log(data));
      setValue(event.target.value);
    }
  };

  // 📝: Empty list Message
  const emptyList = () => {
    return (
      <div className="empty-message text-center">
        <p>There are no cites in User's list</p>
        <p>User must search and select a city to view weather information</p>
      </div>
    );
  };

  console.log(weatherObj);

  return (
    <div onChange={handleChange} className="container-fluid page-view position-relative">
      <div className="row pt-4 d-flex justify-content-center">
        <div className="col-4 d-none d-md-inline-block d-flex flex-column p-4 list-block rounded-4">
          <ListView currentWeather={weatherObj} />
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
            <div className="col">{emptyList()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageView;

// <div className='row d-flex flex-column align-items-center mt-3'>
