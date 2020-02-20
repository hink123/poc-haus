import React from 'react';
import './SignIn.css';

export default function Login(props){
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
                value='Sign In/Sign Up'
            />
        </div>
    );
}