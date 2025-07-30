'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiMenuAltRight } from "react-icons/bi";
import { FaArrowLeft, FaPhoneAlt, FaCommentDots } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { useState } from "react";

const contactNavLinks = [
  { label: "Home", link: "/Contact-Us/Home" },
  { label: "Our Locations", link: "/Contact-Us/Our-Locations" },
  { label: "Prayer Request", link: "/Contact-Us/Prayer-RequestPage" },
  { label: "Testimony", link: "/Contact-Us/Testimony" },
  { label: "Contact Us", link: "/Contact-Us/Get-In-Touch" },
];

export default function ContactLinks() {
  const pathname = usePathname();
  const [openMenu, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!openMenu);
  };

  return (
    <nav className="w-full fixed top-0 z-50 bg-[#0C101C]  md:bg-[#0C101C]/50 h-full md:h-[6rem] py-4 px-2 shadow-md">
      {/* Top bar: Back, Title, Toggle, Contact */}
      <div className="flex items-center justify-between mb-2">
        {/* Back Icon (left) */}
        <Link
          href="/"
          className="text-white hover:text-red-400 flex items-center"
        >
          <FaArrowLeft className="text-2xl" />
        </Link>

        {/* Call & Chat Section (middle/right on md) */}
        <a
          href="tel:+2348012345678"
          className="text-white hover:text-green-400 hidden md:flex items-center gap-2"
        >
          <FaCommentDots className="text-xl" />
          <FaPhoneAlt className="text-xl" />
          <span className="text-sm font-semibold">+234 801 234 5678</span>
        </a>

        {/* Toggle Button (right, visible only on mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl"
          aria-label="Toggle Menu"
        >
          {openMenu ? <RiCloseLine /> : <BiMenuAltRight />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`flex flex-col md:flex-row gap-2 md:gap-8 justify-center items-center transition-all duration-300 ease-in-out overflow-hidden 
        ${openMenu ? "max-h-[500px]" : "max-h-0 md:max-h-none"} 
        ${openMenu || "md:flex"}`}
      >
        {contactNavLinks.map((item) => (
          <li key={item.label} className="w-full md:w-auto">
            <Link
              href={item.link}
              className={`block text-white font-semibold px-3 py-2 text-center transition 
                ${pathname === item.link
                  ? "bg-red-500"
                  : "hover:bg-red-500 hover:text-white"}`}
              onClick={() => setMenuOpen(false)} // Auto-close on click (mobile)
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
