'use client'

import React from 'react';
import Image from 'next/image'

export default function OurHistory() {
  return (
    <div>
      <div className="flex flex-row items-center justify-center gap-4 bg-[#0C101C] text-white p-4 ">
        <div>
          <Image src= alt="HCEC Logo" className="h-[3rem] w-[5rem] object-cover" />
        </div>
        <h1>OUR HISTORY</h1>
        <p></p>
      </div>
    </div>
  );
}