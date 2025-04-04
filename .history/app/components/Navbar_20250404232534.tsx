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

    Console Error


    In HTML, <a> cannot be a descendant of <a>.
    This will cause a hydration error.
    
    See more info here: https://nextjs.org/docs/messages/react-hydration-error
    
    
    ...
        <ErrorBoundary errorComponent={undefined} errorStyles={undefined} errorScripts={undefined}>
          <LoadingBoundary loading={null}>
            <HTTPAccessFallbackBoundary notFound={[...]} forbidden={undefined} unauthorized={undefined}>
              <HTTPAccessFallbackErrorBoundary pathname="/" notFound={[...]} forbidden={undefined} unauthorized={undefined} ...>
                <RedirectBoundary>
                  <RedirectErrorBoundary router={{...}}>
                    <InnerLayoutRouter url="/" tree={[...]} cacheNode={{lazyData:null, ...}} segmentPath={[...]}>
                      <Home>
                        <div className="justify-ce...">
                          <Navbar>
                            <div className="flex max-w...">
                              <section className="flex my-au...">
                                <img>
                                <nav className="flex my-au...">
                                  <LinkComponent href="#" className="group item...">
    >                               <a
    >                                 className="group items-center transition-all relative"
    >                                 ref={function}
    >                                 onClick={function onClick}
    >                                 onMouseEnter={function onMouseEnter}
    >                                 onTouchStart={function onTouchStart}
    >                                 href="#"
    >                               >
                                      <p>
                                      <div className={"flex-col..."}>
                                        <LinkComponent href="#" className="py-2 px-4 ...">
    >                                     <a
    >                                       className="py-2 px-4 hover:text-pink-400"
    >                                       ref={function}
    >                                       onClick={function onClick}
    >                                       onMouseEnter={function onMouseEnter}
    >                                       onTouchStart={function onTouchStart}
    >                                       href="#"
    >                                     >
                                        ...
                                  ...
                      ...
    Call Stack
    21
    
    Show 14 ignore-listed frame(s)
    a
    <anonymous> (0:0)
    <unknown>
    .next\static\chunks\app_178fb4a7._.js (123:274)
    Array.map
    <anonymous> (0:0)
    <unknown>
    .next\static\chunks\app_178fb4a7._.js (123:59)
    Array.map
    <anonymous> (0:0)
    Navbar
    .next\static\chunks\app_178fb4a7._.js (102:40)
    Home
    rsc:/Server/C:%5CUsers%5CUSER%5CDesktop%5CHCEC%5Chcec-website%5C.next%5Cserver%5Cchunks%5Cssr%5C_e7c73343._.js (73:270)
    


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