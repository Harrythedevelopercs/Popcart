import React from 'react'
import Image from 'next/image'
// Images
import BackgroundImage from "media/newBrandv2/success-bg.png"
import AutoScrollSlider from '@/component/ChildrenBooklp/AutoScrollSlider'
// Media
import Success1 from "media/newBrandv2/success1.png";
import Success2 from "media/newBrandv2/success2.png";
import Success3 from "media/newBrandv2/success3.png";
import Avatar1 from "media/newBrandv2/avatar1.png"
import Avatar2 from "media/newBrandv2/avatar2.png"
import Avatar3 from "media/newBrandv2/avatar3.png"
import Avatar4 from "media/newBrandv2/avatar4.png"
import Avatar5 from "media/newBrandv2/avatar5.png"
import Avatar6 from "media/newBrandv2/avatar6.png"
import Avatar7 from "media/newBrandv2/avatar7.png"
import Avatar8 from "media/newBrandv2/avatar8.png"
import Avatar9 from "media/newBrandv2/avatar9.png"
import Avatar10 from "media/newBrandv2/avatar10.png"
import Avatar11 from "media/newBrandv2/avatar11.png"
import Avatar12 from "media/newBrandv2/avatar12.png"
import Avatar13 from "media/newBrandv2/avatar13.png"
import Avatar14 from "media/newBrandv2/avatar14.png"
const Success = () => {
  return (
    <section className='relative mr-lg:pt-8 pb-12 mr-lg:pb-20'>
      <Image src={BackgroundImage} alt='Section Background' fill={true} className='object-cover object-center z-[-1]' />
      <div className="max-w-7xl mx-auto px-4 mr-md:px-8 mr-2xl:px-0">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <h2 className='text-[30px] mr-md:text-[45px] mr-xl:text-[53px] leading-[40px] mr-md:leading-[55px] mr-xl:leading-[60px] font-semibold capitalize dm-serif mb-2 text-center mr-lg:w-8/12 mx-auto'>Where success speaks for itself hear what our clients have to say!</h2>
            <p className="text-[14px] mr-md:text-[15px] poppins font-[500] text-center mr-lg:w-8/12 mx-auto mr-xl:px-7 pb-4">Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals</p>
            <p className='text-[16px] leading-[25px] font-[400] poppins text-center text-[#60677F]'>Average Review Rating: <span className='text-black'>4.9 out of 5</span> <span className='text-[#ff0000]'>★★★★★</span> based on <span className='text-black'>20 reviews</span></p>
          </div>
          <div className="col-span-12">
            <div className='mr-md:w-10/12 mx-auto'>
              <AutoScrollSlider options={{ align: "center" }} wrapperClasses="mt-12 mb-12" direction="forward">
                {[Success1, Success2, Success3, Success1, Success2, Success3].map((imgPortfolio, i) => (
                  <div key={i} className="group shrink-0 mr-md:basis-[32%] mr-sm:basis-[25%] basis-[45%] min-w-0 pl-5  items-center flex justify-center ">
                    <div className="flex items-center justify-center w-full">
                      <div className={`relative w-full`}>
                        <Image src={imgPortfolio} alt="Success Clients" className="mr-lg:w-11/12 mx-auto" />
                      </div>
                    </div>
                  </div>
                ))}
              </AutoScrollSlider>
            </div>
          </div>
          <div className="col-span-12">
            <div class="flex flex-col mr-md:flex-row mr-md:flex-wrap items-center justify-center gap-4">
              <div class="relative group w-full mr-md:w-auto">
                <div class="w-full mr-md:w-[130px] h-auto mr-md:h-[130px] group-hover:scale-[0.9] group-hover:duration-700 duration-700 ease-in-out group-hover:border-2 group-hover:border-black rounded-3xl mr-md:rounded-lg">
                  <Image src={Avatar1} alt="Avatar" class="w-full" />
                </div>
                <div class="absolute z-30 left-0 bottom-0 top-auto mr-md:top-[145px] invisible group-hover:visible scale-0 group-hover:scale-[1] duration-300 group-hover:duration-300 ease-in-out">
                  <div class="tooltip bg-white border border-[#cecece] min-w-full mr-md:min-w-[245px] mr-lg:min-w-[280px] mr-2xl:min-w-[300px] p-2 mr-md:px-4 mr-md:py-5 rounded-[10px] before:content-[''] hover:before:h-[100%] hover:before:w-[100%] before:top-[-10px] before:left-[-10px] relative before:w-[30px] before:h-[30px] before:bg-[#65C7E4] before:absolute before:z-[-1] before:rounded-tl-[10px] after:content-[''] after:bottom-[-10px] after:right-[-10px] after:w-[30px] hover:after:w-[100%] after:h-[30px] hover:after:h-[100%] after:bg-[#0e2033] after:absolute after:rounded-br-[10px] after:-z-10 before:transition-all before:duration-1000 after:transition-all after:duration-1000">
                    <p class="text-[13px] mr-md:text-[14px] mr-2xl:text-[15px] leading-[25px] font-[400] poppins">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo error doloremque optio molestias, excepturi magni veniam maiores exercitationem laborum consequatur, dolorum culpa? Blanditiis sunt rerum in illo fugit a velit!
                    </p>
                  </div>
                </div>
              </div>
              <div class="relative group w-full mr-md:w-auto">
                <div class="w-full mr-md:w-[130px] h-auto mr-md:h-[130px] group-hover:scale-[0.9] group-hover:duration-700 duration-700 ease-in-out group-hover:border-2 group-hover:border-black rounded-3xl mr-md:rounded-lg">
                  <Image src={Avatar2} alt="Avatar" class="w-full" />
                </div>
                <div class="absolute z-30 mr-md:right-[-60px] bottom-0 top-auto mr-md:top-[145px] invisible group-hover:visible scale-0 group-hover:scale-[1] duration-300 group-hover:duration-300 ease-in-out">
                  <div class="tooltip bg-white border border-[#cecece] min-w-full mr-md:min-w-[245px] mr-lg:min-w-[280px] mr-2xl:min-w-[300px] p-2 mr-md:px-4 mr-md:py-5 rounded-[10px] before:content-[''] hover:before:h-[100%] hover:before:w-[100%] before:top-[-10px] before:left-[-10px] relative before:w-[30px] before:h-[30px] before:bg-[#65C7E4] before:absolute before:z-[-1] before:rounded-tl-[10px] after:content-[''] after:bottom-[-10px] after:right-[-10px] after:w-[30px] hover:after:w-[100%] after:h-[30px] hover:after:h-[100%] after:bg-[#0e2033] after:absolute after:rounded-br-[10px] after:-z-10 before:transition-all before:duration-1000 after:transition-all after:duration-1000">
                    <p class="text-[13px] mr-md:text-[14px] mr-2xl:text-[15px] leading-[25px] font-[400] poppins">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo error doloremque optio molestias, excepturi magni veniam maiores exercitationem laborum consequatur, dolorum culpa? Blanditiis sunt rerum in illo fugit a velit!
                    </p>
                  </div>
                </div>
              </div>
              <div class="relative group w-full mr-md:w-auto">
                <div class="w-full mr-md:w-[130px] h-auto mr-md:h-[130px] group-hover:scale-[0.9] group-hover:duration-700 duration-700 ease-in-out group-hover:border-2 group-hover:border-black rounded-3xl mr-md:rounded-lg">
                  <Image src={Avatar3} alt="Avatar" class="w-full" />
                </div>
                <div class="absolute z-30 mr-md:right-[-60px] bottom-0 top-auto mr-md:top-[145px] invisible group-hover:visible scale-0 group-hover:scale-[1] duration-300 group-hover:duration-300 ease-in-out">
                  <div class="tooltip bg-white border border-[#cecece] min-w-full mr-md:min-w-[245px] mr-lg:min-w-[280px] mr-2xl:min-w-[300px] p-2 mr-md:px-4 mr-md:py-5 rounded-[10px] before:content-[''] hover:before:h-[100%] hover:before:w-[100%] before:top-[-10px] before:left-[-10px] relative before:w-[30px] before:h-[30px] before:bg-[#65C7E4] before:absolute before:z-[-1] before:rounded-tl-[10px] after:content-[''] after:bottom-[-10px] after:right-[-10px] after:w-[30px] hover:after:w-[100%] after:h-[30px] hover:after:h-[100%] after:bg-[#0e2033] after:absolute after:rounded-br-[10px] after:-z-10 before:transition-all before:duration-1000 after:transition-all after:duration-1000">
                    <p class="text-[13px] mr-md:text-[14px] mr-2xl:text-[15px] leading-[25px] font-[400] poppins">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo error doloremque optio molestias, excepturi magni veniam maiores exercitationem laborum consequatur, dolorum culpa? Blanditiis sunt rerum in illo fugit a velit!
                    </p>
                  </div>
                </div>
              </div>
              <div class="relative group w-full mr-md:w-auto">
                <div class="w-full mr-md:w-[130px] h-auto mr-md:h-[130px] group-hover:scale-[0.9] group-hover:duration-700 duration-700 ease-in-out group-hover:border-2 group-hover:border-black rounded-3xl mr-md:rounded-lg">
                  <Image src={Avatar4} alt="Avatar" class="w-full" />
                </div>
                <div class="absolute z-30 mr-md:right-[-60px] bottom-0 top-auto mr-md:top-[145px] invisible group-hover:visible scale-0 group-hover:scale-[1] duration-300 group-hover:duration-300 ease-in-out">
                  <div class="tooltip bg-white border border-[#cecece] min-w-full mr-md:min-w-[245px] mr-lg:min-w-[280px] mr-2xl:min-w-[300px] p-2 mr-md:px-4 mr-md:py-5 rounded-[10px] before:content-[''] hover:before:h-[100%] hover:before:w-[100%] before:top-[-10px] before:left-[-10px] relative before:w-[30px] before:h-[30px] before:bg-[#65C7E4] before:absolute before:z-[-1] before:rounded-tl-[10px] after:content-[''] after:bottom-[-10px] after:right-[-10px] after:w-[30px] hover:after:w-[100%] after:h-[30px] hover:after:h-[100%] after:bg-[#0e2033] after:absolute after:rounded-br-[10px] after:-z-10 before:transition-all before:duration-1000 after:transition-all after:duration-1000">
                    <p class="text-[13px] mr-md:text-[14px] mr-2xl:text-[15px] leading-[25px] font-[400] poppins">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo error doloremque optio molestias, excepturi magni veniam maiores exercitationem laborum consequatur, dolorum culpa? Blanditiis sunt rerum in illo fugit a velit!
                    </p>
                  </div>
                </div>
              </div>
              <div class="relative group w-full mr-md:w-auto">
                <div class="w-full mr-md:w-[130px] h-auto mr-md:h-[130px] group-hover:scale-[0.9] group-hover:duration-700 duration-700 ease-in-out group-hover:border-2 group-hover:border-black rounded-3xl mr-md:rounded-lg">
                  <Image src={Avatar5} alt="Avatar" class="w-full" />
                </div>
                <div class="absolute z-30 mr-md:right-[-60px] bottom-0 top-auto mr-md:top-[145px] invisible group-hover:visible scale-0 group-hover:scale-[1] duration-300 group-hover:duration-300 ease-in-out">
                  <div class="tooltip bg-white border border-[#cecece] min-w-full mr-md:min-w-[245px] mr-lg:min-w-[280px] mr-2xl:min-w-[300px] p-2 mr-md:px-4 mr-md:py-5 rounded-[10px] before:content-[''] hover:before:h-[100%] hover:before:w-[100%] before:top-[-10px] before:left-[-10px] relative before:w-[30px] before:h-[30px] before:bg-[#65C7E4] before:absolute before:z-[-1] before:rounded-tl-[10px] after:content-[''] after:bottom-[-10px] after:right-[-10px] after:w-[30px] hover:after:w-[100%] after:h-[30px] hover:after:h-[100%] after:bg-[#0e2033] after:absolute after:rounded-br-[10px] after:-z-10 before:transition-all before:duration-1000 after:transition-all after:duration-1000">
                    <p class="text-[13px] mr-md:text-[14px] mr-2xl:text-[15px] leading-[25px] font-[400] poppins">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo error doloremque optio molestias, excepturi magni veniam maiores exercitationem laborum consequatur, dolorum culpa? Blanditiis sunt rerum in illo fugit a velit!
                    </p>
                  </div>
                </div>
              </div>
              <div class="relative group w-full mr-md:w-auto">
                <div class="w-full mr-md:w-[130px] h-auto mr-md:h-[130px] group-hover:scale-[0.9] group-hover:duration-700 duration-700 ease-in-out group-hover:border-2 group-hover:border-black rounded-3xl mr-md:rounded-lg">
                  <Image src={Avatar6} alt="Avatar" class="w-full" />
                </div>
                <div class="absolute z-30 mr-md:right-[-35px] mr-xl:right-[-60px] bottom-0 top-auto mr-md:top-[145px] invisible group-hover:visible scale-0 group-hover:scale-[1] duration-300 group-hover:duration-300 ease-in-out">
                  <div class="tooltip bg-white border border-[#cecece] min-w-full mr-md:min-w-[245px] mr-lg:min-w-[280px] mr-2xl:min-w-[300px] p-2 mr-md:px-4 mr-md:py-5 rounded-[10px] before:content-[''] hover:before:h-[100%] hover:before:w-[100%] before:top-[-10px] before:left-[-10px] relative before:w-[30px] before:h-[30px] before:bg-[#65C7E4] before:absolute before:z-[-1] before:rounded-tl-[10px] after:content-[''] after:bottom-[-10px] after:right-[-10px] after:w-[30px] hover:after:w-[100%] after:h-[30px] hover:after:h-[100%] after:bg-[#0e2033] after:absolute after:rounded-br-[10px] after:-z-10 before:transition-all before:duration-1000 after:transition-all after:duration-1000">
                    <p class="text-[13px] mr-md:text-[14px] mr-2xl:text-[15px] leading-[25px] font-[400] poppins">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo error doloremque optio molestias, excepturi magni veniam maiores exercitationem laborum consequatur, dolorum culpa? Blanditiis sunt rerum in illo fugit a velit!
                    </p>
                  </div>
                </div>
              </div>
              <div class="relative group w-full mr-md:w-auto">
                <div class="w-full mr-md:w-[130px] h-auto mr-md:h-[130px] group-hover:scale-[0.9] group-hover:duration-700 duration-700 ease-in-out group-hover:border-2 group-hover:border-black rounded-3xl mr-md:rounded-lg">
                  <Image src={Avatar7} alt="Avatar" class="w-full" />
                </div>
                <div class="absolute z-30 mr-xl:right-[-60px] bottom-0 top-auto mr-md:top-[145px] invisible group-hover:visible scale-0 group-hover:scale-[1] duration-300 group-hover:duration-300 ease-in-out">
                  <div class="tooltip bg-white border border-[#cecece] min-w-full mr-md:min-w-[245px] mr-lg:min-w-[280px] mr-2xl:min-w-[300px] p-2 mr-md:px-4 mr-md:py-5 rounded-[10px] before:content-[''] hover:before:h-[100%] hover:before:w-[100%] before:top-[-10px] before:left-[-10px] relative before:w-[30px] before:h-[30px] before:bg-[#65C7E4] before:absolute before:z-[-1] before:rounded-tl-[10px] after:content-[''] after:bottom-[-10px] after:right-[-10px] after:w-[30px] hover:after:w-[100%] after:h-[30px] hover:after:h-[100%] after:bg-[#0e2033] after:absolute after:rounded-br-[10px] after:-z-10 before:transition-all before:duration-1000 after:transition-all after:duration-1000">
                    <p class="text-[13px] mr-md:text-[14px] mr-2xl:text-[15px] leading-[25px] font-[400] poppins">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo error doloremque optio molestias, excepturi magni veniam maiores exercitationem laborum consequatur, dolorum culpa? Blanditiis sunt rerum in illo fugit a velit!
                    </p>
                  </div>
                </div>
              </div>
              <div class="relative group w-full mr-md:w-auto">
                <div class="w-full mr-md:w-[130px] h-auto mr-md:h-[130px] group-hover:scale-[0.9] group-hover:duration-700 duration-700 ease-in-out group-hover:border-2 group-hover:border-black rounded-3xl mr-md:rounded-lg">
                  <Image src={Avatar8} alt="Avatar" class="w-full" />
                </div>
                <div class="absolute z-30 right-0 mr-2xl:right-[-60px] bottom-0 top-auto mr-md:top-[145px] invisible group-hover:visible scale-0 group-hover:scale-[1] duration-300 group-hover:duration-300 ease-in-out">
                  <div class="tooltip bg-white border border-[#cecece] min-w-full mr-md:min-w-[245px] mr-lg:min-w-[280px] mr-2xl:min-w-[300px] p-2 mr-md:px-4 mr-md:py-5 rounded-[10px] before:content-[''] hover:before:h-[100%] hover:before:w-[100%] before:top-[-10px] before:left-[-10px] relative before:w-[30px] before:h-[30px] before:bg-[#65C7E4] before:absolute before:z-[-1] before:rounded-tl-[10px] after:content-[''] after:bottom-[-10px] after:right-[-10px] after:w-[30px] hover:after:w-[100%] after:h-[30px] hover:after:h-[100%] after:bg-[#0e2033] after:absolute after:rounded-br-[10px] after:-z-10 before:transition-all before:duration-1000 after:transition-all after:duration-1000">
                    <p class="text-[13px] mr-md:text-[14px] mr-2xl:text-[15px] leading-[25px] font-[400] poppins">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo error doloremque optio molestias, excepturi magni veniam maiores exercitationem laborum consequatur, dolorum culpa? Blanditiis sunt rerum in illo fugit a velit!
                    </p>
                  </div>
                </div>
              </div>
              <div class="relative group w-full mr-md:w-auto">
                <div class="w-full mr-md:w-[130px] h-auto mr-md:h-[130px] group-hover:scale-[0.9] group-hover:duration-700 duration-700 ease-in-out group-hover:border-2 group-hover:border-black rounded-3xl mr-md:rounded-lg">
                  <Image src={Avatar9} alt="Avatar" class="w-full" />
                </div>
                <div class="absolute z-30 mr-md:right-[-60px] bottom-0 top-auto mr-md:top-[145px] invisible group-hover:visible scale-0 group-hover:scale-[1] duration-300 group-hover:duration-300 ease-in-out">
                  <div class="tooltip bg-white border border-[#cecece] min-w-full mr-md:min-w-[245px] mr-lg:min-w-[280px] mr-2xl:min-w-[300px] p-2 mr-md:px-4 mr-md:py-5 rounded-[10px] before:content-[''] hover:before:h-[100%] hover:before:w-[100%] before:top-[-10px] before:left-[-10px] relative before:w-[30px] before:h-[30px] before:bg-[#65C7E4] before:absolute before:z-[-1] before:rounded-tl-[10px] after:content-[''] after:bottom-[-10px] after:right-[-10px] after:w-[30px] hover:after:w-[100%] after:h-[30px] hover:after:h-[100%] after:bg-[#0e2033] after:absolute after:rounded-br-[10px] after:-z-10 before:transition-all before:duration-1000 after:transition-all after:duration-1000">
                    <p class="text-[13px] mr-md:text-[14px] mr-2xl:text-[15px] leading-[25px] font-[400] poppins">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo error doloremque optio molestias, excepturi magni veniam maiores exercitationem laborum consequatur, dolorum culpa? Blanditiis sunt rerum in illo fugit a velit!
                    </p>
                  </div>
                </div>
              </div>
              <div class="relative group w-full mr-md:w-auto">
                <div class="w-full mr-md:w-[130px] h-auto mr-md:h-[130px] group-hover:scale-[0.9] group-hover:duration-700 duration-700 ease-in-out group-hover:border-2 group-hover:border-black rounded-3xl mr-md:rounded-lg">
                  <Image src={Avatar10} alt="Avatar" class="w-full" />
                </div>
                <div class="absolute z-30 mr-md:right-[-60px] bottom-0 top-auto mr-md:top-[145px] invisible group-hover:visible scale-0 group-hover:scale-[1] duration-300 group-hover:duration-300 ease-in-out">
                  <div class="tooltip bg-white border border-[#cecece] min-w-full mr-md:min-w-[245px] mr-lg:min-w-[280px] mr-2xl:min-w-[300px] p-2 mr-md:px-4 mr-md:py-5 rounded-[10px] before:content-[''] hover:before:h-[100%] hover:before:w-[100%] before:top-[-10px] before:left-[-10px] relative before:w-[30px] before:h-[30px] before:bg-[#65C7E4] before:absolute before:z-[-1] before:rounded-tl-[10px] after:content-[''] after:bottom-[-10px] after:right-[-10px] after:w-[30px] hover:after:w-[100%] after:h-[30px] hover:after:h-[100%] after:bg-[#0e2033] after:absolute after:rounded-br-[10px] after:-z-10 before:transition-all before:duration-1000 after:transition-all after:duration-1000">
                    <p class="text-[13px] mr-md:text-[14px] mr-2xl:text-[15px] leading-[25px] font-[400] poppins">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo error doloremque optio molestias, excepturi magni veniam maiores exercitationem laborum consequatur, dolorum culpa? Blanditiis sunt rerum in illo fugit a velit!
                    </p>
                  </div>
                </div>
              </div>
              <div class="relative group w-full mr-md:w-auto">
                <div class="w-full mr-md:w-[130px] h-auto mr-md:h-[130px] group-hover:scale-[0.9] group-hover:duration-700 duration-700 ease-in-out group-hover:border-2 group-hover:border-black rounded-3xl mr-md:rounded-lg">
                  <Image src={Avatar11} alt="Avatar" class="w-full" />
                </div>
                <div class="absolute z-30 mr-md:right-[-60px] bottom-0 top-auto mr-md:top-[145px] invisible group-hover:visible scale-0 group-hover:scale-[1] duration-300 group-hover:duration-300 ease-in-out">
                  <div class="tooltip bg-white border border-[#cecece] min-w-full mr-md:min-w-[245px] mr-lg:min-w-[280px] mr-2xl:min-w-[300px] p-2 mr-md:px-4 mr-md:py-5 rounded-[10px] before:content-[''] hover:before:h-[100%] hover:before:w-[100%] before:top-[-10px] before:left-[-10px] relative before:w-[30px] before:h-[30px] before:bg-[#65C7E4] before:absolute before:z-[-1] before:rounded-tl-[10px] after:content-[''] after:bottom-[-10px] after:right-[-10px] after:w-[30px] hover:after:w-[100%] after:h-[30px] hover:after:h-[100%] after:bg-[#0e2033] after:absolute after:rounded-br-[10px] after:-z-10 before:transition-all before:duration-1000 after:transition-all after:duration-1000">
                    <p class="text-[13px] mr-md:text-[14px] mr-2xl:text-[15px] leading-[25px] font-[400] poppins">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo error doloremque optio molestias, excepturi magni veniam maiores exercitationem laborum consequatur, dolorum culpa? Blanditiis sunt rerum in illo fugit a velit!
                    </p>
                  </div>
                </div>
              </div>
              <div class="relative group w-full mr-md:w-auto">
                <div class="w-full mr-md:w-[130px] h-auto mr-md:h-[130px] group-hover:scale-[0.9] group-hover:duration-700 duration-700 ease-in-out group-hover:border-2 group-hover:border-black rounded-3xl mr-md:rounded-lg">
                  <Image src={Avatar12} alt="Avatar" class="w-full" />
                </div>
                <div class="absolute z-30 mr-md:right-[-35px] mr-xl:right-[-60px] bottom-0 top-auto mr-md:top-[145px] invisible group-hover:visible scale-0 group-hover:scale-[1] duration-300 group-hover:duration-300 ease-in-out">
                  <div class="tooltip bg-white border border-[#cecece] min-w-full mr-md:min-w-[245px] mr-lg:min-w-[280px] mr-2xl:min-w-[300px] p-2 mr-md:px-4 mr-md:py-5 rounded-[10px] before:content-[''] hover:before:h-[100%] hover:before:w-[100%] before:top-[-10px] before:left-[-10px] relative before:w-[30px] before:h-[30px] before:bg-[#65C7E4] before:absolute before:z-[-1] before:rounded-tl-[10px] after:content-[''] after:bottom-[-10px] after:right-[-10px] after:w-[30px] hover:after:w-[100%] after:h-[30px] hover:after:h-[100%] after:bg-[#0e2033] after:absolute after:rounded-br-[10px] after:-z-10 before:transition-all before:duration-1000 after:transition-all after:duration-1000">
                    <p class="text-[13px] mr-md:text-[14px] mr-2xl:text-[15px] leading-[25px] font-[400] poppins">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo error doloremque optio molestias, excepturi magni veniam maiores exercitationem laborum consequatur, dolorum culpa? Blanditiis sunt rerum in illo fugit a velit!
                    </p>
                  </div>
                </div>
              </div>
              <div class="relative group w-full mr-md:w-auto">
                <div class="w-full mr-md:w-[130px] h-auto mr-md:h-[130px] group-hover:scale-[0.9] group-hover:duration-700 duration-700 ease-in-out group-hover:border-2 group-hover:border-black rounded-3xl mr-md:rounded-lg">
                  <Image src={Avatar13} alt="Avatar" class="w-full" />
                </div>
                <div class="absolute z-30 mr-md:right-[-60px] bottom-0 top-auto mr-md:top-[145px] invisible group-hover:visible scale-0 group-hover:scale-[1] duration-300 group-hover:duration-300 ease-in-out">
                  <div class="tooltip bg-white border border-[#cecece] min-w-full mr-md:min-w-[245px] mr-lg:min-w-[280px] mr-2xl:min-w-[300px] p-2 mr-md:px-4 mr-md:py-5 rounded-[10px] before:content-[''] hover:before:h-[100%] hover:before:w-[100%] before:top-[-10px] before:left-[-10px] relative before:w-[30px] before:h-[30px] before:bg-[#65C7E4] before:absolute before:z-[-1] before:rounded-tl-[10px] after:content-[''] after:bottom-[-10px] after:right-[-10px] after:w-[30px] hover:after:w-[100%] after:h-[30px] hover:after:h-[100%] after:bg-[#0e2033] after:absolute after:rounded-br-[10px] after:-z-10 before:transition-all before:duration-1000 after:transition-all after:duration-1000">
                    <p class="text-[13px] mr-md:text-[14px] mr-2xl:text-[15px] leading-[25px] font-[400] poppins">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo error doloremque optio molestias, excepturi magni veniam maiores exercitationem laborum consequatur, dolorum culpa? Blanditiis sunt rerum in illo fugit a velit!
                    </p>
                  </div>
                </div>
              </div>
              <div class="relative group w-full mr-md:w-auto">
                <div class="w-full mr-md:w-[130px] h-auto mr-md:h-[130px] group-hover:scale-[0.9] group-hover:duration-700 duration-700 ease-in-out group-hover:border-2 group-hover:border-black rounded-3xl mr-md:rounded-lg">
                  <Image src={Avatar14} alt="Avatar" class="w-full" />
                </div>
                <div class="absolute z-30 mr-md:right-[-60px] bottom-0 top-auto mr-md:top-[145px] invisible group-hover:visible scale-0 group-hover:scale-[1] duration-300 group-hover:duration-300 ease-in-out">
                  <div class="tooltip bg-white border border-[#cecece] min-w-full mr-md:min-w-[245px] mr-lg:min-w-[280px] mr-2xl:min-w-[300px] p-2 mr-md:px-4 mr-md:py-5 rounded-[10px] before:content-[''] hover:before:h-[100%] hover:before:w-[100%] before:top-[-10px] before:left-[-10px] relative before:w-[30px] before:h-[30px] before:bg-[#65C7E4] before:absolute before:z-[-1] before:rounded-tl-[10px] after:content-[''] after:bottom-[-10px] after:right-[-10px] after:w-[30px] hover:after:w-[100%] after:h-[30px] hover:after:h-[100%] after:bg-[#0e2033] after:absolute after:rounded-br-[10px] after:-z-10 before:transition-all before:duration-1000 after:transition-all after:duration-1000">
                    <p class="text-[13px] mr-md:text-[14px] mr-2xl:text-[15px] leading-[25px] font-[400] poppins">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo error doloremque optio molestias, excepturi magni veniam maiores exercitationem laborum consequatur, dolorum culpa? Blanditiis sunt rerum in illo fugit a velit!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Success
