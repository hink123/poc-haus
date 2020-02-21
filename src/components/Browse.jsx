import React from 'react';
import './Browse.css';
import businesses from '../constants/businesses';
import products from '../constants/products';
import HProductScrollList from '../components/HProductScrollList';
import HBusinessScrollList from '../components/HBusinessesScrollList';

export default function Browse(props){
    return (
        <div>
            <h1>Browse</h1>
            <HProductScrollList listItems={products}/>
            <HBusinessScrollList listItems={businesses} />
        </div>
    )
    }