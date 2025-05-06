

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function PrayerRequests() {
  const [formData, setFormData] = useState({ name: '', email: '', request: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Replace with your EmailJS Service ID, Template ID, and User ID
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const userID = 'YOUR_USER_ID';

    emailjs.send(serviceID, templateID, formData, userID)
      .then(() => {
        alert('Thank you for your prayer request. We will pray for you!');
        setFormData({ name: '', email: '', request: '' }); // Reset form
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send your prayer request. Please try again.');
      });
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-10 rounded-lg shadow-lg max-w-3xl mx-auto text-white">
      <h2 className="text-3xl font-bold text-center mb-6">Submit Your Prayer Request</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-lg font-medium mb-2">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your name"
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-lg font-medium mb-2">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Prayer Request Input */}
        <div>
          <label htmlFor="request" className="block text-lg font-medium mb-2">Your Prayer Request</label>
          <textarea
            id="request"
            name="request"
            value={formData.request}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your prayer request"
            rows={5}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 rounded-lg transition duration-300"
        >
          Submit Prayer Request
        </button>
      </form>
    </div>
  );
}