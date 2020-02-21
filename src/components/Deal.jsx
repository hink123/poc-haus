import React from 'react';
import './Deal.css';

export default function Deal(props){
    return (
        <div id='homepage-deal'>
            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80" className='deal-img' alt="person in yellow" />
            <h3>Item Name</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <h4>$xx</h4>
        </div>
    )
    }