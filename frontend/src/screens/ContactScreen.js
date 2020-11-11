import React from "react";
import { Link } from "react-router-dom";
import instaIcon from "../assets/insta.png";
import "../styles/contact.scss";

const ContactScreen = () => {
  return (
    <div className="contact-container">
      <h1>Check us out on Instagram!</h1>
      <a href="https://www.instagram.com/jjay.pam.photography/">
        <img src={instaIcon} alt="instagram icon" />
      </a>
    </div>
  );
};

export default ContactScreen;
