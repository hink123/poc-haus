import React from 'react'
import Business from './Business'

export default function HBusinessesScrollList(props){
    return (
        <div>
            {
                props.listItems.map((item, idx) => {
                    return (
                        <Business business={item} key={idx} />
                    )
                })
            }
        </div>
    )
}