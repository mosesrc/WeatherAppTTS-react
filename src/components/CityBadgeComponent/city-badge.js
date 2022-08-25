import React from 'react';
import './city-badge.css';

function CityBadge({ cityObj }) {
  console.log('\nIn City Badge');
  console.log(cityObj);
  return (
    <div className="col city-badge d-flex justify-content-evenly align-items-center mt-3">
      <i className="bi bi-geo-alt"></i>
      <p>{cityObj.name}</p>
      <i className="bi bi-caret-right-fill arrow-icon"></i>
    </div>
  );
}

export default CityBadge;
