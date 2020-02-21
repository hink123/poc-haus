import React from 'react'
import Business from './Business'

export default function HBusinessesScrollList(props){
    return (
        <div className='HScrollView' style={{display: 'flex', width: '100%', overflowX: 'scroll', margin: '30px auto'}}>
            {
                props.listItems.map((item, idx) => {
                    return (
                        <div className="card" style={{width: 100, height: 300, margin: 100}}>
                            <Business business={item} key={idx} />
                        </div>
                    )
                })
            }
        </div>
    )
}