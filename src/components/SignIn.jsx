import React from 'react';
import { Link } from 'react-router-dom';

import './SignIn.css';

export default function SignIn(props){
    return (
        <div className='container'>
            <input 
                type='email'
                placeholder='Email Address'
            />
            <input 
                type='password'
                placeholder='Password'
            />
            <input
                className='action-btn'
                type='button'
                value='Sign In'
            />
            <Link 
                className="SignUp"
                to='/signup'
                key='signup'
            >
                Sign Up
            </Link>
        </div>
    );
}