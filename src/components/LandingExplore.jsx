import React from "react";
import "./LandingExplore.css";
import products from '../constants/products';
import HProductScrollList from "./HProductScrollList";
import { Link } from 'react-router-dom';
import "./SignIn.css";


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
            <div style={{
                width: '100vw', 
                height: 100, 
                display: 'flex', 
                margin: '0 auto',
                justifyContent: 'space-evenly', 
                flexDirection: 'column',
                paddingBottom: 50,
                paddingTop: 100,
                backgroundColor: '#000'
            }}>
            <Link
                className="action-btn"
                to='/signin'
                key='signin'
                style={{lineHeight: 1.85, width: 250}}
            >
                Sign In
            </Link>
            <Link 
                className="second-action-btn"
                to='/signup'
                key='signup'
            >
                Sign Up
            </Link>
            </div>
            </div>
            </div>
        </div>
        </div>
    )
}