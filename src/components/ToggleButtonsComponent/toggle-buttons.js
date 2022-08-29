import React from "react";
import "./toggle-buttons.css";
import { useNavigate } from "react-router-dom";

function ToggleButtons() {
  // 📝: Setting up toggle of weekly-view/daily-view
  const navigate = useNavigate();

  // NOTE: redirecting to views 👇
  const navigateToWeeklyView = () => {
    navigate("/page_view/weekly_view");
  };
  const navigateToDailyView = () => {
    navigate("/page_view/daily_view");
  };

  return (
    <div className='btn-group' role='group' aria-label='Basic example'>
      <button
        type='button'
        onClick={navigateToWeeklyView}
        className='btn btn-primary toggle-buttons'
      >
        Week
      </button>
      <button
        type='button'
        onClick={navigateToDailyView}
        className='btn btn-primary toggle-buttons'
      >
        Daily
      </button>
    </div>
  );
}

export default ToggleButtons;

// For the hover effect I need to add the color and functionality for that
// #D1E4FF; This is the hover color
