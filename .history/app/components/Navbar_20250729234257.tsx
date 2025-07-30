"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";

type NavItem = {
  label?: string;
  link?: string;
  children?: NavItem[];
};

type NavbarProps = {
  navItems?: NavItem[];
  churchName?: string;
};

const defaultNavItems: NavItem[] = [
  { label: "HOME", link: "#", children: [{ label: "Upcoming Events", link: "Home-page/Upcoming-Programs" }, { label: "Prayer Requests", link: "Home-page/Prayer-Request" }] },
  { label: "ABOUT US", link: "#", children: [{ label: "Our History", link: "About-Us/our-history" }, { label: "Mission and Vision", link: "About-Us/mission-and-vision" }, { label: "Our Beliefs", link: "About-Us/our-beliefs" }] },
  { label: "MEDIA RESOURCES", link: "#", children: [{ label: "Our Audio & Video Resources", link: "/Media-Resources" },] },
  { label: "CHURCH RESOURCES", link: "#", children: [{ label: "Gospel Hymnal", link: "#" }, { label: "Honey From The Rock", link: "#" }, { label: "Daily Honey", link: "#" }] },
  { label: "CONTACT US", link: "/Contact-Us/Home" },
];

export default function Navbar({


  navItems = defaultNavItems,
  churchName = "His Coming Evangelical Church",
}: NavbarProps): React.JSX.Element {

  const [menuOpen, setMenuOpen] = useState(false);
  const togglemenu =( =>)

  return (
    <div className="bg-[#0C101C]">
      <div className="fixed top-0  bg-red-800 flex max-w-7xl w-full mx-auto text-white p-4 transition-all border-b-1  shadow-2xl hover:border-0 z-50">
        <section className="flex transition-all my-auto items-center gap-[19.5rem] md:gap-[0rem]">
          <Image src="/assets/HCEC_LOGO.png" width={80} height={48} alt="HCEC Logo" className="h-[3rem] w-[5rem] object-cover" />
          <span className="hidden md:inline font-bold text-lg uppercase ">
  {churchName.split("Evangelical")[0]}
  <br />
  Evangelical{churchName.split("Evangelical")[1] || ""}
</span>
          <nav className="text-[10px] hidden md:flex md:ml-[12rem] justify-between items-center gap-10">
            {navItems.map((d, i) => (
              <div key={i} className="group relative">
                <Link href={d.link ?? "#"} className="group items-center transition-all relative">
                  <p className="flex cursor-pointer">
                    <span className="font-semibold">{d.label}</span>
                  </p>
                </Link>
                {/* Dropdown */}
                {d.children && (
                  <div className="absolute flex flex-col justify-center left-1/2 transform -translate-x-1/2 top-10 bg-amber-50 text-black w-[11rem] transition-all text-[12px] border-t-4 border-red-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                    {d.children.map((ch, j) => (
                      <a key={j} href={ch.link ?? "#"} className="py-2 px-4 hover:bg-red-500 hover:text-white">
                        {ch.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <BiMenuAltRight className="text-2xl md:hidden justify-end" />
        </section>
      </div>
    </div>
  );
}