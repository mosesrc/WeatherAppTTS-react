import React, { useState, useEffect } from 'react';
import './list-view.css';

// 📝: CONFIG FILE
import { config } from '../../services/config';

// 📝: Other Components
import CityBadge from '../CityBadgeComponent/city-badge';

function ListView(props) {
  // 📝: Add State for input value
  const [value, setValue] = useState('');
  const [citiesArray, setCitiesArray] = useState([]);

  // NOTE:: Getting Location Object No Weather Data Yet
  async function getLocation(cityName) {
    const response = await fetch(
      config.byLocationUrl + `direct?q=${cityName}&limit=${1}&appid=${config.apiKey}`
    );
    const json = await response.json();
    return json;
  }

  // NOTE: Search for Current Weather
  async function getCurrentWeather([obj]) {
    console.log(obj);

    const response = await fetch(
      config.currentWeatherUrl + `lat=${obj.lat}&lon=${obj.lon}&appid=${config.apiKey}`
    );
    const json = await response.json();
    const data = [json];
    setCitiesArray({ citiesArray: data });

    console.log(citiesArray);
  }

  const handleChange = event => {
    const targetData = getLocation(event.target.value);
    console.log(targetData);
    const whatIsThis = targetData.then(data => getCurrentWeather(data));
    console.log(whatIsThis);
    setValue({ value: event.target.value });
  };

  return (
    <>
      <div className="col-12">
        <div className="input-group">
          <input
            className="form-control"
            value={props.value}
            onChange={handleChange}
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Search City, State or Zip"
          />
          <span className="input-group-text">
            <i className="bi bi-search"></i>
          </span>
        </div>
      </div>
      <CityBadge />
    </>
  );
}

export default ListView;
