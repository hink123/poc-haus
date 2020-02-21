import React from "react";
import "./LandingAbout.css";
import img from "../images/down-arrow.png";

export default function LandingAbout(props){
    return (
        <div>
        <div id="about">
            <div className="inner-container">
            <h1>About Us</h1>
            <p>We provide a platform for people of color in Los Angeles that are in the fashion industry to flourish and gain traffic to their designs. Users are able to access deals exclusively through our site.</p>
            </div>
            <div className="arrow2">
            <a href="#deals" ><img src={img} alt="dow arrow" className="nav-arrow"/></a>
            </div>
        </div>
        </div>
    )
}