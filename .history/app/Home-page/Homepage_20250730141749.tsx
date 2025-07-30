import React from 'react'
import UpcomingPrograms from './Upcoming-Programs/page'


import PrayerRequest from '../Contact-Us/Prayer-RequestForm/page'

import Focus from '../Focus-Section/page'
import Heropage from './HeroPage/page'





export default function Homepage() {
  return (
    <div>
<Heropage/>

    <Focus/> 

   
    <UpcomingPrograms  />
    <div className='mt-[8rem] lg:mt-[5rem]'>
    <PrayerRequest />
    </div>  
    
    </div>
  )
  
}