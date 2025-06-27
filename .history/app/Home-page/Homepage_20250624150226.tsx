import React from 'react'
import UpcomingPrograms from './Upcoming-Programs/page'
import PrayerRequests from './Prayer-Request/page'
import Image from 'next/image'





export default function Homepage() {
  return (
    <div className='bg-gradient-to-r from-[#0C101C] from-80%  to-red-500 px-10 py-[5rem]'>
 <Image src="/assets/HCEC_LOGO.png" width={80} height={48} alt="HCEC Logo" className="h-[3rem] w-[5rem] object-cover mb-5" />
  <p className='bg-gradient-to-r from-red-500 to-[#0C101C] justify-start text-xs md:text-md text-white p-4 my-5 max-w-[20rem] md:max-w-lg rounded-tr-3xl rounded-bl-3xl font-bold mb-[5rem]'>Matt 28:19
    
    Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit</p>

    <div className='h-20 w-20 green- '></div>
    
    <UpcomingPrograms />
    <PrayerRequests/>
    </div>
  )
  
}