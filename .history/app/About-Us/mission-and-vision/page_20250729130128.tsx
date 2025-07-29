'use client'

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function PrayerRequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'Nigeria',
    state: '',
    city: '',
    request: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.send(
      'your_service_id',
      'your_template_id',
      formData,
      'your_user_id_or_public_key'
    ).then(() => {
      alert("Prayer request sent!");
      setFormData({
        name: '', email: '', phone: '', country: 'Nigeria', state: '', city: '', request: ''
      });
    }).catch((err) => {
      console.error(err);
      alert("Failed to send request.");
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-black/70 min-h-screen">

        {/* Left: Info Section */}
        <div className="text-white m- p-10 md:px-10 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold m1-4">Prayer Request</h2>
          <p className="mb-6 text-sm sm:text-base">
            You can now conveniently submit your prayer requests online, by filling the form or through mail,
            or via a simple phone call. This seamless process ensures that heartfelt intentions reach the dedicated prayer team.
          </p>
          <div className="mb-2 text-sm sm:text-base">
            📞 <strong>Phone:</strong> +234 916 986 442, +234 906 099 3734
          </div>
          <div className="text-sm sm:text-base">
            📧 <strong>Email:</strong> contactcentre@lfcww.org
          </div>
        </div>

        {/* Right: Form Section */}
        <div className="bg-white/90 p-6 sm:p-8 flex flex-col justify-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700 mb-4">Drop Your Prayer Request</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option>Nigeria</option>
              <option>Togo</option>
              <option>Benin Republic</option>
              {/* More countries */}
            </select>
            <input
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State / Province"
              className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City / Town"
              className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              name="request"
              value={formData.request}
              onChange={handleChange}
              placeholder="Write your prayer request here..."
              rows={4}
              className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 transition text-white py-2 rounded font-semibold"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
