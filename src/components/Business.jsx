import React from 'react';
import './Business.css';

export default function Business(props){
    return (
        <div>
        <div className='biz-card'>
            <img src={props.business.imageUrl}className='deal-img' alt="random pic" />
            <h3>{props.business.name}</h3>
            <p>{props.business.description}</p>
        </div>
        </div>
    )
    }