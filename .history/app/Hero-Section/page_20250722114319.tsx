import React from 'react'

export default function HeroSection() {
  return (
     <div className="flex flex-col items-center p-6 gap-4">
      {/* Top Text Box */}
      <div className="bg-white shadow-md p-4 rounded-md z-10">
        <p className="text-center font-semibold">For Text</p>
      </div>

      {/* Image Background Section */}
      <div className="relative w-full max-w-md h-64 rounded-md overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/HeroSection.jp')" }}
        />

        {/* Gray Overlay */}
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>

        {/* Content on Image */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <p className="text-white text-lg font-bold">Image Background</p>
        </div>

        {/* Bottom Text Box */}
        <div className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 bg-white shadow-md p-3 rounded-md z-20">
          <p className="text-center font-semibold">For Text</p>
        </div>
      </div>
    </div>
  )
}
