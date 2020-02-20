import React from 'react';
import './Login.css';

export default function Login(props){
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
                value='Sign In/Sign Up'
            />
        </div>
    );
}