import React from "react";
import "./LandingExplore.css";
import HomePageDeals from "./HomePageDeals";


export default function LandingExplore(props){
    return (
        <div>
        <div id="deals">
            <h1>How Can I Support?</h1>
            <p>Create an account to access the deals below.</p>
            <div id="homepage-deals">
            <h1>Deals</h1>
            <HomePageDeals/>
            </div>
        </div>
        </div>
    )
}