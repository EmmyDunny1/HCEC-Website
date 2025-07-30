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
    <nav className="w-full fixed justify-center top-0 z-50 bg-[#0C101C] md:bg-[#0C101C]/50 md:h-[6rem] py-4 px-4 shadow-md">
      {/* Top bar: Back (left), Call (center on md), Toggle (right) */}
      <div className="flex items-center justify-between mb-2">
        {/* Back Icon (top-left) */}
        <Link
          href="/"
          className="text-white hover:text-red-400 flex items-center"
        >
          <FaArrowLeft className="text-2xl" />
        </Link>

        {/* Contact Info (center/right on md only) */}
        <a
          href="tel:+2348012345678"
          className="text-white hover:text-green-400 hidden md:flex items-center gap-2"
        >
          <FaCommentDots className="text-xl" />
          <FaPhoneAlt className="text-xl" />
          <span className="text-sm font-semibold">+234 801 234 5678</span>
        </a>

        {/* Mobile Toggle (top-right) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl"
          aria-label="Toggle Menu"
        >
          {openMenu ? <RiCloseLine /> : <BiMenuAltRight />}
        </button>
      </div>

      {/* Nav Links (always left-aligned) */}
      <ul
        className={`transition-all duration-300 ease-in-out overflow-hidden flex flex-col md:flex-row gap-2 md:gap-6
          ${openMenu ? "max-h-[500px] pb-4" : "max-h-0 md:max-h-none"}
          ${openMenu ? "visible" : "invisible md:visible"} 
          md:flex md:items-center md:justify-start
        `}
      >
        {contactNavLinks.map((item) => (
          <li key={item.label} className="w-full md:w-auto">
            <Link
              href={item.link}
              className={`block text-white font-semibold px-3 py-2 text-left transition 
                ${pathname === item.link
                  ? "bg-red-500"
                  : "hover:bg-red-500 hover:text-white"}`}
              onClick={() => setMenuOpen(false)} // Auto-close mobile menu
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
