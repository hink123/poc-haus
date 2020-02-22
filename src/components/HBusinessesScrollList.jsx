import React from 'react'
import {Link} from 'react-router-dom';
import Business from '../components/Business';

export default function HBusinessesScrollList(props){
    return (
        <div className='HScrollView' style={{display: 'flex', width: '100%', overflowX: 'scroll'}}>
            {
                props.listItems.map((item, idx) => {
                    return (
                        <div className="card" style={{width: 100, height: 200, margin: 75}}>
                            <Link to='/business'>
                                <Business business={item} key={idx} />
                            </Link> 
                        </div>
                    )
                })
            }
        </div>
    )
}