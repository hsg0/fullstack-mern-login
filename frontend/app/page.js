'use client';
import React, { useState } from 'react';
import './custom.css';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const login = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5001/api/login', {
        email,
        password
      }, {
        withCredentials: true // send HTTP-only cookie
      });

      const data = response.data;
      console.log('✅ Login:', data);

      alert(`Welcome back, ${data.user.fullName}`);
      router.push('/securehome');
    } catch (err) {
      console.error('❌ Login error:', err.response?.data || err.message);
      alert(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Sunnys</h1>
        <h2 className="subtitle">Your Health Care Company</h2>
        <form className="form" onSubmit={login}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
        <p className="footer-text">
          Don&apos;t have an account? <Link href="/signup">Signup</Link>
        </p>
        <p className="footer-text">
          Forgot your password? <Link href="/resetpassword">Reset Password</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
