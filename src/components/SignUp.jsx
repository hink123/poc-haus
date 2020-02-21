import React, { useState } from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';

export default function SignUp(props){

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submitForm() {
        const payload = {
            fullName,
            email,
            password
        }

        let url = 'users/sign';

        await fetch(url, {
            method: 'POST',
            headers: new Headers({
                'Content-Type':'application/json'
            }),
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('token', data.token);
            props.history.push('/about');
        })
    }

    return (
        <div className='outer-container'>
        <div className='container'>
            <input
                className="text-input"
                type='text'
                placeholder='Full Name'
                onChange={(e) => setFullName(e.target.value)}
            />
            <input
                className="text-input"
                type='email'
                placeholder='Email Address'
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                className='text-input'
                type='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                className='action-btn'
                type='button'
                value='Sign Up'
                onClick={submitForm}
            />
            <Link 
                className="second-action-btn"
                to='/signin'
                key='signin'
            >
                Sign In
            </Link>
        </div>
        </div>
    );
}