// app/securehome/layout.jsx
import React from 'react';
import Footer from '../components/Footer.jsx';

import Navbar from '../components/Navbar.jsx';

export default function SecureHomeLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-[cornsilk] text-purple-900">
        {/* Sidebar */}
        <Navbar />

      {/* Main Content */}
      <main className="flex-grow p-6">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}