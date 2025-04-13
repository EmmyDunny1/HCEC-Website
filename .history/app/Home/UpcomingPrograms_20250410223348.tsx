import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import Convention from '../assets/Convention.jpg';

export default function UpcomingPrograms() {
  return (
    <div className='text-white justify-center'>
      <div className='flex justify-center items-center mx-auto'>
        <h1 className='uppercase text-center'>our upcoming programs</h1>
      </div>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        {/* Program description */}
        <div className='bg-[#0C101C] rounded-lg p-5 m-5 w-full md:w-1/3'>
          <h2 className='text-xl'>Our Great Annual Convention 2025</h2>
        </div>
        {/* Convention flier */}
        <div className='rounded-lg p-5 m-5 w-full md:w-2/3'>
          <Image
            src={Convention}
            alt="Convention"
            className='w-[15rem] h-'
           
          />
        </div>
      </div>
    </div>
  );
}