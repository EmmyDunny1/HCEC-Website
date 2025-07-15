import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

type Props = object;

export default function ContactFooter({}) {
  return (
    <div className="fixed bottom-0 left-0 w-full z-10">
      <div className="flex justify-between items-center bg-[#0C101C]/90 px-6 py-3">
        {/* Socials - bottom left */}
        <div className="flex items-center gap-3 text-white">
          <span className="font-semibold">Follow us:</span>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
            <FaInstagram />
          </a>
        </div>
        {/* Location - bottom right */}
        <div className="flex items-center gap-2 text-white">
          <FaMapMarkerAlt className="text-lg text-red-400" />
          <span className="text-sm font-semibold">123 Church Avenue, City, Country</span>
        </div>
      </div>
    </div>
  );
}