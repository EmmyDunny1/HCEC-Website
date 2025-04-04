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
     },
   
        ]
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
       },

       { label: 'CHURCH RESOURCES',
        link: '#', 
        children: [
   { label: '',
     link: '#',  
   },
   { label: '',
       link: '#',  
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
   },
 
      ]
     },
   
        ]
       },
      
      ]
       },

]

export default function Navbar() {
  return (
    <div className='flex max-w-7xl w-full mx-auto text-sm bg-[#0C101C] text-white p-4 transition-all'>
<section className='flex my-auto transition-all justify-between items-center gap-20'>
    <Image src={HCEC_LOGO} alt="HCEC Logo" className="h-[2.5rem] w-[4rem] object-cover"/>
    <nav className='flex my-auto justify-between items-center gap-10'>
        {navItems.map((d, i) => (
        <Link 
        key={i}
        href={ d.link ?? "#"} className='group items-center transition-all relative'>
        <p className=' flex cursor-pointer hover:border-b-2 pb-4 border-pink-400'>
            <span className=''>{d.label}</span>
            {/* dropdown */}
             </p>
        <div className='flex-col absolute hidden rounded-lg justify-between top-10 right-0 group-hover:flex  bg-amber-50 text-black w-[rem] '>
                   {d.children?.map((ch, i) => (
                <a key={i} href={ch.link?? "#"} className='py-2 px-4 hover:text-pink-400'>
                   {ch.label}
                   </a>
                   ))}
  
        </div>
        </Link>
        ))}

    </nav>
</section>

    </div>
  )
}