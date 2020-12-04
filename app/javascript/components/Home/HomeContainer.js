import React from "react";

import AboutUs from "./AboutUs";
import Updates from "./Updates";

const HomeContainer = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <img
              className="img-fluid"
              src="https://outworld-reptiles-production.s3.amazonaws.com/BabySnek.jpg"
              alt="Baby snake"
            ></img>
          </div>
        </div>
        <div className="columns box mt-6">
          <AboutUs />
          <Updates />
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
