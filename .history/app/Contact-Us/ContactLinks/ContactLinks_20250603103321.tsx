'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import {  FaArrowLeft, FaPhoneAlt, FaCommentDots } from "react-icons/fa";

const contactNavLinks = [
  { label: "Home", link: "/Contact-Us/Home" },
  { label: "Our Locations", link: "/Contact-Us/Our-Locations" },
  { label: "Prayer Request", link: "/Home-page/Prayer-Request" },
  { label: "Testimony", link: "/Contact-Us/Testimony" },
  { label: "Contact Us", link: "/Contact-Us" },
];

export default function ContactLinks() {
  const pathname = usePathname();

  return (
    <nav className="w-full fixed top-0 z-10 shadow-white bg-[#0C101C]/50 py-4 px-2">
      <div className="flex items-center justify-between mb-2">
        {/* Back to homepage icon (left) */}
        <Link href="/" className="text-white hover:text-red-400 flex items-center">
          <FaArrowLeft className="text-2xl" />
        </Link>
        {/* Chat/Call icon and phone (right) */}
        <a
          href="tel:+2348012345678"
          className="text-white hover:text-green-400 flex items-center gap-2"
        >
          <FaCommentDots className="text-xl" />
          <FaPhoneAlt className="text-xl" />
          <span className="hidden md:inline text-sm font-semibold">+234 801 234 5678</span>
        </a>
      <Bi
      </div>
      <ul className="flex flex-col md:flex-row gap-2 md:gap-8 justify-center items-center mt-2">
        {contactNavLinks.map((item) => (
          <li key={item.label} className="w-full md:w-auto">
            <Link
              href={item.link}
              className={`block text-white font-semibold px-3 py-2 rounded transition text-center
                ${pathname === item.link ? "bg-red-500 text-white shadow" : "hover:bg-red-500/50 hover:text-white"}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}