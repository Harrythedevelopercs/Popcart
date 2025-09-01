import React from 'react'
import Image from 'next/image';
import { MRCTA } from "@/component";
import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useRouter } from "next/router";
import Axios from "axios";
// Images
import formParticle from "media/assets/audiobook/form-particle.png"

const MarketBook = ({
    title = <>Who Should Consider Publishing an <span className='text-[#3EA99F]'> Audiobook?</span></>,
    desc = "Authors of both fiction and non-fiction should consider publishing an audiobook to extend their reach to the largest audience possible. If you're comfortable behind the mic, narrate your own story with our guidance for a personal touch. If not, we can provide a professional narrator to bring your book to life. Stay on the cutting edge of technology and enhance accessibility for your readers. Publishing an audiobook helps you connect with more listeners and ensures your book is available in the most popular formats.",
    formTitle = "Get Your <span class='text-[#3EA99F]'>Free </span> Audiobook Quote!",
    formDesc = "Get an estimate for turning your manuscript into an<br class='mr-lg:block hidden' /> engaging audiobook"
}) => {

    // ===============
    const [ip, setIP] = useState('');
    const [score, setScore] = useState('Submit');
    const [pagenewurl, setPagenewurl] = useState('');
    const router = useRouter();
    const currentRoute = router.pathname;

    useEffect(() => {
        const getIPData = async () => {
            try {
                const res = await Axios.get('https://ipwho.is/');
                setIP(res.data);
            } catch (error) {
                console.error('Error fetching IP data:', error);
            }
        };
        getIPData();
    }, []);

    useEffect(() => {
        const currentUrl = window.location.href;
        console.log(currentUrl);
        setPagenewurl(currentUrl);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const currentdate = new Date().toLocaleString();

        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            comment: e.target.comments.value,
            pageUrl: pagenewurl,
            "IP": `${ip.ip} - ${ip.country} - ${ip.city}`,
            currentdate: currentdate,
        };

        const JSONdata = JSON.stringify(data);

        setScore('Loading');



        try {
            const res = await fetch('/api/email/route', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSONdata
            });

            if (res.status === 200) {
                console.log('Response Successed', res);
            }
        } catch (error) {
            console.error('Error sending data:', error);
        }

        const headersList = {
            'Accept': '*/*',
            'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
            'Authorization': 'Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer',
            'Content-Type': 'application/json'
        };

        const bodyContent = JSON.stringify({
            "IP": `${ip.ip} - ${ip.country} - ${ip.city}`,
            Brand: 'Broadway Publishers',
            Page: currentRoute,
            Date: currentdate,
            Time: currentdate,
            JSON: JSONdata,
        });

        try {
            await fetch('https://sheetdb.io/api/v1/1ownp6p7a9xpi', {
                method: 'POST',
                body: bodyContent,
                headers: headersList
            });
        } catch (error) {
            console.error('Error sending to SheetDB:', error);
        }





        router.push('/ThankYou');
    };

    return (
        <section className='py-[50px] mr-lg:py-[80px] '>
            <div className='mr-container'>
                <div className='grid grid-cols-12 items-center gap-y-5'>
                    <div className='col-span-12 mr-lg:col-span-6'>
                        <div className="txt">
                            <h2 className='text-[25px] mr-md:text-[30px] mr-lg:text-[40px] font-[600] leading-[35px] mr-md:leading-[40px] mr-lg:leading-[50px] secondary pb-3'>{title}</h2>
                            <p className='text-[14px] mr-md:text-[16px] leading-[26px] font-[300] secondary pb-4 mr-xl:mr-5 mr-xl:pr-5 mr-md:text-left text-justify'>{desc}</p>
                            <div className='pb-3'>
                                <div className="w-full mr-md:w-max">
                                    <MRCTA link='javascript:$zopim.livechat.window.show();' classes="mt-5 w-full !font-medium secondary" link="javascript:;" handle="parent.LC_API.open_chat_window();return false;" animation="__animatedPing" text="Let’s Connect!" />
                                </div>
                            </div>
                            <div className='flex flex-wrap items-center gap-y-4 gap-x-5 mr-md:gap-x-0 justify-center mr-md:justify-between mt-5 pt-5'>
                                <div className="flex items-center gap-x-2 mr-md:gap-x-4">
                                    <div className="number">
                                        <span className='mr-md:text-[25px] mr-lg:text-[40px] mr-lg:leading-[48px] font-bold secondary'>10</span>
                                    </div>
                                    <div className="txt">
                                        <p className='text-[#A2A2A2] text-[14px] mr-md:text-[16px] leading-[25px] secondary font-[300]'>Years Of <br className='mr-lg:block hidden' />
                                            Experience</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-2 mr-md:gap-x-4 relative mr-xl:before:content-[''] mr-xl:before:absolute mr-xl:before:bg-[#6DDEFF] mr-xl:before:w-[15px] mr-xl:before:h-[15px] mr-xl:before:rounded-full mr-xl:before:border-4 mr-xl:before:border-[#3EA99F] mr-xl:before:top-[50%] mr-xl:before:translate-y-[-50%] mr-xl:before:left-[-19%] mr-2xl:before:left-[-30%]">
                                    <div className="number">
                                        <span className='mr-md:text-[25px] mr-lg:text-[40px] mr-lg:leading-[48px] font-bold secondary'>474</span>
                                    </div>
                                    <div className="txt">
                                        <p className='text-[#A2A2A2] text-[14px] mr-md:text-[16px] leading-[25px] secondary font-[300]'>Published <br className='mr-lg:block hidden' />
                                            Last 12 Months</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-x-2 mr-md:gap-x-4 relative mr-xl:before:content-[''] mr-xl:before:absolute mr-xl:before:bg-[#6DDEFF] mr-xl:before:w-[15px] mr-xl:before:h-[15px] mr-xl:before:rounded-full mr-xl:before:border-4 mr-xl:before:border-[#3EA99F] mr-xl:before:top-[50%] mr-xl:before:translate-y-[-50%]  mr-xl:before:left-[-25%] mr-2xl:before:left-[-40%]">
                                    <div className="number">
                                        <span className='mr-md:text-[25px] mr-lg:text-[40px] mr-lg:leading-[48px] font-bold secondary'>39</span>
                                    </div>
                                    <div className="txt">
                                        <p className='text-[#A2A2A2] text-[14px] mr-md:text-[16px] leading-[25px] secondary font-[300]'>Published <br className='mr-lg:block hidden' />
                                            Last Month</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mr-lg:col-span-1"></div>
                    <div className='col-span-12 mr-lg:col-span-5'>
                        <div className="form relative overflow-hidden bg-white shadow-2xl py-[20px] mr-md:py-[40px] pl-[45px] pr-[20px] mr-md:pr-[35px] z-0">
                            <div className="image absolute top-0 left-[-32px]">
                                <Image src={formParticle} alt='PSB' />
                            </div>
                            <h3 className='text-center text-[23px] mr-md:text-[30px] leading-[30px] mr-md:leading-[40px] secondary font-[600] mb-3' dangerouslySetInnerHTML={{ __html: formTitle }} />
                            <p className='text-center text-[14px] mr-md:text-[16px] secondary mr-md:leading-[25px] pb-8' dangerouslySetInnerHTML={{ __html: formDesc }} />
                            <form onSubmit={handleSubmit} className='relative z-[999]'>
                                <input type="text" required name="name" placeholder='Full Name *' onkeypress="return /[a-z]/i.test(event.key)" className='text-[#000000] text-[14px] secondary leading-[20px] bg-[#F3F3F3] h-[60px] w-full rounded-[6px] px-4 mb-4 focus:outline-0' />
                                <input type="email" required name="email" placeholder='Email * ' className='text-[#000000] text-[14px] secondary leading-[20px] bg-[#F3F3F3] h-[60px] w-full rounded-[6px] px-4 mb-4 focus:outline-0' />
                                <input type="tel" placeholder='Phone *' minLength="10" maxLength="13" pattern="[0-9]*" name="phone" required className='text-[#000000] text-[14px] secondary leading-[20px] bg-[#F3F3F3] h-[60px] w-full rounded-[6px] px-4 mb-4 focus:outline-0' />
                                <textarea placeholder='Message' name='comments' className='text-[#000000] text-[14px] secondary leading-[20px] bg-[#F3F3F3] h-[116px] w-full rounded-[6px] px-4 py-2 resize-none mb-4 focus:outline-0'></textarea>
                                <button className='w-full h-[45px] rounded-[6px] bg-[#2E2E2E] text-white secondary font-[300] leading-[20px]'>{score}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MarketBook
