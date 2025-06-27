'use client';

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function PrayerRequests() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'Nigeria',
    state: '',
    city: '',
    request: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then(() => {
        alert('Thank you for your prayer request. We will pray for you!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          country: 'Nigeria',
          state: '',
          city: '',
          request: '',
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to send. Please try again.');
      });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 min-h-screen text-white">
      {/* Background Image */}
      <div className="hidden md:block bg-cover bg-center" style={{ backgroundImage: "url('/keyboard.jpg')" }}></div>

      {/* Red Section */}
      <div className="bg-red-600 p-10 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">Prayer Request</h2>
        <p className="mb-6">
          You can now conveniently submit your prayer requests online, by filling the form or through mail, or via a simple phone call.
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span>📞</span>
            <p>+234 7080638000</p>
          </div>
          <div className="flex items-center gap-3">
            <span>📧</span>
            <p>contactcentre@lfcww.org</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-gray-100 text-black p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Drop your Prayer Request</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="w-full p-3 bg-gray-800 text-white rounded" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full p-3 bg-gray-800 text-white rounded" />
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required className="w-full p-3 bg-gray-800 text-white rounded" />
          <select name="country" value={formData.country} onChange={handleChange} className="w-full p-3 bg-gray-800 text-white rounded">
            <option value="Nigeria">Nigeria</option>
            <option value="Ghana">Ghana</option>
            <option value="South Africa">South Africa</option>
            <option value="Other">Other</option>
          </select>
          <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State/Province" required className="w-full p-3 bg-gray-800 text-white rounded" />
          <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Town/City" required className="w-full p-3 bg-gray-800 text-white rounded" />
          <textarea name="request" value={formData.request} onChange={handleChange} placeholder="Write your prayer request here..." rows={5} required className="w-full p-3 bg-gray-800 text-white rounded"></textarea>
          <button type="submit" className="w-full py-3 bg-red-600 text-white font-bold rounded hover:bg-red-500 transition">Submit Now</button>
        </form>
      </div>
    </div>
  );
}
