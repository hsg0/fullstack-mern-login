'use client';
import React from 'react';
import useAuthCheck from '../../utils/checkAuth.js';

export default function SecureHomePage() {
  useAuthCheck(); // redirects to "/" if not logged in

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-purple-800">Welcome to Secure Home</h1>
    </div>
  );
}