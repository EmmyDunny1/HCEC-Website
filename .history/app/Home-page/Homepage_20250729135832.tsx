import React from 'react'
import UpcomingPrograms from './Upcoming-Programs/page'

import Image from 'next/image'
import PrayerRequest from '../Contact-Us/Prayer-RequestForm/page'
import HeroSection from '../Focus-Section/page'
import Focus from '../Focus-Section/page'





export default function Homepage() {
  return (
    <div>
<Heropage

    <Focus/> 

   
    <UpcomingPrograms  />
    <div className='mt-[8rem] lg:mt-[5rem]'>
    <PrayerRequest />
    </div>  
    
    </div>
  )
  
}