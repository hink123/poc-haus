import React from "react";
import "./LandingPage.css";
import HomePageDeals from "./HomePageDeals";
import img from "../images/down-arrow.png";
import LandingMain from "./LandingMain";
import LandingAbout from "./LandingAbout"

export default function LandingPage(props){
    return (
        <div>
        <LandingMain />
        <LandingAbout />
        <div id="deals">
            <h1>Explore Deals</h1>
            <div className="nav-arrow"/>
            <HomePageDeals/>
        </div>
        </div>
    )
}