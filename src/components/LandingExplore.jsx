import React from "react";
import "./LandingExplore.css";
import HomePageDeals from "./HomePageDeals";


export default function LandingExplore(props){
    return (
        <div>
        <div id="deals">
            <h1>Explore Deals</h1>
            <HomePageDeals/>
        </div>
        </div>
    )
}