"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";

type NavItem = {
  label: string;
  link: string;
};

type NavbarProps = {
  logoSrc?: string;
  churchName?: string;
  navItems: NavItem[];
};

export default function Navbar({ logoSrc = "/assets/HCEC_LOGO.png", churchName = "His Coming Evangelical Church", navItems }: NavbarProps) {
  return (
    <div className="bg-[#0C101C]">
      <div className="fixed top-0 bg-gradient-to-r from-[#0C101C] to-red-500 flex max-w-7xl w-full mx-auto text-white p-4 transition-all border-b-1 rounded-b-4xl shadow-2xl hover:border-0">
        <section className="flex transition-all justify-between my-auto items-center gap-10 w-full">
          <div className="flex items-center gap-2">
            <Image src={logoSrc} width={80} height={48} alt="HCEC Logo" className="h-[3rem] w-[5rem] object-cover" />
            <span className="font-bold text-lg">{churchName}</span>
          </div>
          <nav className="text-[14px] hidden md:flex justify-between items-center gap-10">
            {navItems.map((item, i) => (
              <Link key={i} href={item.link} className="font-semibold hover:text-yellow-400 transition">
                {item.label}
              </Link>
            ))}
          </nav>
          <BiMenuAltRight className="text-2xl md:hidden justify-end" />
        </section>
      </div>
    </div>
  );
}