import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component
import Convention from '../assets/Convention.jpg';

export default function UpcomingPrograms() {
  return (
    <div className='text-white'>
      <div className='flex justify-center items-center mx-auto'>
        <h1 className='uppercase text-center text-7xl md:text-4xl font-bold mb-[4rem]'>our upcoming programs</h1>
      </div>
      <div className='flex flex-col md:flex-row justify-center mx-auto items-center'>
        {/* Program description */}
        <div className=' p-5 m-5 w-full md:w-1/3'>
          <h2 className='text-center justify-center text-4xl md:text-6xl font-bold items-center'>Great Annual <span className='text-yellow-400'>Convention</span> 2025</h2>
        </div>
        {/* Convention flier */}
        /
        </div>
      </div>
    </div>
  );
}