import React, { useState } from 'react';
import './city-badge.css';

function CityBadge({ cities, setCity }) {
  // console.log('\nIn City Badge');
  const [ifSelected, setIfSetSelected] = useState(true);

  // 📝: FUNCTION TO SEND BACK INFORMATION
  const handleClick = async evt => {
    let index = Number(evt.target.dataset.cityObj);
    await setCity(cities[index]);
  };

  return (
    <>
      {cities.map((item, idx) => {
        return (
          <div
            onClick={handleClick}
            className="col city-badge d-flex justify-content-between px-4 align-items-center mt-3"
            key={idx}
            data-city-obj={idx}
          >
            <i className="bi bi-geo-alt"></i>
            <p>{item.name}</p>
            {ifSelected ? (
              <i className="bi bi-caret-right-fill arrow-icon"></i>
            ) : (
              <i className="bi bi-caret-left arrow-icon"></i>
            )}
          </div>
        );
      })}
    </>
  );
}

export default CityBadge;
