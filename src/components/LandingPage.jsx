import React from "react";
import "./LandingPage.css";
import LandingMain from "./LandingMain";
import LandingAbout from "./LandingAbout";
import LandingExplore from "./LandingExplore"

export default function LandingPage(props){
    return (
        <div>
        <LandingMain />
        <LandingAbout />
        <LandingExplore />
        </div>
    )
}