import React from "react";
import "./list-view.css";

// 📝: Other Components
import CityBadge from "../CityBadgeComponent/city-badge";

function ListView() {
  return (
    <>
      <div className='col-12'>
        <div className='input-group'>
          <input
            className='form-control'
            list='datalistOptions'
            id='exampleDataList'
            placeholder='Search City, State or Zip'
          />
          <span className='input-group-text'>
            <i className='bi bi-search'></i>
          </span>
        </div>
      </div>
      <CityBadge />
    </>
  );
}

export default ListView;
