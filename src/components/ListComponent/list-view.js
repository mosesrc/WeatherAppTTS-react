import React, { useState, useEffect } from 'react';
import './list-view.css';
// import { usCityNames } from '../../data/city-list';

// 📝: CONFIG FILE
import { config } from '../../services/config';

// 📝: Other Components
import CityBadge from '../CityBadgeComponent/city-badge';

function ListView(props) {
  // 📝: Add State for input value
  const [value, setValue] = useState('');
  const [weatherObj, setWeatherObj] = useState({});
  const [citiesArray, setCitiesArray] = useState([]);

  // 📝: UseEffect Hook
  let inputText = '';
  let data = {};
  useEffect(() => {
    setValue(inputText);
  }, [inputText]);

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
    const response = await fetch(
      config.currentWeatherUrl + `lat=${obj.lat}&lon=${obj.lon}&appid=${config.apiKey}`
    );
    const json = await response.json();
    data = json;
    return json;
  }

  // 📝: Handles Search for City
  const handleInput = event => {
    const targetData = getLocation(event.target.value);
    const item = targetData.then(data => getCurrentWeather(data));
    console.log(item);
    inputText = event.target.value.trim();

    console.log(value);
    console.log(weatherObj);
  };

  // 📝: Submits Searched City into state
  const handleSubmit = evt => {
    console.log(evt.code);

    console.log(props.citiesArray);
  };

  return (
    <>
      <div className="col-12">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={props.value}
            onChange={handleInput}
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Search City, State or Zip"
          />
          <span onClick={handleSubmit} className="input-group-text">
            <i className="bi bi-search"></i>
          </span>
        </div>
      </div>
      <CityBadge listOfCities={citiesArray} />
    </>
  );
}

export default ListView;
