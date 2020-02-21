import React from "react";
import "./LandingMain.css";
import img from "../images/down-arrow.png"

export default function LandingMain(props){
    return (
        <div>
        <div id="landing">
            <div className="inner-container">
            <p>Explore, Shop, and Support POC-owned businesses in LA</p>
            <a href="#deals" ><img src={img} alt="dow arrow"  className="nav-arrow"/></a>
            </div>
        </div>
        </div>
    )
}