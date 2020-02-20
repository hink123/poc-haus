import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import * as NavItems from '../constants/NavBarItems';

export default function NavBar(props) {

    function toggleMenu(){
        let nav = document.querySelector('.nav');
        let isClosed = nav.getAttribute('class') === 'nav closed';
        if (isClosed){
            nav.setAttribute('class', 'nav');
            let lines = document.querySelectorAll('.line-dark');
            lines.forEach(e => {e.setAttribute('class', 'line-light')});
        } else {
            nav.setAttribute('class', 'nav closed');
            let lines = document.querySelectorAll('.line-light');
            lines.forEach(e => {e.setAttribute('class', 'line-dark')});
        }
    };

    if (props.navItems) {
        return (
            <div>
                <div className="nav closed">
                    {
                        props.navItems.map((item) => {
                            return (
                                <div onClick={toggleMenu}>
                                    <Link
                                        className="nav-item"
                                        to={NavItems.default[item].path}
                                        key={NavItems.default[item].key}
                                    >
                                        {NavItems.default[item].title}
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="nav-btn" onClick={toggleMenu}>
                    <div className="line-dark"></div>
                    <div className="line-dark"></div>
                    <div className="line-dark"></div>
                </div>
            </div>
        )
    }
}