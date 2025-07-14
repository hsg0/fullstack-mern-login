'use client';
import React from 'react';

const ResetPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[cornsilk]">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border-2 border-purple-500">
        <h1 className="text-3xl font-bold text-purple-700 mb-2 text-center">Reset Password</h1>
        <p className="text-sm text-gray-600 text-center mb-6">
          Enter your email to receive a reset link
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-purple-700 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-700 text-cornsilk py-2 rounded-md hover:bg-purple-800 transition"
          >
            Send Reset Link
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Remembered your password?{' '}
          <a href="/" className="text-purple-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;