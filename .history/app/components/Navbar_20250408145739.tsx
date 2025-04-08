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
    { label: 'HOME',
     link: '#', 
     children: [
{ label: 'Upcoming Events',
  link: '#', 
},
{ label: 'Prayer Requests',
    link: '#',  
  },
  { label: 'Our Beliefs',
    link: '#',  
  },

     ]
    },

    { label: 'ABOUT US',
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
     }, ]
       },


       { label: 'MEDIA RESOURCES',
        link: '#', 
        children: [
   { label: 'Audio Resources',
     link: '#',  
   },
   { label: 'Video Resources',
       link: '#',  
     },
     { label: 'Photo Resources',
       link: '#',
       },]
      },


       { label: 'CHURCH RESOURCES',
        link: '#', 
        children: [
   { label: '',
     link: '#',  
   },
   { label: '',
       link: '#',  
     },]
      },
  
        
     { label: 'CONTACT US',
      link: '#', 
      children: [
 { label: 'Our History',
   link: '#',  
 },
]
     },
   
        ]
      

export default function Navbar() {
  return (

    <div className='bg-[#]'>
    <div className='flex max-w-7xl w-full mx-auto  text-white p-4 transition-all border-b-1 rounded-b-4xl  shadow-2xl border-red-500  hover:border-0 '>
      <section className='flex transition-all justify-between my-auto gap-[25rem]'>
        <Image src={HCEC_LOGO} alt="HCEC Logo" className="h-[3rem] w-[5rem] object-cover" />
        <nav className='text-[10px] flex justify-between items-center gap-10'>
          {navItems.map((d, i) => (
            <div key={i} className='group relative'>
              <Link href={d.link ?? "#"} className='group items-center transition-all relative'>
                <p className='flex cursor-pointer'>
                  <span className='font-semibold'>{d.label}</span>
                </p>
              </Link>
              {/* Dropdown */}
              {d.children && (
                <div className='dropdown cursor-pointer absolute hidden group-hover:flex flex-col px-[2rem] top-10 bg-amber-50 text-black w-[13rem] transition-all text-[12px] border-t-4 border-red-500 outline-t-red-500'>
                  {d.children.map((ch, j) => (
                    <a key={j} href={ch.link ?? "#"} className='py-2 px-4 hover:text-red-500'>
                      {ch.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </section>
    </div>
    </div>
  )
}