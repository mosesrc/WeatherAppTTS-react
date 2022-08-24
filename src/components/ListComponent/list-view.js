import React, { useState, useEffect } from 'react';
import './list-view.css';

// 📝: CONFIG FILE
import { config } from '../../services/config';

// 📝: Other Components
import CityBadge from '../CityBadgeComponent/city-badge';

function ListView(props) {
  // 📝: Add State for input value
  const [value, setValue] = useState('');

  // NOTE:: Getting Location Object No Weather Data Yet
  async function getLocation(cityName) {
    const response = await fetch(
      config.byLocationUrl + `direct?q=${cityName}&limit=${5}&appid=${config.apiKey}`
    );
    const json = await response.json();
    return json;
  }

  const handleChange = event => {
    const targetData = getLocation(event.target.value);
    console.log(targetData);
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
