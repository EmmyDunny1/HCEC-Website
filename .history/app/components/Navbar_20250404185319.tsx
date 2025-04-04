"use client"

import React from 'react'
import HCEC_LOGO from '../assets/HCEC_LOGO.png'
import Image from 'next/image'
import Link from 'next/link'

type NavItem = {
    label?: string;
    link?: string;
    children?: NavItem[];
}

const navItems: NavItem[] = [
    { label: 'Upcoming Ev',
     link: '#', 
     children: [
{ label: 'Our History',
  link: '#',  
},
{ label: 'Mission and Vision',
    link: '#',  
  },
  { label: 'Our Beliefs',
    link: '#',  
  },

     ]
    },

    { label: 'Home',
        link: '#', 
        children: [
   { label: 'Our History',
     link: '#',  
   },
   { label: 'Mission and Vision',
       link: '#',  
     },
     { label: 'Our Beliefs',
       link: '#',  
     },
   
        ]
       },


]

export default function Navbar() {
  return (
    <div className='flex max-w-7xl w-full mx-auto text-sm bg-[#0C101C] text-white p-4 transition-all'>
<section className='flex my-auto transition-all justify-between items-center gap-20'>
    <Image src={HCEC_LOGO} alt="HCEC Logo" className="h-[2.5rem] w-[4rem] object-cover"/>
    <nav className='flex my-auto'>
        <Link href={""} className='group items-center transition-all relative'>
        <p className=' flex cursor-pointer hover:border-b-2 pb-4 border-pink-400'>
            <span className=''>Home</span>
            {/* dropdown */}
             </p>
        <div className='flex-col absolute hidden w-auto rounded-lg gap-1 top-10 right-0 group-hover:flex'>Heloooooo</div>
        </Link>

    </nav>
</section>

    </div>
  )
}