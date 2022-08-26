import React, { useState } from 'react';
import './list-view.css';

// 📝: Other Components
import CityBadge from '../CityBadgeComponent/city-badge';

function ListView({ searchForCity, cityList }) {
  console.log('List View = ' + JSON.stringify(cityList));
  const [inputValue, setInputValue] = useState('');

  console.log('\nIn List View');

  const handleChange = evt => {
    setInputValue(evt.target.value);
  };

  const handleClick = async evt => {
    await searchForCity(inputValue);
  };

  return (
    <>
      <div className="col-12">
        <div className="input-group">
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            placeholder="Search City, State or Zip"
            value={inputValue}
          />
          <button
            className="btn btn-secondary"
            onClick={handleClick}
            name="sendCitySearch"
            type="button"
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
      <CityBadge cities={cityList} />
    </>
  );
}

export default ListView;
