import React from 'react'
import Convention from '../assets/Convention.jpg'

export default function UpcomingPrograms() {
  return (
    <div className='text-white '>
      <div>
        <h1 className='uppercase items-center not-only:'>our upcoming programs</h1>
      </div>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        {/* Program description */}
        <div className='bg-[#0C101C] rounded-lg p-5 m-5'>
          <h2 className='text-xl'>Program 1</h2>

        </div>
        <img src={Convention} alt="convention_flier w-[] " />
        <div className='bg-[#0C101C] rounded-lg p-5 m-5'>
          
        </div>

    </div>
    </div>
  )
}