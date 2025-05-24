import React from 'react'



export default function Footer() {
  return (
    <div>// Place this at the bottom of your page or layout file

<footer className="bg-[#0A1F44] text-white py-6 mt-10">
  <div className="container mx-auto px-4 text-center">
    <p className="text-sm">
      © {new Date().getFullYear()} His Coming Evangelical Church. All rights reserved.
    </p>
    <div className="flex justify-center mt-4 space-x-4">
      <a href="#" className="hover:text-gray-300">Privacy Policy</a>
      <a href="#" className="hover:text-gray-300">Terms of Service</a>
      <a href="#" className="hover:text-gray-300">Contact Us</a>
    </div>
  </div>
</footer></div>
  )
}