import React from "react";
import "./header.css";
import { ReactComponent as AppTitle } from "../../assets/svg/AppTitle.svg";

function Header() {
  return (
    <div className='container-fluid header'>
      <div className='row'>
        <div className='col'>
          <AppTitle className='img-fluid' />
        </div>
      </div>
    </div>
  );
}

export default Header;
