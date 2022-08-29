import React, { useState, useEffect } from "react";
import "./daily-view.css";

// 📝: ICONS
import { ReactComponent as SunIcon } from "../../assets/svg/form_icons/sun-dynamic-color.svg";
import { ReactComponent as SmallSun } from "../../assets/svg/form_icons/small-sun.svg";

function DailyView() {
  const weatherObj = {
    name: "Newport News",
    state: "VA",
    date: Date.now(),
    zipCode: null,
    temperature: 75,
    tempDescription: "Sunny",
    humidity: 40,
    windSpeed: 13,
  };

  const arr = [1, 2, 3, 4, 5, 6];

  const [city, setCity] = useState(weatherObj);

  return (
    <div className='col-md-11 d-flex flex-column justify-content-center align-items-center daily-view p-0'>
      <div className='container position-relative main-holder-info'>
        <div className='row d-flex flex-column main-text mt-2'>
          <div className='col p-0 '>
            <p>
              {city.name}, {city.state}
            </p>
          </div>
          <div className='col p-0'>
            <p>{city.temperature}&#x2109;</p>
          </div>
          <div className='col p-0'>
            <p>
              {city.tempDescription} <i class='bi bi-brightness-high'></i>
            </p>
          </div>
          <div className='col-4 p-0 text-center weather-icon translate-middle'>
            <SunIcon className='w-75' />
          </div>
        </div>
        <div className='row d-flex flex-column secondary-text my-3'>
          <div className='col p-0'>
            <p>Humidity: {city.humidity}%</p>
          </div>
          <div className='col p-0'>
            <p>Wind Speed: {city.windSpeed} km/h</p>
          </div>
        </div>
      </div>
      <div className='row d-flex justify-content-between flex-nowrap w-75 mt-4'>
        {arr.map((_, idx) => {
          return (
            <div className='col-1 d-flex flex-column align-items-center justify-content-center weather-day-item rounded-4'>
              <div className='row'>
                <div className='col'>
                  <p>23 May</p>
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <SmallSun />
                </div>
              </div>
              <div className='row'>
                <div className='col'>
                  <p>{city.temperature}&#x2109;</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DailyView;
