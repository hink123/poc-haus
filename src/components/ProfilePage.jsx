import React from 'react';
import './ProfilePage.css';

export default function ProfilePage(props) {
    return (
        <div className="container">
            <div className="company">
                <div className="header-image">IMAGE</div>
                <div className="company-details">
                    <div className="detail-left">
                        <h1>COMPANY NAME</h1>
                        <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="istagram"></img>
                        <img src="https://img.icons8.com/color/48/000000/twitter-squared.png" alt="twitter"></img>
                    </div>
                    <div className="detail-right">

                    </div>
                </div>
            </div>
        </div>
    )
} 