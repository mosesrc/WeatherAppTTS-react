import React, { useState, useEffect } from 'react';
import './daily-view.css';

// 📝: ICONS
import { ReactComponent as SunIcon } from '../../assets/svg/form_icons/sun-dynamic-color.svg';
import { ReactComponent as SmallSun } from '../../assets/svg/form_icons/small-sun.svg';

function DailyView({ clickedCity }) {
  console.log('\n In Daily View --all Logs below');
  console.log('Below is the city weather obj');
  console.log(clickedCity);
  console.log('\n\nBelow is our tester to print different values on the obj: ');
  console.log(clickedCity.weather[0].icon);

  console.log('END LOG');

  const weatherObj = {
    name: 'Newport News',
    state: 'VA',
    date: Date.now(),
    zipCode: null,
    temperature: 75,
    tempDescription: 'Sunny',
    humidity: 40,
    windSpeed: 13
  };

  const arr = [1, 2, 3, 4, 5, 6];

  const [city, setCity] = useState(weatherObj);

  useEffect(() => {
    if (clickedCity === undefined) return <div />;
  });

  let temperature = (1.8 * (clickedCity.main.temp - 273) + 32).toFixed(1);
  let dailyIcon = `http://openweathermap.org/img/wn/${clickedCity.weather[0].icon}@2x.png`;
  let speed = (clickedCity.wind.speed * 2.237).toFixed(0);

  return (
    <div className="col-md-11 d-flex flex-column justify-content-center align-items-center daily-view p-0">
      <div className="container position-relative main-holder-info">
        <div className="row d-flex flex-column main-text mt-2">
          <div className="col p-0 ">
            <p>
              {clickedCity.name}, {city.state}
            </p>
          </div>
          <div className="col p-0">
            <p>{temperature}&#x2109;</p>
          </div>
          <div className="col p-0">
            <p>{clickedCity.weather[0].description}</p>
          </div>
          <div className="col-4 p-0 text-center weather-icon translate-middle">
            <img src={dailyIcon} className="w-75" alt={clickedCity.weather[0].main} />
          </div>
        </div>
        <div className="row d-flex flex-column secondary-text my-3">
          <div className="col p-0">
            <p>Humidity: {clickedCity.main.humidity}%</p>
          </div>
          <div className="col p-0">
            <p>Wind Speed: {speed} mph</p>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-between flex-nowrap w-75 mt-4">
        {arr.map((_, idx) => {
          return (
            <div
              className="col-1 d-flex flex-column align-items-center justify-content-center weather-day-item rounded-4"
              key={idx}
            >
              <div className="row">
                <div className="col">
                  <p>23 May</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <SmallSun />
                </div>
              </div>
              <div className="row">
                <div className="col">
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
