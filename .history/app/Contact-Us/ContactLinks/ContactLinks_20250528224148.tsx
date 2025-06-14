import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

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
    <nav className="w-full bg-[#0C101C] border-b-1 border-white shadow-md py-4 px-2 flex flex-col">
      <div className="flex items-center mb-2">
        <Link
          href="/"
          className="flex items-center text-white hover:text-red-400 font-semibold gap-2"
        >
          <FaArrowLeft className="text-lg" />
          <span className="hidden md:inline">Back to Homepage</span>
        </Link>
      </div>
      <ul className="flex gap-6 md:gap-10 justify-center">
        {contactNavLinks.map((item) => (
          <li key={item.label}>
            <Link
              href={item.link}
              className={`text-white font-semibold px-3 py-2 rounded transition 
                ${
                  pathname === item.link
                    ? "bg-red-500 text-white shadow"
                    : "hover:bg-red-500/80 hover:text-white"
                }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}