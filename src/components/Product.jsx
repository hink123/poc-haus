import React from 'react';
import './Product.css';

export default function Product(props) {
    return (
        <div className="product">
            <img src="https://picsum.photos/200" alt="STOCK"/>
            <h3>{props.product.title}</h3>
            <div>{props.product.description}</div>
            <div><span class="og-price">{props.products.price}</span>  <em>{props.product.discount}</em></div>
            <button>{props.product.redeemCode}</button>
        </div>
    )
}