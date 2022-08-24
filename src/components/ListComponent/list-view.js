import React, { useState, useEffect } from 'react';
import './list-view.css';
// import { usCityNames } from '../../data/city-list';

// 📝: CONFIG FILE
import { config } from '../../services/config';

// 📝: Other Components
import CityBadge from '../CityBadgeComponent/city-badge';

function ListView({ currentWeather, currLocation }) {
  return (
    <>
      <div className="col-12">
        <div className="input-group">
          <input
            type="text"
            name="searchedInput"
            className="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Search City, State or Zip"
          />
          <span className="input-group-text">
            <i className="bi bi-search"></i>
          </span>
        </div>
      </div>
      <CityBadge cityObj={currLocation} />
    </>
  );
}

export default ListView;
