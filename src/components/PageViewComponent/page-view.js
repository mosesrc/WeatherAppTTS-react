import React from "react";
import "./page-view.css";

// 📝: VIEWS
import ListView from "../ListComponent/list-view";

function PageView() {
  return (
    <div className='container-fluid page-view'>
      <div className='row pt-4 d-flex justify-content-center'>
        <div className='col-4 p-4 list-block rounded-4'>
          <ListView />
        </div>
        <div className='col-8 view-block rounded-4'></div>
      </div>
    </div>
  );
}

export default PageView;
