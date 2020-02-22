import React from 'react'
import Product from './Product'

export default function HProductScrollList(props) {
    return (
        <div className='HScrollView' style={{ display: 'flex', width: '100%', overflowX: 'scroll'}}>
            {
                props.listItems.map((item, idx) => {
                    return (
                        <div className="card" style={{ width: 100, height: 250, margin: '50px 75px' }}>
                            <Product product={item} key={idx} />
                        </div>
                    )
                })
            }
        </div>
    )
}