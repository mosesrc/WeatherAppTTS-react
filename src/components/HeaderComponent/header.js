import React from "react";
import "./header.css";
import { ReactComponent as AppTitle } from "../../assets/svg/AppTitle.svg";

function Header() {
  return (
    <div className='container-fluid header'>
      <div className='row'>
        <div className='col-4'>
          <AppTitle />
        </div>
      </div>
    </div>
  );
}

export default Header;
