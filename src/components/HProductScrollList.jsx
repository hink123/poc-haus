import React from 'react'
import Product from './Product'

export default function HProductScrollList(props){
    return (
        <div className='HScrollView' style={{display: 'flex', width: '100%', overflowX: 'scroll', margin: '30px auto'}}>
            {
                props.listItems.map((item, idx) => {
                    return (
                        <div className="card" style={{width: 100, height: 300, margin: 100}}>
                            <Product product={item} key={idx} />
                        </div>
                    )
                })
            }
        </div>
    )
}