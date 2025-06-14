'use client'

import React from 'react';
import Image from 'next/image';

export default function OurHistory() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f3f4f6]">
      {/* History Section */}
      <div className="flex-1 flex justify-center items-start py-12 px-4 md:px-12">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl border-l-2 border-red-500">
          <div className="flex flex-col items-center justify-center mb-6 gap-2">
            <Image
              src="/assets/HCEC_LOGO.png"
              alt="HCEC Logo"
              width={90}
              height={60}
              className="object-contain mb-1"
            />
            <h1 className="text-4xl font-bold text-[#0C101C] text-center">OUR HISTORY</h1>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
           
          </p>
        </div>
      </div>
      {/* Fixed Image Section */}
      <div className="relative w-full md:w-[400px] flex-shrink-0">
        <div className="md:fixed md:top-7 md:bottom-7 rounded-lg md:right-0 md:w-[400px] flex flex-col items-center justify-center bg-white shadow-lg p-6">
          <div className="w-full h-[300px] relative mb-4 mt-6 rounded-lg overflow-hidden">
            <Image
              src="/assets/late-founder.jpg"
              alt="Rev Samson Adebayo Ogundeji"
              fill
              style={{ objectFit: "contain", objectPosition: "top" }}
              className="rounded-lg"
            />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-red-500 text-center">Rev Samson Adebayo Ogundeji</h2>
          <h3 className="text-lg font-semibold mb-4 text-gray-600 text-center">Founder and First General Overseer</h3>
        </div>
      </div>
    </div>
  );
}