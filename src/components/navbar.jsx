import React from "react";
import Logo from "../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data.js";
import { GoThreeBars } from "react-icons/go"
import { MdOutlineClose } from "react-icons/md"
import { useState } from "react";



const Navbar = () => {
    const [isNavShowing, SetisNavShowing] = useState(false);
    return (

        <nav>
            <div className="container nav_container">


                <Link to="/" className="logo"><img src={Logo} alt="nav_logo" onClick={() => SetisNavShowing(false)} /></Link>

                <ul className={`nav_links ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>
                    {
                        links.map(({ name, path }, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={path} className={({ isActive }) => isActive ? 'active-nav' : ""} onClick={() => SetisNavShowing(prev => !prev)}>{name}</NavLink>

                                </li>)
                        })
                    }

                </ul>

                <button className="nav_toggle-btn" onClick={() => SetisNavShowing(prev => !prev)}>
                    {
                        isNavShowing ? <MdOutlineClose /> : <GoThreeBars />
                    }
                </button>

            </div>


        </nav>
    );
}


export default Navbar;