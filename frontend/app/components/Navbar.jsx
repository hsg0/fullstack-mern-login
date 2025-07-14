'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/clear.png';

export default function Navbar() {
  const [authDropdown, setAuthDropdown] = useState(false);

  return (
    <header className="w-full bg-purple-700 text-[cornsilk] shadow-md px-6 py-4 z-50">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <Image src={logo} alt="logo" className="w-10 h-10" />
          <Link href="/" className="text-2xl font-bold hover:underline">sunnys.io</Link>
        </div>

        {/* Center: Nav Sections */}
        <nav className="flex gap-6 text-sm font-medium">
          <div className="relative group">
            <span className="cursor-pointer">Why sunnys.io</span>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-purple-600 text-[cornsilk] shadow rounded p-2">
              <Link href="#" className="block px-2 py-1 hover:underline">Our Mission</Link>
              <Link href="#" className="block px-2 py-1 hover:underline">Features</Link>
              <Link href="#" className="block px-2 py-1 hover:underline">Testimonials</Link>
            </div>
          </div>

          <div className="relative group">
            <span className="cursor-pointer">Help</span>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-purple-600 text-[cornsilk] shadow rounded p-2">
              <Link href="#" className="block px-2 py-1 hover:underline">Support Center</Link>
              <Link href="#" className="block px-2 py-1 hover:underline">FAQs</Link>
              <Link href="#" className="block px-2 py-1 hover:underline">Contact</Link>
            </div>
          </div>

          <div className="relative group">
            <span className="cursor-pointer">Company</span>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-purple-600 text-[cornsilk] shadow rounded p-2">
              <Link href="#" className="block px-2 py-1 hover:underline">About</Link>
              <Link href="#" className="block px-2 py-1 hover:underline">Careers</Link>
              <Link href="#" className="block px-2 py-1 hover:underline">Blog</Link>
            </div>
          </div>
        </nav>

        {/* Right: Auth */}
        <div className="relative">
          <button
            onClick={() => setAuthDropdown(!authDropdown)}
            className="font-semibold hover:underline"
          >
            Welcome ▾
          </button>
          {authDropdown && (
            <div className="absolute right-0 mt-2 bg-purple-600 text-[cornsilk] shadow rounded p-2">
              <Link href="/login" className="block px-2 py-1 hover:underline">Login</Link>
              <Link href="/logout" className="block px-2 py-1 hover:underline">Logout</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}