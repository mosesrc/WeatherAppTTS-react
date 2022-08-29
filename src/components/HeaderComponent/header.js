import React from "react";
import "./header.css";

// 📝: SVG's
import { ReactComponent as AppTitle } from "../../assets/svg/AppTitle.svg";
import { ReactComponent as MenuIconClose } from "../../assets/svg/form_icons/menu-icon-close.svg";

// 📝: Other Components
import ProfileWidget from "../ProfileWidgetComponent/profile-widget";

function Header() {
  return (
    <div className='container-fluid header'>
      <div className='row d-md-none'>
        <div className='col'>
          <MenuIconClose />
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <AppTitle className='img-fluid' />
        </div>
        <div className='col-3 d-none d-md-inline-block align-self-center'>
          <ProfileWidget />
        </div>
      </div>
    </div>
  );
}

export default Header;
