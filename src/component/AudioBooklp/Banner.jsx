import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { MRCTA } from '..'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Images 
import logo5 from "media/assets/audiobook/banner-5.svg"
import Book1 from "media/assets/audiobook/banner-book1.svg"
import Book2 from "media/assets/audiobook/banner-book2.svg"
import Book4 from "media/assets/audiobook/banner-book4.svg"
import Prev from "media/assets/audiobook/prev.png"
import Next from "media/assets/audiobook/next.png"
import Pause from "media/assets/audiobook/pause.png"
import play from "media/assets/audiobook/play.png"
import circle from "media/assets/audiobook/circle.png"

const Banner = () => {
    const bannerSlider = {
        dots: false,
        arrows: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        beforeChange: (oldIndex, newIndex) => handleSlideChange(newIndex),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                }
            }
        ]
    };
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const audioRefs = [
        useRef(null),
        useRef(null),
        useRef(null)
    ];

    const togglePlay = () => {
        const audio = audioRefs[currentSlide].current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleSlideChange = index => {
        if (isPlaying) {
            togglePlay(); // Pause current audio if playing
        }
        setCurrentSlide(index);
    };

    useEffect(() => {
        const audio = audioRefs[currentSlide].current;

        const updateProgress = () => {
            const currentProgress = (audio.currentTime / audio.duration) * 100;
            setProgress(currentProgress);
        };

        const handleTimeUpdate = () => {
            audio.addEventListener('timeupdate', updateProgress);
        };

        const cleanup = () => {
            audio.removeEventListener('timeupdate', updateProgress);
        };

        audio.addEventListener('loadedmetadata', handleTimeUpdate);

        return () => {
            cleanup();
        };
    }, [currentSlide]);

    const audioSources = [
        "/Separate-Ways.mp3",
        "/The-Haunting-of-Blackwood-House.mp3",
        "/Wings-of-Fire.mp3"
    ];

    const bookImages = [Book1, Book2, Book4];

    const booksTitle = ["Seperate Ways", "The Haunting Blackwood", "Wings Of Fire"];
    const booksAuthor = ["Carole A Lee", "Carole A Lee", "Carole A Lee"];

    return (
        <section className="pb-[30px] pt-[110px] mr-lg:pt-[80px] bg-[#2E2E2E] mr-lg:bg-[url('/assets/audiobook/banner-bg.png')] bg-cover bg-no-repeat bg-center mt-[-90px]">
            <div className="mr-container">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-12 mr-lg:col-span-6">
                        <div className="txt">
                            <h1 className='text-white text-[35px] mr-lg:text-[40px] mr-xl:text-[50px] leading-[45px] mr-xl:leading-[60px] mr-md:leading-[70px] secondary font-semibold mb-4'>Give Your Manuscript <br className='mr-lg:block hidden' />a Voice With Premium <span className='text-[#3EA99F]'>Audiobook Services!</span></h1>
                            <p className='text-white text-[14px] mr-md:text-[16px] mr-xl:pr-[140px] pb-3'> 
                                With <b>67%</b> of listeners "reading" more through audiobooks, it's time to make your books accessible and move beyond traditional text. Grow your readership by narrating your book with <b>great-sounding audio</b> and enjoy greater reach with our <b>premium audiobook</b> services!
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center justify-start mr-md:gap-4">
                            <div className="w-full mr-md:w-max">
                                <MRCTA link='javascript:void(Tawk_API.toggle())' classes="mt-5 w-full !font-medium" animation="__animatedPing" text="Let’s Chat!" />
                            </div>
                            <div className="w-full mr-md:w-max">
                                <MRCTA link='tel:855-666-6675' classes="mt-5 w-full !border !border-white bg-transparent !text-white" animation="__animatedPing" text="Call Us Now!" />
                            </div>
                        </div>
                        <div className="flex pt-6 mr-lg:pt-9 mr-lg:w-[80%]">
                            <div className="image p-0">
                                <Image src={logo5} alt='PSB' />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 mr-lg:col-span-6">
                        <Slider {...bannerSlider} className='audiobannerSlider relative mr-lg:pt-[50px]'>
                            {audioSources.map((source, index) => (
                                <div key={index}>
                                    <div className="sliderMain pb-[40px] mr-md:pb-[100px] pt-8 lg:pt-0 relative">
                                        <div className="SliderImage ml-auto">
                                            <Image src={bookImages[index]} alt="BSP" />
                                        </div>
                                        <div className="sliderPlayIcon mt-[-100px] ml-[345px] mr-lg:ml-[240px] mr-xl:ml-[345px] mr-3xl:ml-[360px] relative mr-md:block hidden backdrop-blur-xl bg-[#737373]/80 rounded-full w-[240px] h-[240px] z-[999999] p-[20px]">
                                            <Image src={circle} alt='BSP' width={241} height={241} className='ml-auto block ' />
                                            <button onClick={togglePlay} className='playIcon absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                                                {isPlaying ? <Image src={Pause} width={30} height={30} alt='BSP' /> : <Image src={play} alt='BSP' />}
                                            </button>
                                        </div>
                                        <div className="songDetails mt-[-60px] mr-md:mt-[-200px] mr-sm:ml-[35px] mr-md:ml-[130px] mr-lg:ml-[30px] mr-xl:ml-[110px] z-[1] relative px-[20px] py-[20px] rounded-[15px] backdrop-blur-xl bg-[#737373]/80">
                                            <div className="content">
                                                <h3 className='secondary text-[20px] leading-[30px] font-medium text-white '>{booksTitle[index]}</h3>
                                                <p className='text-[14px] text-[#8D8D8D] secondary'>{booksAuthor[index]}</p>
                                                <span className='bg-[#8D8D8D] rounded-[10px] h-[4px] w-[250px] block mt-4 relative'>
                                                    <span
                                                        className='bg-white h-full block absolute top-0 left-0 rounded-[10px]'
                                                        style={{ width: `${progress}%` }}
                                                    ></span>
                                                </span>
                                                <audio ref={audioRefs[index]} src={source} type="audio/mpeg" />
                                                <div className="controls flex items-center justify-center gap-x-4 pt-4">
                                                    <div className="prev">
                                                        <Image src={Prev} alt='BSP' width={15} height={15} />
                                                    </div>
                                                    <div className="pause bg-[#3EA99F] rounded-full w-[40px] h-[40px] flex items-center justify-center">
                                                        <button onClick={togglePlay}>
                                                            {isPlaying ? <Image src={Pause} alt='BSP' width={16} height={16} /> : <Image src={play} alt='BSP' width={18} height={18} className='pl-[3px]' />}
                                                        </button>
                                                    </div>
                                                    <div className="next">
                                                        <Image src={Next} alt='BSP' width={15} height={15} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default Banner
