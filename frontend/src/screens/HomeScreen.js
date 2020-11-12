import React from "react";

import video from "../assets/production ID_3772428.mp4";
import logo from "../assets/ExUiKHk - Imgur.png";
const HomeScreen = () => {
  return (
    <div className="home-container">
      <video src={video} autoPlay loop muted={true} />
      <img src={logo} alt="PAM logo" />
    </div>
  );
};

export default HomeScreen;
