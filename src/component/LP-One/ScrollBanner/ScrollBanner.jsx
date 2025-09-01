import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from 'next/image';
import Mockup1 from 'media/images/book-mockup/1.jpg'
import Mockup2 from 'media/images/book-mockup/2.jpg'
import Mockup3 from 'media/images/book-mockup/3.jpg'
import Mockup4 from 'media/images/book-mockup/4.jpg'
import Mockup5 from 'media/images/book-mockup/5.jpg'
import Mockup6 from 'media/images/book-mockup/6.jpg'
import Mockup7 from 'media/images/book-mockup/7.jpg'
import Mockup8 from 'media/images/book-mockup/8.jpg'
import Mockup9 from 'media/images/book-mockup/9.jpg'
import Mockup10 from 'media/images/book-mockup/10.jpg'
import Mockup11 from 'media/images/book-mockup/11.jpg'
import Mockup12 from 'media/images/book-mockup/12.jpg'
import { MRCTA } from '@/component';
const ScrollBanner = () => {

    const openLiveChat = (e) => {
        e.preventDefault();
        if (window.LiveChatWidget) {
            window.LiveChatWidget.call('maximize');
        }
    };

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const additionalY = { val: 0 };
        let additionalYAnim;
        let offset = 0;

        const cols = gsap.utils.toArray(".col");

        cols.forEach((col, i) => {
            const images = col.childNodes;

            // DUPLICATE IMAGES FOR LOOP
            images.forEach((image) => {
                var clone = image.cloneNode(true);
                col.appendChild(clone);
            });

            // SET ANIMATION
            images.forEach((item) => {
                let columnHeight = item.parentElement.clientHeight;
                let direction = i % 2 !== 0 ? "+=" : "-="; // Change direction for odd columns

                gsap.to(item, {
                    y: direction + Number(columnHeight / 2),
                    duration: 20,
                    repeat: -1,
                    ease: "none",
                    modifiers: {
                        y: gsap.utils.unitize((y) => {
                            if (direction === "+=") {
                                offset += additionalY.val;
                                y = (parseFloat(y) - offset) % (columnHeight * 0.5);
                            } else {
                                offset += additionalY.val;
                                y = (parseFloat(y) + offset) % -Number(columnHeight * 0.5);
                            }

                            return y;
                        },
                        )
                    },
                });
            });
        });

        const imagesScrollerTrigger = ScrollTrigger.create({
            trigger: ".section",
            start: "top 50%",
            end: "bottom 50%",
            onUpdate: function (self) {
                const velocity = self.getVelocity();
                if (velocity > 0) {
                    if (additionalYAnim) additionalYAnim.kill();
                    additionalY.val = -velocity / 2000;
                    additionalYAnim = gsap.to(additionalY, { val: 0 });
                }
                if (velocity < 0) {
                    if (additionalYAnim) additionalYAnim.kill();
                    additionalY.val = -velocity / 3000;
                    additionalYAnim = gsap.to(additionalY, { val: 0 });
                }
            },
        });
    }, []);
    return (
        <>
            <section className='section-container11 relative w-full overflow-hidden focus:scroll-auto '>
                <div className='w-full font-secondary mr-lg:bg-[#3EA99F] bg-[#000] relative before:absolute before:py-[200px] before:bg-black before:mr-lg:block before:hidden before:w-[50%] before:h-[100%] before:z-0 before:top-0 before:left-0 before:bottom-0 '>
                    <div className='mr-container grid mr-xl:grid-cols-2 mr-lg:grid-cols-2 mr-lg:!text-left text-center justify-center text-white md:py-[50px] xs:py-[30px] sm:py-[30px]'>
                        <div className='items-center relative mr-lg:py-[150px] mr-lg:px-5'>
                            {/* <span className='mr-2xl:text-[40px] mr-xl:text-[35px] px-2 py-1 bg-black text-white mr-xs:text-center font-primary font-bold mr-md:text-[35px] mr-sm:text-[35px] mr-xs:text-[25px] leading-normal mb-3'>Need assistance or have inquiries? </span> */}
                            <div className='flex items-center mr-lg:gap-x-4 gap-x-1 text-white font-bold mr-lg:!text-left mr-lg:!justify-start justify-center text-center mb-4'>
                                <span className='border-b-4 border-primary-100 mr-lg:text-[25px] text-[18px]'>Your Book</span>
                                <h3 className='flex items-center mr-lg:text-[50px] text-[40px] font-bold leading-tight '>50<span className='text-base leading-normal text-red-600 font-light block'>%</span><span className='text-base block leading-normal font-light'>OFF</span></h3>
                                <span className='font-bold mr-lg:text-[25px] text-[px] leading-tight'>project with just a <br /> down payment!</span>
                            </div>
                            <p className='xs:!text-center m-auto mr-xl:px-0 block'>
                                Dive into the world of authorship without breaking the bank – <br className='hidden mr-lg:block' /> your dream book is closer than you think!
                            </p>
                            <div className="mr-sm:flex items-center mr-sm:flex-nowrap flex-wrap justify-center mr-lg:justify-start mr-sm:gap-x-10 gap-5 mt-10">
                        <MRCTA
                            text="Connect with Us!"
                            classes="hover:bg-secondary-100 mr-sm:mb-0 mb-5"
                            link="javascript:;" handle="parent.LC_API.open_chat_window();return false;"
                        />
                        <MRCTA
                            text="Call us NOW!"
                            link="tel:8556666675"
                            bg="bg-transparent"
                            color="text-white"
                            border="border-white hover:!bg-primary-100 hover:border-transparent hover:text-white"
                        />
                    </div>
                        </div>

                        <div className='relative section z-0 w-[50%] mr-xl:!block mr-lg:!block h-[100%] !hidden'>
                            <div className="gallery z-0 overflow-hidden absolute lg:pr-20 sm:hidden" >
                                <div className="col">
                                    <div className="image">
                                        <Image quality={95} width={200} height={250} alt="Call of action" className='' src={Mockup4} />
                                    </div>
                                    <div className="image">
                                        <Image quality={95} width={200} height={250} alt="Call of action" className='' src={Mockup2} />
                                    </div>
                                    <div className="image">
                                        <Image quality={95} width={200} height={250} alt="Call of action" className='' src={Mockup4} />
                                    </div>
                                    <div className="image">
                                        <Image quality={95} width={200} height={250} alt="Call of action" className='' src={Mockup1} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="image">
                                        <Image quality={95} width={200} height={250} alt="Call of action" className='' src={Mockup5} />
                                    </div>
                                    <div className="image">
                                        <Image quality={95} width={200} height={250} alt="Call of action" className='' src={Mockup6} />
                                    </div>
                                    <div className="image">
                                        <Image quality={95} width={200} height={250} alt="Call of action" className='' src={Mockup7} />
                                    </div>
                                    <div className="image">
                                        <Image quality={95} width={200} height={250} alt="Call of action" className='' src={Mockup8} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="image">
                                        <Image quality={95} width={200} height={250} alt="Call of action" className='' src={Mockup9} />
                                    </div>
                                    <div className="image">
                                        <Image quality={95} width={200} height={250} alt="Call of action" className='' src={Mockup10} />
                                    </div>
                                    <div className="image">
                                        <Image quality={95} width={200} height={250} alt="Call of action" className='' src={Mockup11} />
                                    </div>
                                    <div className="image">
                                        <Image quality={95} width={200} height={250} alt="Call of action" className='' src={Mockup12} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    );
};

export default ScrollBanner;
