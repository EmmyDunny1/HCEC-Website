import React from 'react';

export default function Focus() {
  return (
    <div className="flex flex-col items-center">
      {/* Top Text Box */}
      <div className="bg-white shadow-xl drop-shadow-2xl p-4 rounded-md h-[13rem] w-[22rem] mb-[-7.5rem] z-10">
        <div> 
          <h1 className="text-center text-xl font-bold mb-4 p-2 border-b-2">OUR FOCUS</h1>
        <p className="text-center font-semibold">Kingdom of Heaven is our vision, self sacrifice is our watchward, holiness is our stand, divine prosperity is our reward</p>
          </div>
      </div>

      {/* Image Background Section */}
      <div className="relative w-full h-[25rem] mb-10 overflow-visible">
        {/* Background Image */}
        <div
          className="h-full w-full absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/HeroSection.jpg')" }}
        />

        {/* Gray Overlay */}
        <div className="absolute inset-0 bg-gray-900 opacity-70"></div>

        {/* Content on Image */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <p className="text-white text-lg font-bold">Image Background</p>
        </div>

        {/* Bottom Text Box */}
        <div className="absolute bottom-[-7.5rem] left-1/2 transform -translate-x-1/2 h-[15rem] w-[22rem] bg-white shadow-md p-3 rounded-md z-10">
         
         <div className='flex flex-col py-4 items-center'>
         <h1 className='text-center text-xl font-bold mb-4 p-2 border-b-2'>2025 ANCHOR</h1>
          <p className="text-center font-semibold">Let the word of my mouth and the meditation of my heart be acceptable in thy sight, O Lord, my Rock and my Redeemer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
