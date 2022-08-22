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
    <div className='profile-widget d-flex justify-content-evenly align-items-end me-2'>
      <p className='mb-0'>Hello, {userName}!</p>
      <div className='rounded-circle'>
        <img src={userPic} alt='User Profile Pic' class='profile-pic' />
      </div>
    </div>
  );
}

export default ProfileWidget;
