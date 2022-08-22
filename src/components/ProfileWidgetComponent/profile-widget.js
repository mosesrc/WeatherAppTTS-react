import React, { useState, useEffect } from "react";
import "./profile-widget.css";

import myImg from "../../assets/images/profile-pics/FakeProfilePic.jpg";

function ProfileWidget() {
  const [userName, setUserName] = useState("Mr/Ms.Whatever");
  const [userPic, setUserPic] = useState();

  useEffect(() => {
    setUserPic(myImg);
  }, [myImg]);

  return (
    <div className='container profile-widget d-flex justify-content-evenly align-items-end me-2 show-border'>
      <div className='row d-flex '>
        <div className='col-sm-8 order-sm-0 order-1'>
          <p className='mb-0'>Hello, {userName}!</p>
        </div>
        <div className='col-sm-4 order-sm-1'>
          <div className='rounded-circle'>
            <img src={userPic} alt='User Profile Pic' className='profile-pic' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileWidget;
