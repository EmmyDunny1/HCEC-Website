import React from 'react';
import Image from 'next/image';
import ContactLinks from '@/app/Contact-Us/ContactLinks/ContactLinks'
import Testing from './TestingProps/Testing';
type propsType = {
name: string;
}

export default function ContactHome({name}: propsType) {
  return (
    <div>
    <div className="relative w-full h-[90vh] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/assets/contact.jpg"
        alt="Contact background"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">We're here for you</h1>
        <p className="text-lg md:text-2xl text-white">
          If you would like to talk to us please call this number.
        </p>
      </div>
    </div>
    <Testing  name = " />
    <ContactLinks />
    </div>
  );
}