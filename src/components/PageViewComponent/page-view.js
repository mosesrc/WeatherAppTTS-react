import React, { useState } from 'react';
import './page-view.css';
import { useLocation } from 'react-router-dom';

// 📝: CONFIG FILE
import { config } from '../../services/config';

// 📝: lOCAL DATA
import states from '../../data/stateAbbreviations';

// 📝: VIEWS
import ListView from '../ListComponent/list-view';
import ToggleButtons from '../ToggleButtonsComponent/toggle-buttons';
import DailyView from '../DailyViewComponent/daily-view';
import WeeklyView from '../WeeklyViewComponent/weekly-view';

function PageView(props) {
  // 📝: Path Locations
  const pathName = useLocation().pathname;

  // 📝: STATE FOR CITIES ARRAY
  const [citiesArray, setCitiesArray] = useState([]);
  const [city, setCity] = useState({});

  // 📝: Search for city in US
  async function searchForUSCity(searchValue) {
    const response = await fetch(config.byAnyUsCity + `q=${searchValue},us&appid=${config.apiKey}`);
    const currentWeatherdata = await response.json();

    // Get Location Object
    const loactionResponse = await fetch(
      config.byLocationUrl + `direct?q=${searchValue},us&limit=${5}&appid=${config.apiKey}`
    );
    const [locationObj] = await loactionResponse.json();
    console.log(locationObj);

    // REVIEW: this is just to get the state abbreviation
    const stateInfo = states.find(el => el.name === locationObj.state);

    setCitiesArray(arr => [...arr, [currentWeatherdata, locationObj, stateInfo]]);
  }

  async function getfiveDayForecast({ coord: { lon, lat } }) {
    console.log('\nIn getfiveDayForecast -- NEW LOG');
    console.log('Latitude: ' + lat);
    console.log('Longitude: ' + lon);

    console.log('\nEND FORECAST LOG');
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
    <div className="container-fluid page-view position-relative pb-3">
      <div className="row pt-4 d-flex justify-content-center">
        <div className="col-4 d-none d-md-inline-block d-flex flex-column p-4 list-block rounded-4">
          <ListView searchForCity={searchForUSCity} cityList={citiesArray} setCity={setCity} />
        </div>
        <div className="col-sm-8 col-11 view-block rounded-4">
          <div className="row">
            <div className="col mt-1 d-none d-md-flex d-flex justify-content-center">
              {citiesArray.length !== 0 ? <ToggleButtons /> : <div />}
            </div>
          </div>
          <div className="row d-flex justify-content-center align-items-center mt-3">
            {pathName.includes('weekly_view') ? <WeeklyView clickedCity={city} /> : <div />}
            {pathName.includes('daily_view') ? (
              <DailyView cityList={citiesArray} clickedCity={city} />
            ) : (
              <div />
            )}
            {citiesArray.length === 0 ? emptyList() : <div />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageView;

// <div className='row d-flex flex-column align-items-center mt-3'>
