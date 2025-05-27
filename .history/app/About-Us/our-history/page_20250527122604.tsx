'use client'

import React from 'react';
import Image from 'next/image';

export default function OurHistory() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f3f4f6]">
      {/* History Section */}
      <div className="flex-1 flex justify-center items-start py-12 px-4 md:px-12">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
          <h1 className="text-4xl font-bold mb-6 text-[#0C101C] text-center">OUR HISTORY</h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi. 
            Mauris euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi. 
            Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi. 
            Mauris euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi. 
            <br /><br />
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            <br /><br />
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
            <br /><br />
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
        </div>
      </div>
      {/* Fixed Image Section */}
      <div className="relative w-full md:w-[400px] flex-shrink-0">
        <div className="md:fixed md:top-0 md:right-0 md:h-screen md:w-[400px] flex flex-col items-center justify-center bg-white shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-2 text-[#0C101C] text-center">Rev Samson Adebayo Ogundeji</h2>
          <h3 className="text-lg font-semibold mb-4 text-gray-600 text-center">Founder and First General Overseer</h3>
          <div className="w-full h-[350px] relative mb-2">
            <Image
              src="/assets/HCEC_LOGO.png" // Replace with actual image path
              alt="Rev Samson Adebayo Ogundeji"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}