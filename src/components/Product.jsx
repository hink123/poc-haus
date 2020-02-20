import React from 'react';
import './Product.css';

export default function Product(props) {
    return (
        <div className="product">
            <img src="https://picsum.photos/200" alt="STOCK"/>
            <h3>Product Details</h3>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div><span class="og-price">$100</span>  <em>$50</em></div>
            <button>Redeem Code</button>
        </div>
    )
}