import React from 'react';
import './Deals.css';
import Deal from './Deal';

export default function Favorites(props){
    return (
        <div style={{paddingTop: 50}}>
            <h1>Favorites</h1>
            <Deal />
        </div>
    )
    }