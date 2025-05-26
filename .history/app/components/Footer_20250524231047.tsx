import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0C101C] text-white py-10">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-8 text-center">
        {/* Logo and Socials */}
        <div className="flex flex-col items-center">
         <a href="#"><Image
            src="/assets/HCEC_LOGO.png"
            alt="HCEC Logo"
            width={120}
            height={60}
            className="mb-4"
          /></a>
          
          <div>
            <p className="font-semibold mb-4">Follow Us</p>
            <div className="flex justify-center space-x-4 text-xl transition- duration-1000">
              <a href="#" aria-label="Facebook" className="hover:text-blue-400 hover:border-2 rounded-md hover:p-1"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter" className="hover:text-blue-400 hover:border-2 rounded-md hover:p-1"><FaTwitter /></a>
              <a href="#" aria-label="Instagram" className="hover:text-pink-400 hover:border-2 rounded-md hover:p-1 hover:border-red-500"><FaInstagram /></a>
              <a href="#" aria-label="YouTube" className="hover:text-red-500 hover:border-b-2 hover:border-2 rounded-md hover:p-1 hover:border-red-500"><FaYoutube /></a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-8 ">
          <p className="text-md">
            © {new Date().getFullYear()} His Coming Evangelical Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}