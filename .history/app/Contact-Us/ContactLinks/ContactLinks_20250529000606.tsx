import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowLeft, FaPhoneAlt, FaCommentDots, FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const contactNavLinks = [
  { label: "Home", link: "/" },
  { label: "Our Locations", link: "/Contact-Us/Our-Locations" },
  { label: "Prayer Request", link: "/Home-page/Prayer-Request" },
  { label: "Testimony", link: "/Contact-Us/Testimony" },
  { label: "Contact Us", link: "/Contact-Us" },
];

export default function ContactLinks() {
  const pathname = usePathname();

  return (
    <>
      <nav className="w-full fixed top-0 z-10 shadow-white bg-[#0C101C]/50 py-4 px-2">
        <div className="flex items-center justify-between mb-[-1.5rem]">
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
        </div>
        <ul className="flex gap-6 md:gap-8 justify-center">
          {contactNavLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.link}
                className={`text-white font-semibold px-3 py-4 transition 
                  ${pathname === item.link ? "border-b-2 border-red-500 text-white shadow" : "hover:bg-red-500/50 hover:text-white"}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Fixed Bottom Bar */}
      <div className="fixed  left-0 w-full z-10">
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
    </>
  );
}