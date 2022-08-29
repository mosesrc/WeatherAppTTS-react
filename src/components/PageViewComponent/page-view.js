import React, { useState } from 'react';
import './page-view.css';
import { useLocation } from 'react-router-dom';

// 📝: CONFIG FILE
import { config } from '../../services/config';

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

  // 📝: Search for city in US
  async function searchForUSCity(searchValue) {
    console.log('New Search For City Function, Search Value is:  ' + searchValue);
    console.log('URL: ' + config.byAnyUsCity);
    const response = await fetch(config.byAnyUsCity + `q=${searchValue},us&appid=${config.apiKey}`);

    const data = await response.json();
    console.log('\nNew Search For City Function, Data receivied is');
    console.log(data);
    setCitiesArray(arr => [...arr, data]);
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
  console.log('Page View: ' + JSON.stringify(citiesArray));
  return (
    <div className="container-fluid page-view position-relative pb-3">
      <div className="row pt-4 d-flex justify-content-center">
        <div className="col-4 d-none d-md-inline-block d-flex flex-column p-4 list-block rounded-4">
          <ListView searchForCity={searchForUSCity} cityList={citiesArray} />
        </div>
        <div className="col-sm-8 col-11 view-block rounded-4">
          <div className="row">
            <div className="col mt-1 d-none d-md-flex d-flex justify-content-center">
              <ToggleButtons />
            </div>
          </div>
          <div className="row d-flex justify-content-center align-items-center mt-3">
            {pathName.includes('weekly_view') ? <WeeklyView weatherObj={null} /> : <div />}
            {pathName.includes('daily_view') ? <DailyView weatherObj={null} /> : <div />}
            {citiesArray.length === 0 ? emptyList() : <div />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageView;

// <div className='row d-flex flex-column align-items-center mt-3'>
