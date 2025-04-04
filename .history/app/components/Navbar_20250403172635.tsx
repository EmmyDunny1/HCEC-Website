"use client"

import React from 'react'
import HCEC_LOGO from '../assets/HCEC_LOGO.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='flex max-w-7xl w-full mx-auto text-sm justify-between items-center bg-[#0C101C] text-white p-4 transition-all'>
<section className='flex justify-between transition-all gap-4'>
    <Image src={HCEC_LOGO} alt="HCEC Logo" className="h-[2.5rem] w-[4rem] object-cover"/>
    <nav className='flex gap-4'>
        <Link href={""} className='group items-center transition-all'>
        <p className=' flex cursor-pointer '>
            <span>Home</span>
            



        </p>
        </Link>

    </nav>
</section>

    </div>
  )
}