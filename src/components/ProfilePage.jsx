import React from 'react';
import Product from './Product';
import './ProfilePage.css';

export default function ProfilePage(props) {
    return (
        <div className="container">
            <div className="header-image"><img src="https://picsum.photos/800/300" alt="banner"/></div>
            <div className="company">
                <div className="company-details">
                    <div className="detail-left">
                        <h2>COMPANY NAME</h2>
                        <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="istagram"></img>
                        <img src="https://img.icons8.com/color/48/000000/twitter-squared.png" alt="twitter"></img>
                        <h3>About Company</h3>
                        <div>
                            COMPANY ABOUT  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aliquid repellendus pariatur minima optio necessitatibus distinctio dolores nemo. Laboriosam, blanditiis possimus odio deleniti quae dolores tenetur fugiat quidem quibusdam id!
                        </div>
                    </div>
                    <div className="detail-right">
                        <h2>
                            <a href="" className="company-link">Visit Company Site</a>
                        </h2>
                        <h3>
                            <button className="btn-fav">&#10084;</button>
                            Add to Favorites
                        </h3>
                        <div><img src="https://picsum.photos/200" alt="stock"/></div>
                    </div>
                </div>
            </div>
            <div>
                <Product />
            </div>
        </div>
    )
} 