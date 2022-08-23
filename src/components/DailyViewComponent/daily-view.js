import React, { useState, useEffect } from "react";
import "./daily-view.css";

function DailyView() {
  const weatherObj = {
    name: "Newport News",
    state: "VA",
    date: null,
    zipCode: null,
    temperature: 75,
    tempDescription: "Sunny",
    humidity: 40,
    windSpeed: 13,
  };

  const [city, setCity] = useState(weatherObj);

  return (
    <div className='container w-50 daily-view'>
      <div className='row d-flex flex-column show-border'>
        <div className='col'>
          <p>{city.name}</p>
        </div>
        <div className='col'>
          <p>{city.temperature}</p>
        </div>
        <div className='col'>
          <p>{city.tempDescription}</p>
        </div>
      </div>
      <div className='row d-flex flex-column show-border'>
        <div className='col'>
          <p>Humidity: {city.humidity}</p>
        </div>
        <div className='col'>
          <p>Wind Speed: {city.windSpeed} km/h</p>
        </div>
      </div>
    </div>
  );
}

export default DailyView;
