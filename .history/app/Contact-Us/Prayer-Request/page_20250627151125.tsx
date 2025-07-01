'use client'

import React, { useState } from 'react';


export default function PrayerRequest() {
  

  return (
    <div className="p-10 bg-gray-400 shadow-2xl min-h-screen"
      style={{
        backgroundImage: "url('/prayer.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 bg-black/60 min-h-screen">
        {/* Left: Red Info Section */}
        <div className="text-white p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Prayer Request</h2>
          <p className="mb-6">
            You can now conveniently submit your prayer requests online, by filling the form or through mail,
            or via a simple phone call. This seamless process ensures that heartfelt intentions reach the dedicated prayer team.
          </p>
          <div className="mb-2">
            📞 <strong>Phone:</strong> +234 7080638000
          </div>
          <div>
            📧 <strong>Email:</strong>
  );
}
