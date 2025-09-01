
import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const topHeader = () => {
  return (
    <>
      <div className='w-full bg-[#F3F3F3]'>
        <div className='container max-w-7xl mx-auto flex text-[#707070] p-2 cursor-pointer space-x-4 items-center justify-between xs:grid xs:grid-cols-1 xs:grid-rows-1 xs:text-center xs:mx-auto xs:space-y-1'>
          <div className='flex space-x-2 basis-8/12  items-center text-[12px] md:basis-6/12 xs:hidden sm:hidden'>
            <h3 className=' text-[16px]'>Follow Us:</h3>

            <FontAwesomeIcon icon={faFacebookF} className='rounded-[50%] border-[#707070] border-2 p-[3px] h-5 w-5 hover:border-[#00C0E4]' />
            <FontAwesomeIcon icon={faTwitter} className='rounded-[50%] border-[#707070] border-2 p-[3px] h-5 w-5 hover:border-[#00C0E4]' />
            <FontAwesomeIcon icon={faInstagram} className='rounded-[50%] border-[#707070] border-2 p-[3px] h-5 w-5 hover:border-[#00C0E4]' />
            <FontAwesomeIcon icon={faLinkedinIn} className='rounded-[50%] border-[#707070] border-2 p-[3px] h-5 w-5 hover:border-[#00C0E4]' />
          </div>
          <div className='flex justify-between'>
            <div className='flex space-x-2 '>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <p className='text-[12px] sm:text-[8px] hover:text-[#00c0e4]'>info@broadwaypublishers.com</p>
            </div>
            <div className='flex space-x-0 pl-4'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" strokeWidth="3" stroke="#707070" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>

              <p className='text-[12px] sm:text-[8px] hover:text-[#00c0e4]'>+1 (855) 469-7509</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default topHeader
