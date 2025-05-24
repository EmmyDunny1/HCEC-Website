import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0A1F44] text-white py-10 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Address/Contact */}
        <div>
          <h3 className="font-bold text-lg mb-2">Contact Us</h3>
          <p>His Coming Evangelical Church</p>
          <p>123 Church Street, Ibadan, Nigeria</p>
          <p>Email: info@hcec.org</p>
          <p>Phone: +234 803 501 2113</p>
        </div>
        {/* Quick Links */}
        <div cl>
          <h3 className="font-bold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/" className="hover:text-gray-300">About Us</a></li>
            <li><a href="/" className="hover:text-gray-300">Programs</a></li>
            <li><a href="/app" className="hover:text-gray-300">Media</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
        {/* Social Media */}
        <div>
          <h3 className="font-bold text-lg mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 text-xl mt-2">
            <a href="#" aria-label="Facebook" className="hover:text-blue-400"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-300"><FaTwitter /></a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-400"><FaInstagram /></a>
            <a href="#" aria-label="YouTube" className="hover:text-red-500"><FaYoutube /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} His Coming Evangelical Church. All rights reserved.
      </div>
    </footer>
  );
}