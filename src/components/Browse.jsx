import React from 'react';
import './Browse.css';
import HProductScrollList from '../components/HProductScrollList';
import HBusinessScrollList from '../components/HBusinessesScrollList';

import businesses from '../constants/businesses';
import products from '../constants/products';

export default function Browse(props){
    return (
        <div style={{paddingTop: 50}}>
            <h1>Browse</h1>
            <HProductScrollList listItems={products}/>
            <HBusinessScrollList listItems={businesses} />
        </div>
    )
    }