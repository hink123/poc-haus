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
            <div className='products-scrollview'>
                <HProductScrollList listItems={products}/>
            </div>
            <div className='business-scrollview'>
                <HBusinessScrollList listItems={businesses} />
            </div>
        </div>
    )
    }