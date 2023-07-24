/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import land from "../images/land.jpg";

const Mainheader = () => {
  return (
    <header className="main_header">
      <div className="container main_header-container">
        <div className="main_header-left">
          {/* <h4>#100DaysOfWorkouts</h4> */}
          <h1>
            {" "}
            <span>Explore </span> Your World!
          </h1>
          <p>
            At Sunny Travels, we make every journey an unforgettable experience.
            Discover the world's most captivating destinations with our tailored
            airline landing pages. Fly with confidence, comfort, and joy as we
            take care of every detail. Whether it's a leisurely escape or a
            thrilling adventure, let Sunny Travels be your compass to explore
            the wonders of the world. Embark on a seamless journey, and let the
            skies lead you to new horizons.
          </p>
          <Link to="/plans" className="btn lg">
            Get Started
          </Link>
        </div>

        <div className="main_header-right">
          <div className="main_header-circle"></div>
          <div className="main_header-image">
            <img src={land} alt="image" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Mainheader;
