import React from 'react';
import Image from 'next/image';
import logo from '../../public/clear.png';

export default function Footer() {
  return (
    <footer className="bg-cornsilk text-purple-900 py-12 px-6 border-t border-purple-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
        
        {/* Left: Logo & Note */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3">
            <Image src={logo} alt="sunnys.io logo" width={40} height={40} className="rounded-full" />
            <span className="text-2xl font-semibold text-purple-800">sunnys.io</span>
          </div>
          <p className="text-sm text-purple-700 max-w-sm leading-relaxed">
            Sunnys is your trusted healthcare companion. All features require account verification. 
            Read our terms and privacy policy for more details.
          </p>
        </div>

        {/* Right: Link Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 flex-1 text-sm">
          
          <div>
            <h4 className="font-bold mb-3 text-purple-800">Products</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Appointments</a></li>
              <li><a href="#" className="hover:underline">Reminders</a></li>
              <li><a href="#" className="hover:underline">Reports</a></li>
              <li><a href="#" className="hover:underline">Care Plans</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-purple-800">Plans</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Free</a></li>
              <li><a href="#" className="hover:underline">Pro</a></li>
              <li><a href="#" className="hover:underline">Enterprise</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-purple-800">Company</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-purple-800">Help</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Support Center</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-purple-800">Legal</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Security</a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}