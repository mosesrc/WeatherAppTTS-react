import React from "react";
import "./page-view.css";

// 📝: VIEWS
import ListView from "../ListComponent/list-view";

function PageView() {
  // 📝: Empty list Message
  const emptyList = () => {
    return (
      <div>
        <p>There are no cites in User's list</p>
        <p>User must search and select a city to view weather information</p>
      </div>
    );
  };

  return (
    <div className='container-fluid page-view'>
      <div className='row pt-4 d-flex justify-content-center'>
        <div className='col-4 p-4 list-block rounded-4'>
          <ListView />
        </div>
        <div className='col-8 view-block rounded-4'>{emptyList()}</div>
      </div>
    </div>
  );
}

export default PageView;
