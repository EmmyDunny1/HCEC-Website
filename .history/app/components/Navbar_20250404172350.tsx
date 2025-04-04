"use client"

import React from 'react'
import HCEC_LOGO from '../assets/HCEC_LOGO.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='flex max-w-7xl w-full mx-auto text-sm bg-[#0C101C] text-white p-4 transition-all border-b-'>
<section className='flex  transition-all justify-between items-center gap-20'>
    <Image src={HCEC_LOGO} alt="HCEC Logo" className="h-[2.5rem] w-[4rem] object-cover"/>
    <nav className='flex gap-4 my-auto'>
        <Link href={""} className='group items-center transition-all'>
        <p className=' flex cursor-pointer hover:border-b-2 pb-4 border-pink-400'>
            <span className=''>Home</span>
            {/* dropdown */}
             </p>
        <div className='flex-col absolute gap-1 top-10 right-0'></div>
        </Link>

    </nav>
</section>

    </div>
  )
}