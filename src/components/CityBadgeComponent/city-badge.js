import React from 'react';
import './city-badge.css';

function CityBadge({ listOfCities }) {
  console.log(listOfCities);

  return (
    <div className="col city-badge d-flex justify-content-evenly align-items-center mt-3">
      <i className="bi bi-geo-alt"></i>
      <p>Blah</p>
      <i className="bi bi-caret-right-fill arrow-icon"></i>
    </div>
  );
}

export default CityBadge;
