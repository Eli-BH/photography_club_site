import React from "react";
import video from "../assets/Pexels Videos 2795400.mp4";
import video2 from "../assets/production ID_3772428.mp4";
import logo from "../assets/ExUiKHk - Imgur.png";
const HomeScreen = () => {
  return (
    <div className="home-container">
      <video src={video2} autoPlay loop mute="true" />
      <img src={logo} alt="PAM logo" />
    </div>
  );
};

export default HomeScreen;
