'use client'

import React from 'react'
import HCEC_LOGO from "../../../assets/HCEC_LOGO.png";
import Image from 'next/image'


export default function OurHistory() {
  return (
    <div>
      <div>
        {/* customized div */}
      </div>

      
      <div>
     <div className='cl'>
      {/*History header and image */}
      <div>
        <Image src={HCEC_LOGO} alt="HCEC Logo" className="h-[3rem] w-[5rem] object-cover" />
      </div>
      <h1>OUR HISTORY</h1>

     </div>
        <div>
           {/* History content*/}
           

        </div>
        </div>


      <div>
        {/* customized div */}
      </div>

    </div>
  )
}