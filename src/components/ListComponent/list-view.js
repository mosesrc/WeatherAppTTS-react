import React from "react";
import "./list-view.css";

function ListView() {
  return (
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
  );
}

export default ListView;
