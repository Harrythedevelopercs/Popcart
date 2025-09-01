

import React from 'react'
import WS from '../component/writingservices';
import Slider1 from '../component/Slider1';
import DS1 from '../component/demandingSpecilaist1';
import IM1 from '../component/impressiveWorks1';
import BW1 from '../component/bookWriting1';
import BTM from '../component/bottomLogosNEW';
import WMODE1 from '../component/workMode1'
import MBOOK1 from '../component/marketBook1'
import CTA3 from '../component/cta3';
import CTA4 from '../component/cta4';
import SwiperComponents from '../component/SwiperComponent'
// import TSlider from '../component/testimonialslider';
export default function Home() {
  return (

    <>
      <div className='mx-auto font-secondary'>
        <Slider1 />
        <BTM />

        <WS />
        <DS1
          title='Working With The Most Demanded Specialists'
          desc={'Have a story in mind? Share it with the world because we truly believe every story is worth sharing. To showcase your narrative in the best possible way, our ghostwriters are well-suited for the task. Achieving excellence requires dedication and hard work, qualities our company proudly possesses. Our team works tirelessly to bring your vision to life, transforming your ideas and story into a masterpiece with beautiful words.'}
        />
        <IM1
          title='From Rough Draft to Successful Publishing, We Make It Possible'
          desc={'We make it possible for you to make your book the next big read for the readers. Bring us your rough drafts, and let our team work magnificently on their execution.'}
        />
        <BW1
          title='Getting Your Book Written By The Top Industry Experts?'
          desc={'Your million-dollar story is worth bringing alive. And for that, our ghostwriters are dedicated to the execution of your book and work tirelessly to mold the story into the form of a picture-perfect book. We guarantee that the services you take from us are unmatchable and will meet your desired results.'}
          descs={'To give our customers a high-end result, we have hired professional experts with years of experience who are highly sought after. Therefore, don’t worry while choosing Barnett Ghostwriting for your service because working with us means getting the best.'}
        />
        <CTA3 />
        <BTM />
        <WMODE1 />
        <MBOOK1 />
        <CTA4 />
        <SwiperComponents />
        {/* <TSlider/> */}

      </div>



    </>


  )
}
