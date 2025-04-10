import React from 'react'
import UpcomingPrograms from './UpcomingPrograms'




export default function Homepage() {
  return (
    <div className='bg-gradient-to-r from-[#0C101C] via-[#0C101C] to-red-500 px-10 py-[5rem]
    '>
  <div className=' text-6xl md:text-9xl text-white font-bold mx-auto leading-[4rem] md:leading-[9rem] mt-5
   md:justify-start justify-center'>His Coming <br /> <span className='text-red-500 border-b-white border-2 rounded-3xl p-0'>Evangelical</span> Church Int'Inc </div>
  <p className='text-red-500 justify-start text-xs md:text-md bg-white/90  p-4 my-5 max-w-[20rem] md:max-w-lg rounded-tr-3xl rounded-bl-3xl font-bold mb-[5rem]'>Matt 28:19
    
    "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit,"</p>
    
    <UpcomingPrograms />
    </div>
  )
  
}