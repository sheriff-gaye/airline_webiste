import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/main_header.png";


const Mainheader=()=>{
    return(
        <header className="main_header">
            <div className="container main_header-container">
                <div className="main_header-left">
                    <h4>#100DaysOfWorkouts</h4>
                    <h1>Join the Legends of the Fitness World</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima culpa atque voluptatibus illo provident ratione eaque laudantium eos iusto cumque.

                    </p>
                    <Link to="/plans" className="btn lg">Get Started</Link>
                </div>

                <div className="main_header-right">
                    <div className="main_header-circle"></div>
                    <div className="main_header-image">
                        <img src={Image} alt="image" />
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Mainheader;