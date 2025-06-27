'use client';
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';

export default function PrayerRequest() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',      // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID',     // Replace with your EmailJS template ID
        form.current!,
        'YOUR_USER_ID'          // Replace with your EmailJS user/public key
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          form.current?.reset();
        },
        () => {
          setLoading(false);
          setSent(false);
        }
      );
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f3f4f6] p-4 md:p-8">
      {/* Left: Image */}
      <div className="hidden md:block flex-1">
        <img
          src="/assets/prayer-bg.jpg" // Replace with your image path
          alt="Prayer"
          className="object-cover w-full h-full rounded-l-xl"
        />
      </div>
      {/* Center: Red Info */}
      <div className="flex-1 bg-red-600 text-white flex flex-col justify-center p-8 rounded-t-xl md:rounded-t-none md:rounded-l-none md:rounded-bl-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Prayer Request</h2>
        <p className="mb-6">
          You can now conveniently submit your prayer requests online, by filling the form or through mail, or via a simple phone call. This seamless process ensures that heartfelt intentions reach the dedicated prayer team.
        </p>
        <div className="flex items-center gap-3 mb-3">
          <FaPhoneAlt className="text-2xl" />
          <div>
            <span className="font-bold">Phone Number:</span>
            <br />
            +234 7080638000
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaRegEnvelope className="text-2xl" />
          <div>
            <span className="font-bold">Email Address:</span>
            <br />
            contactcentre@lfcww.org
          </div>
        </div>
      </div>
      {/* Right: Form */}
      <div className="flex-1 bg-[#f6f7fa] flex flex-col justify-center p-8 rounded-b-xl md:rounded-b-none md:rounded-r-xl">
        <h3 className="text-2xl font-bold text-[#0C101C] mb-6">Drop your Prayer Request</h3>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="bg-[#222] text-white px-4 py-3 rounded focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="bg-[#222] text-white px-4 py-3 rounded focus:outline-none"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="bg-[#222] text-white px-4 py-3 rounded focus:outline-none"
          />
          <select
            name="country"
            required
            className="bg-[#222] text-white px-4 py-3 rounded focus:outline-none"
            defaultValue=""
          >
            <option value="" disabled>
              Nigeria
            </option>
            <option value="Nigeria">Nigeria</option>
            <option value="Ghana">Ghana</option>
            <option value="South Africa">South Africa</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="text"
            name="state"
            placeholder="State/Province"
            className="bg-[#222] text-white px-4 py-3 rounded focus:outline-none"
          />
          <input
            type="text"
            name="city"
            placeholder="Town/City"
            className="bg-[#222] text-white px-4 py-3 rounded focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Write your prayer request here..."
            required
            rows={4}
            className="bg-[#222] text-white px-4 py-3 rounded focus:outline-none"
          />
          <button>
            type="submit"
            disabled={loading}
            className='bg-red-600 text-white font-semibold py-3 rounded mt-2' <button/>