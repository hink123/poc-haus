import React from "react";
import "./LandingExplore.css";
import products from '../constants/products';
import HProductScrollList from "./HProductScrollList";


export default function LandingExplore(props){
    return (
        <div>
        <div id="deals">
            <div className="inner-container">
            <h1>How Can I Support?</h1>
            <p>Create an account to access the deals below.</p>
            <div id="homepage-deals">
            <h2>Deals</h2>
            <HProductScrollList listItems={products}/>
            </div>
            </div>
        </div>
        </div>
    )
}