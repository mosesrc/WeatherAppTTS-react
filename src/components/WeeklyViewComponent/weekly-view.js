import React from 'react';
import './weekly-view.css';

// 📝: ICONS
import { ReactComponent as SunIcon } from '../../assets/svg/form_icons/sun-dynamic-color.svg';

function WeeklyView(props) {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  console.log('Made it to weekly view!');

  return (
    <>
      {arr.map((_, idx) => {
        return (
          <div
            className="col-2 d-flex flex-column justify-content-center weekly-view text-center"
            key={idx}
          >
            <div className="row mb-0 ">
              <div className="col">
                <p>Sunny</p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col ">
                <p>72&#x2109;</p>
              </div>
            </div>
            <div className="row p-0">
              <div className="col">
                <SunIcon className="w-100 h-100" />
              </div>
            </div>

            <div className="row mt-2 ">
              <div className="col">
                <p>Tuesday</p>
                <p>08/23/2022</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default WeeklyView;
