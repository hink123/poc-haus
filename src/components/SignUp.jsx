import React from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';

export default function SignUp(props){
    return (
        <div className='container'>
            <input 
                type='text'
                placeholder='Full Name'
            />
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
                value='Sign Up'
            />
            <Link 
                className="SignIn"
                to='/signin'
                key='signin'
            >
                Sign In
            </Link>
        </div>
    );
}