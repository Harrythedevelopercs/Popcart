import React from 'react'
import LpSlider1 from './Lpslider1'




const impressiveWorks = (props) => {


  return (
    <>
      <div>
        <section className='w-full bg-[#f2f2f2]'>
          <div className='container max-w-7xl lg:max-w-6xl mx-auto'>
            <div className='py-20 xs:py-10'>
              <div className="text-center">
                <h6 className='text-[30px] text-[#3EA99F] font-semibold mb-3 sm:text-base xs:text-base xs:mb-1 font-primary'>
                Our Creative Vault
                </h6>
                <h2 className='mx-auto font-primary w-[70%] sm:w-[90%] text-[50px] leading-tight font-bold text-[#1d1d1f] md:text-[30px] sm:text-[34px] xs:text-[30px] pb-3 xs:w-[100%]'>
                  {props.title}
                </h2>
                <p className='justify-center w-[55%] sm:w-[90%] md:w-[90%] xs:w-[100%] mx-auto'>
                  {props.desc}
                </p>
              </div>
              <LpSlider1 />
            </div>
          </div>

        </section>
      </div>
    </>
  )
}

export default impressiveWorks
