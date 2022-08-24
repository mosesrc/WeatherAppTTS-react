import React from "react";
import "./page-view.css";
import { useLocation, Routes, Route } from "react-router-dom";

// 📝: VIEWS
import ListView from "../ListComponent/list-view";
import ToggleButtons from "../ToggleButtonsComponent/toggle-buttons";
import DailyView from "../DailyViewComponent/daily-view";
import WeeklyView from "../WeeklyViewComponent/weekly-view";

// 📝: Other components

function PageView(props) {
  // 📝: Path Locations
  const pathName = useLocation().pathname;
  console.log(pathName);

  // 📝: Empty list Message
  const emptyList = () => {
    return (
      <div className='empty-message text-center'>
        <p>There are no cites in User's list</p>
        <p>User must search and select a city to view weather information</p>
      </div>
    );
  };

  return (
    <div className='container-fluid page-view position-relative'>
      <div className='row pt-4 d-flex justify-content-center'>
        <div className='col-4 d-none d-md-inline-block d-flex flex-column p-4 list-block rounded-4'>
          <ListView />
        </div>
        <div className='col-sm-8 col-11 view-block rounded-4'>
          <div className='row'>
            <div className='col mt-1 d-none d-md-flex d-flex justify-content-center'>
              <ToggleButtons />
            </div>
          </div>
          <div className='row d-flex justify-content-center align-items-center mt-3'>
            {pathName.includes("weekly_view") ? <WeeklyView /> : <div />}
            {pathName.includes("daily_view") ? <DailyView /> : <div />}
            <div className='col'>{emptyList()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageView;

// <div className='row d-flex flex-column align-items-center mt-3'>
