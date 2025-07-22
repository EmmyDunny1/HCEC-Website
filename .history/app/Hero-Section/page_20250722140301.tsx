import React from 'react';

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center">
      {/* Top Text Box */}
      <div className="bg-white/90 shadow-xl p-4 rounded-md h-[15rem] w-[25rem] mb-[-7.5rem] z-10">
        <p className="text-center font-semibold">For Text</p>
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
        <div className="absolute bottom-[-7.5rem] left-1/2 transform -translate-x-1/2 h-[15rem] w-[25rem] bg-white/90 shadow-md p-3 rounded-md z-10">
          <p className="text-center font-semibold">Let the word of my mouth and the meditation of my heart be acceptable in thy sight, O Lord, My Rock and</p>
        </div>
      </div>
    </div>
  );
}
