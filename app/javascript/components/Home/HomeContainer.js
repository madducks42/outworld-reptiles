import React from "react";

import AboutUs from "./AboutUs";
import Updates from "./Updates";

const HomeContainer = () => {
  return (
    <div className="container">
      <div className="columns">
        <img
          className="img-fluid"
          src="https://outworld-reptiles-production.s3.amazonaws.com/BabySnek.jpg"
          alt="Baby snake"
        ></img>
      </div>
      <div className="columns callout">
        <AboutUs />
        <Updates />
      </div>
    </div>
  );
};

export default HomeContainer;
