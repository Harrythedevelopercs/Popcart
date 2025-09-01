import React from 'react'

import Image from 'next/image'

const bottomLogos = () => {
  return (
    <>
    <div className='bg-[#fff] w-full'>
       <div className='mr-container'>
        <Image quality={95} className='pt-8 pb-8 justify-center text-center items-center' src="/assets/images/newimg/btm-logo.webp" width={1250} height={50} alt='btm-logo'/>
       </div>
    </div>
    </>
    
  )
}

export default bottomLogos
