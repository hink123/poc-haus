import React from 'react';
import Review from './Review';
import './ProfilePage.css';

export default function ProfilePage(props) {
    return (
        <div className="total-container">
            <div className="header-container">
                <img src="./header-photo.png" alt="banner" className="header-image"/>
                <img src="./heart.png" alt="banner" className="heart-image"/>
                <div className="company-name">Tribec</div>
            </div>
            <div className="company">
                <div className="company-details">
                    <div className="detail-left">
                        <div className="company-about">About the Brand</div>
                        <div className="about-info">
                            Tribec was founded for women who want to express their individual style and vo..
                        </div>
                        <div className="read-more">
                            Read More
                        </div>
                    </div>
                    <div className="detail-right">
                        <div>
                            <a href="" className="company-about link-site">Visit Tribec Website</a>
                        </div>
                        <div>
                            <img src="./twitter.png" alt="banner" className="twitter"/>
                            <img src="./instagram.png" alt="banner" className="instagram"/>
                        </div>
                    </div>
                </div>
                <div className="attribute-group"><img src="./checkmark.png" alt="banner" className="check"/><span className='comp-attribute'>Woman-Owned Business</span> <img src="./checkmark.png" alt="banner" className="check"/><span className='comp-attribute'>Sustainably Made</span></div>
                <div className="company-details">
                    <div className="detail-left">
                        <div className="company-about">About the Owner</div>
                        <div className="about-info">
                            Shana Jackson grew up in LA and went to FIDM to pursu...
                        </div>
                        <div className="read-more">
                            Read More
                        </div>
                    </div>
                    <div className="detail-right">
                       <img src="./owner.png" alt="owner" className="owner-img"/>
                       <div className="owner-name">Owner Shana Jackson</div>
                    </div>
                </div>
            </div>
            <div>
                <div>Deals</div>
                <div className="">

                </div>
            </div>
            <div>
                <div className="reviews-title">Reviews</div>
                <div>
                    <Review />
                </div>
            </div>
        </div>
    )
} 