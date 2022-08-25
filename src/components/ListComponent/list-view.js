import React from 'react';
import './list-view.css';

// 📝: Other Components
import CityBadge from '../CityBadgeComponent/city-badge';

function ListView({ currentWeather, currLocation }) {
  console.log('\nIn List View');
  console.log(currLocation);
  return (
    <>
      <div className="col-12">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Search City, State or Zip"
          />
          <button className="btn btn-secondary" name="sendCitySearch" type="button">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
      <CityBadge cityObj={currLocation} />
    </>
  );
}

export default ListView;
