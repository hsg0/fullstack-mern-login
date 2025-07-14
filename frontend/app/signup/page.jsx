'use client';

import React, { useState } from 'react';
import './signup.css';
import axios from 'axios';
import Link from 'next/link';


export default function SignupPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const changeHandler = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !confirmEmail || !password || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    }

    if (email !== confirmEmail) {
      alert('Emails do not match');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://192.168.0.106:5001/api/signup', {
        fullName,
        email,
        password
      });

      console.log('✅ Signup response:', response.data);
      alert('Signup successful!');
      setFullName('');
      setEmail('');
      setConfirmEmail('');
      setPassword('');
      setConfirmPassword('');
      window.location.href = '/'; // Redirect to login

    } catch (error) {
      console.error('❌ Signup error:', error.response?.data || error.message);
      alert(error.response?.data?.error || 'Failed to sign up. Try again later.');
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Sunnys</h1>
        <h2 className="subtitle">Create Your Account</h2>
        <form className="form" onSubmit={changeHandler}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Confirm Email</label>
            <input type="email" value={confirmEmail} onChange={(e) => setConfirmEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn">Sign Up</button>
        </form>
        <p className="footer-text">
  Already have an account? <Link href="/">Login</Link>
</p>
      </div>
    </div>
  );
}