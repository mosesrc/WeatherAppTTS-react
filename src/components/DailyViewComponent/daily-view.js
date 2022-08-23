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
    <div className='col-md-11 d-flex justify-content-center align-items-center daily-view p-0 show-border'>
      <div className='container w-75 main-holder-info'>
        <div className='row d-flex flex-column main-text show-border'>
          <div className='col p-0 show-border'>
            <p>
              {city.name}, {city.state}
            </p>
          </div>
          <div className='col p-0 show-border'>
            <p>{city.temperature}</p>
          </div>
          <div className='col p-0 show-border'>
            <p>
              {city.tempDescription} <i class='bi bi-brightness-high'></i>
            </p>
          </div>
        </div>
        <div className='row d-flex flex-column secondary-text mt-5 show-border'>
          <div className='col p-0'>
            <p>Humidity: {city.humidity}%</p>
          </div>
          <div className='col p-0'>
            <p>Wind Speed: {city.windSpeed} km/h</p>
          </div>
        </div>
        <div className='row'></div>
      </div>
    </div>
  );
}

export default DailyView;
