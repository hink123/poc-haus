import React from 'react'
import Business from '../components/Business'

export default function HBusinessesScrollList(props){
    return (
        <div className='HScrollView' style={{display: 'flex', width: '70vw', overflowX: 'scroll', margin: '30px auto', backgroundColor: '#F5C346', padding: 10, borderRadius: 7}}>
            {
                props.listItems.map((item, idx) => {
                    return (
                        <div className="card" style={{width: 100, height: 200, margin: 75}}>
                            <Business business={item} key={idx} />
                        </div>
                    )
                })
            }
        </div>
    )
}