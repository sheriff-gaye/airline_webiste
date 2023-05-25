import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/main_header.png";

const Mainheader = () => {
  return (
    <header className="main_header">
      <div className="container main_header-container">
        <div className="main_header-left">
          <h4>#100DaysOfWorkouts</h4>
          <h1>Join the Legends of the Fitness World</h1>
          <p>
            Become a legend in the fitness world! Join our gym and unlock your
            true potential with top-notch equipment, expert trainers, and a
            supportive community. Start your transformative journey today and
            make your mark among the fitness legends.
          </p>
          <Link to="/plans" className="btn lg">
            Get Started
          </Link>
        </div>

        <div className="main_header-right">
          <div className="main_header-circle"></div>
          <div className="main_header-image">
            <img src={Image} alt="image" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Mainheader;
