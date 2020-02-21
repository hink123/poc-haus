import React from 'react';
import './Product.css';

export default function Product(props) {
    return (
        <div className="product">
            <div className="product-image" style={{backgroundImage: `url(${props.product.image})`}}></div>
            <h3>{props.product.title}</h3>
            <div>{props.product.description}</div>
            <div><span class="og-price">{props.product.price}</span>  <em>{props.product.discount}</em></div>
            <button>Redeem Code</button>
        </div>
    )
}