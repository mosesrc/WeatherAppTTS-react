import React from "react";
import "./city-badge.css";

// 📝: ICONS
import { ReactComponent as ArrowRight } from "../../assets/svg/form_icons/Forward-arrow.svg";

function CityBadge() {
  return (
    <div className='col city-badge d-flex justify-content-evenly align-items-center mt-3 show-border'>
      <i className='bi bi-geo-alt'></i>
      <p>Newport News</p>
      <i className='bi bi-caret-right-fill arrow-icon'></i>
    </div>
  );
}

export default CityBadge;
