import React from 'react'

export default function UpcomingPrograms() {
  return (
    <div className='text-white'>
      <div>
        <h1 className='uppercase items'>our upcoming programs</h1>
      </div>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <div className='bg-[#0C101C] rounded-lg p-5 m-5'>
          <h2 className='text-xl'>Program 1</h2>
          <p className='text-sm'>Date: 2023-10-01</p>
          <p className='text-sm'>Location: Church Hall</p>
        </div>
        <div className='bg-[#0C101C] rounded-lg p-5 m-5'>
          <h2 className='text-xl'>Program 2</h2>
          <p className='text-sm'>Date: 2023-10-15</p>
          <p className='text-sm'>Location: Community Center</p>
        </div>

    </div>
    </div>
  )
}