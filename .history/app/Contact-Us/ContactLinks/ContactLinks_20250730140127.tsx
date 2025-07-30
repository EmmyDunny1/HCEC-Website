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
    <nav className="w-full fixed top-0 z-50 bg-[#0C101C] md:bg-[#0C101C]/50 md:h-auto py-4 px-4 shadow-md">
      {/* Top bar: Back, Toggle, Phone */}
      <div className="flex items-center justify-between mb-2 relative z-50">
        <Link href="/" className="text-white hover:text-red-400 flex items-center">
          <FaArrowLeft className="text-2xl" />
        </Link>

        <a
          href="tel:+2348012345678"
          className="text-white hover:text-green-400 hidden md:flex items-center gap-2"
        >
          <FaCommentDots className="text-xl" />
          <FaPhoneAlt className="text-xl" />
          <span className="text-sm font-semibold">+234 801 234 5678</span>
        </a>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl"
          aria-label="Toggle Menu"
        >
          {openMenu ? <RiCloseLine /> : <BiMenuAltRight />}
        </button>
      </div>

      {/* Mobile Fullscreen Dropdown */}
      {openMenu && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#0C101C] flex flex-col justify-center items-center z-40 transition-all">
          <ul className="flex flex-col gap-6">
            {contactNavLinks.map((item) => (
              <li key={item.label} className="text-center">
                <Link
                  href={item.link}
                  onClick={() => setMenuOpen(false)} // Close after click
                  className={`block text-white font-semibold text-lg px-4 py-2 rounded-md transition 
                    ${pathname === item.link
                      ? "bg-red-500"
                      : "hover:bg-red-500 hover:text-white"}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Desktop Centered Nav Links */}
      <div className="hidden md:flex justify-center items-center mt-2">
        <ul className="flex gap-8">
          {contactNavLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.link}
                className={`text-white font-semibold px-4 py-2 rounded-md transition 
                  ${pathname === item.link
                    ? "bg-red-500"
                    : "hover:bg-red-500 hover:text-white"}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
