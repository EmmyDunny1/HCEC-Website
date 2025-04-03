import React from 'react'
import HCEC_LOGO from '../../public/hcec_logo.png'

export default function Navbar() {
  return (
    <div className='flex max-w-7xl w-full mx-auto text-sm justify-between items-center bg-[#0C101C] text-white p-4 transition-all'>
<section>
    <img src={HCEC_LOGO} alt="" />
</section>

    </div>
  )
}