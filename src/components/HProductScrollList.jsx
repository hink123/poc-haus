import React from 'react'
import Product from './Product'

export default function HProductScrollList(props) {
    return (
        <div className='HScrollView' style={{ display: 'flex', width: '80vw', overflowX: 'scroll', margin: '30px auto', backgroundColor: '#3FC8EE', padding: 10, borderRadius: 7}}>
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