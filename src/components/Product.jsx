import React from 'react';
import './Product.css';

export default function Product(props) {
    return (
        <div className="product">
            <img src={props.product.image} alt="STOCK"/>
            <h3>{props.product.title}</h3>
            <div>{props.product.description}</div>
            <div><span class="og-price">{props.product.price}</span>  <em>{props.product.discount}</em></div>
            <button>{props.product.redeemCode}</button>
        </div>
    )
}