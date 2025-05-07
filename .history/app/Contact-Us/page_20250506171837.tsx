'use client'
import React from 'react'

export default function ContactUs() {
  return (
    <div className='bg-blue-300 px-10 justify-center p-10'>
      <h2>Worship Centers By Regions</h2>
      <p>To Fellowship With Us At any of Our Centers</p>

      <div>
        <table className='table-auto border-collapse border border-black w-full'>
          {/* Table Header */}
          <thead>
            <tr className='border border-black'>
              <th className='border-x border-black px-4 py-2'>S/NO</th>
              <th className='border-x border-black px-4 py-2'>DISTRICT</th>
              <th className='border-x border-black px-4 py-2'>DISTRICT HEADQUARTERS ADDRESS</th>
              <th className='border-x border-black px-4 py-2'>DISTRICT OVERSEERS</th>
              <th className='border-x border-black px-4 py-2'>PHONE NO</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            <tr>
              <td>1.</td>
              <td>College Crescent</td>
              <td>6, Adekunle Street, Behind Christ The Redeemer Secondary School, Molete, Ibadan</td>
              <td>Pastor S. Olu Akinbo</td>
              <td>+2348035012113</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Sango-Ibadan</td>
              <td>Behind Humani Alaga Secondary School, Off Poly Road, Ibadan.</td>
              <td>Pastor S. Olu Akinbo</td>
              <td>+2348035012113</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>Molade</td>
              <td>Behind Ayepe Primary School, Molade, Ibadan</td>
              <td>Pastor Moses Afolabi</td>
              <td>+2348125740553</td>
            </tr>
            <tr>
              <td>4.</td>
              <td>Ajegule, Saki</td>
              <td>43, John Popoola Street, Ajegunle, Saki</td>
              <td>Pastor S.O Adeleye</td>
              <td>+2348030658512</td>
            </tr>
            <tr>
              <td>5.</td>
              <td>Abimbola-Saki</td>
              <td>Abimbola Layout, Saki</td>
              <td>Pastor Femi Omisande</td>
              <td>+2348146919190</td>
            </tr>
            <tr>
              <td>6.</td>
              <td>Akoko, Ondo State</td>
              <td>Mary Hill Nursery and Primary School Oke Akoko, Ondo State</td>
              <td>Evang. J. Abass</td>
              <td>+2348032105523</td>
            </tr>
            <tr>
              <td>7.</td>
              <td>Agege, Lagos</td>
              <td>1a, Power Line, Oko-Oba Agege, Lagos.</td>
              <td>Pastor Josiah Jesufemi</td>
              <td>+2347031665334</td>
            </tr>
            <tr>
              <td>8.</td>
              <td>Eko-Kan</td>
              <td>Along International Market, Eko-Kan, Saki, Oyo State</td>
              <td>Pastor E. A. Ojoawo</td>
              <td>+2348143021010</td>
            </tr>
            <tr>
              <td>9.</td>
              <td>Gando</td>
              <td>Moussiou, Gando, Togo</td>
              <td>Pastor Baale Elisha</td>
              <td>+22995673241</td>
            </tr>
            <tr>
              <td>10.</td>
              <td>Parakou</td>
              <td>Albarika, Parakou, Benin Republic</td>
              <td>Pastor Francis Gnami</td>
              <td>+22891906010</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  )
}