import React from "react";
import { Jumbotron } from "react-bootstrap";

import GalleryComponent from "../components/GalleryComponent";

const GalleryScreen = () => {
  return (
    <div className="gallery-container">
      <div className="container">
        <Jumbotron className="jumbotron-div">
          <h2 className="jumbotron-h2">P.A.M. Photo Gallery</h2>
          <p>Check out some photos from our members</p>
        </Jumbotron>
      </div>

      <GalleryComponent />
    </div>
  );
};

export default GalleryScreen;
