import React from 'react'
import Convention from '../assets/Convention.jpg'

export default function UpcomingPrograms() {
  return (
    <div className='text-white justify-center'>
      
        <h1 className='uppercase mx-auto  '>our upcoming programs</h1>
      
      <div className='flex flex-col md:flex-row justify-between items-center'>
        {/* Program description */}
        <div className='bg-[#0C101C] rounded-lg p-5 m-5'>
          <h2 className='text-xl'>Our Great Annual Convention 2025</h2>

        </div>
        {/* convention flier */}
        <div className=' rounded-lg p-5 m-5'>
        <img src={Convention} alt="Convention" className='w-[10rem] h-[12rem] ' />
        </div>

    </div>
    </div>
  )
}