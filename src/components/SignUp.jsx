import React from 'react';
import './SignIn.css';

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
        </div>
    );
}