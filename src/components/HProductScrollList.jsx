import React from 'react'
import Product from './Product'

export default function HProductScrollList(props){
    return (
        <div>
            {
                props.listItems.map((item, idx) => {
                    return (
                        <Product product={item} key={idx} />
                    )
                })
            }
        </div>
    )
}