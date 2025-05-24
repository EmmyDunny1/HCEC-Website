import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0A1F44] text-white py-10 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Logo and Socials */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/assets/HCEC_LOGO.png"
            alt="HCEC Logo"
            width={120}
            height={60}
            className="mb-4"
          />
          <div>
            <p className="font-semibold mb-2">Follow us on:</p>
            <div className="flex space-x-4 text-xl">
              <a href="#" aria-label="Facebook" className="hover:text-blue-400"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter" className="hover:text-blue-300"><FaTwitter /></a>
              <a href="#" aria-label="Instagram" className="hover:text-pink-400"><FaInstagram /></a>
              <a href="#" aria-label="YouTube" className="hover:text-red-500"><FaYoutube /></a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center md:text-right mt-8 md:mt-0">
          <p className="text-sm">
            © {new Date().getFullYear()} His Coming Evangelical Church. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}