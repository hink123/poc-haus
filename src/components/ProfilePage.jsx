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
                        <h3>About Company</h3>
                        <div>
                            COMPANY ABOUT  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aliquid repellendus pariatur minima optio necessitatibus distinctio dolores nemo. Laboriosam, blanditiis possimus odio deleniti quae dolores tenetur fugiat quidem quibusdam id!
                        </div>
                    </div>
                    <div className="detail-right">
                        <a href="" className="company-link">Visit Company Site</a>
                        <div>
                            <img src="https://img.icons8.com/material-sharp/24/000000/like.png" alt="heart"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 