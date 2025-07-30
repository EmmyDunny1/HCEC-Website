'use client'
import React from 'react'

export default function Heropage() {
  return (
     <section className="relative w-full h-screen ">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/9 z-10" />

      {/* Text Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-6 text-center">
        <div className="text-white max-w-3xl">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            Welcome to His Coming Evangelical Church
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            A place of holiness, sacrifice, and divine prosperity.
          </p>
          <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded text-white font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
