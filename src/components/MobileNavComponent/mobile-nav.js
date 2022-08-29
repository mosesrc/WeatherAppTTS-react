import React from "react";
import "./mobile-nav.css";

// 📝: ICONS
import { ReactComponent as MenuClose } from "../../assets/svg/form_icons/menu-icon-open.svg";

// 📝: Other Components
import ListView from "../ListComponent/list-view";
import ProfileWidget from "../ProfileWidgetComponent/profile-widget";

function MobileNav() {
  const navEmptyMessage = () => {
    return (
      <ul>
        <li>
          <p>Search For Cities To Select</p>
        </li>
        <li>
          <p>Once Selected They Will Be Added To Your List</p>
        </li>
      </ul>
    );
  };

  return (
    <div className='container w-75 position-absolute d-md-none mobile-nav show-border'>
      <div className='row d-flex flex-column'>
        <div className='col text-end mb-5'>
          <MenuClose />
        </div>
        <div className='col mb-5'>
          <ProfileWidget />
        </div>
        <div className='col mb-5'>
          <ListView />
        </div>
        <div className='col'>{navEmptyMessage()}</div>
      </div>
    </div>
  );
}

export default MobileNav;
