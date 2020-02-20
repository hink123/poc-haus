import React from 'react';
import './LandingPage.css';
import img from '../images/down-arrow.png'

export default function LandingPage(props){
    return (
        <div>
        <div id='landing'>
            <h1>P.O.C.Haus</h1>
            <p>Explore, Shop, and Support POC-owned businesses in LA</p>
            <img className='nav-arrow' src={img} />
        </div>
        <div id='about'>
            <h1>About</h1>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <img className='nav-arrow' src={img} />
            {/* <p>How can I support?</p> */}
        </div>
        </div>
    )
}