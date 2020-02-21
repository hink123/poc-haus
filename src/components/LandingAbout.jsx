import React from "react";
import "./LandingAbout.css";
import img from "../images/down-arrow.png";


export default function LandingAbout(props){
    return (
        <div>
        <div id="about">
            <div className="inner-container">
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a href="#deals" ><img src={img} alt="dow arrow" className="nav-arrow"/></a>
            </div>
        </div>
        </div>
    )
}