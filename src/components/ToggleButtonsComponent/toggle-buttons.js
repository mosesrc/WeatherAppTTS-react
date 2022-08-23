import React from "react";
import "./toggle-buttons.css";

function ToggleButtons() {
  return (
    <div className='btn-group' role='group' aria-label='Basic example'>
      <button type='button' className='btn btn-primary toggle-buttons'>
        Week
      </button>
      <button type='button' className='btn btn-primary toggle-buttons'>
        Daily
      </button>
    </div>
  );
}

export default ToggleButtons;

// For the hover effect I need to add the color and functionality for that
// #D1E4FF; This is the hover color