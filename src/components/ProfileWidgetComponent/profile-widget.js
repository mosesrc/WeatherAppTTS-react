import React, { useState } from "react";
import "./profile-widget.css";

function ProfileWidget() {
  const [userName, setUserName] = useState("Ryan");
  const [userPic, setUserPic] = useState("PIC");
  return (
    <div className='profile-widget d-flex justify-content-evenly align-items-end show-border'>
      <p className='me-3'>Hello, {userName}</p>
      <div className='rounded-circle show-border'>{userPic}</div>
    </div>
  );
}

export default ProfileWidget;
