import React from 'react';
import './city-badge.css';

function CityBadge({ cities }) {
  console.log('\nIn City Badge');
  console.log(cities);
  return (
    <>
      {cities.map((item, idx) => {
        return (
          <div
            className="col city-badge d-flex justify-content-between px-4 align-items-center mt-3"
            key={idx}
          >
            <i className="bi bi-geo-alt"></i>
            <p>{item.name}</p>
            <i className="bi bi-caret-right-fill arrow-icon"></i>
          </div>
        );
      })}
    </>
  );
}

export default CityBadge;
