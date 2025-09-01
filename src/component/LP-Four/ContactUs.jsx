import Image from "next/image";
// Images
import Call from "media/book-illustrations/callIconBlue.svg"
import Email from "media/book-illustrations/email.svg"
import Location from "media/book-illustrations/location.svg"
import Avater from "media/book-illustrations/avater.png"
import formParticle from "media/assets/audiobook/form-particle.png"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Axios from "axios";

const ContactUs = () => {
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

        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        const raw = JSON.stringify({
            fields: [
                {
                    objectTypeId: '0-1',
                    name: 'email',
                    value: e.target.email.value
                },
                {
                    objectTypeId: '0-1',
                    name: 'firstname',
                    value: e.target.name.value
                },
                {
                    objectTypeId: '0-1',
                    name: 'phone',
                    value: e.target.phone.value
                },
                {
                    objectTypeId: '0-1',
                    name: 'message',
                    value: e.target.comments.value
                }
            ],
            context: {
                ipAddress: ip.IPv4,
                pageUri: pagenewurl,
                pageName: pagenewurl
            },
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            const response = await fetch('https://api.hsforms.com/submissions/v3/integration/submit/46656315/524aec68-a41e-4446-87d5-416ce22cfde6', requestOptions);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error('Error submitting to HubSpot:', error);
        }

        router.push('/ThankYou');
    };

    return (
        <section id="contact">
            <div className="relative z-10 mr-md:py-[60px] py-[40px] bg-[#282828]">
                <div className="mr-container">
                    <div className="grid grid-cols-12 mr-lg:gap-x-5 gap-5 items-center">
                        <div className="mr-xl:col-span-7 mr-lg:col-span-6 col-span-12 text-white">
                            <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] leading-tight font-semibold mb-3">10,000 Hits and Counting! Let Your Book Be the Next Bestseller!</h2>
                            <p className="mr-md:text-base text-sm leading-normal font-normal">Our expert publishing services have helped countless authors succeed, reaching impressive milestones with over 10,000 hits. We provide comprehensive support, including manuscript evaluation, strategic marketing, and professional design. </p>
                            <p className="mr-md:text-base text-sm leading-normal font-normal mt-4">Our dedicated team focuses on maximizing visibility, driving sales, and building your author brand. Let us transform your manuscript into the next bestseller, connecting with readers and making a lasting impact in the literary world.</p>
                            <div className="my-8">
                                <a href="mailto:info@broadwaypublishers.com" className="flex items-center gap-x-3 mb-3">
                                    <span className="block"><Image src={Email} alt="icons" width={20} height={20} /></span>
                                    <span className="block">info@broadwaypublishers.com</span>
                                </a>
                                <a href="tel:5127622397" className="flex items-center gap-x-3 mb-3">
                                    <span className="block"><Image src={Call} alt="icons" width={20} height={20} /></span>
                                    <span className="block">512 762 2397</span>
                                </a>
                                <a href="javascript:;" target="_blank" className="flex items-center gap-x-3 mb-3">
                                    <span className="block"><Image src={Location} alt="icons" width={20} height={20} /></span>
                                    <span className="block">9518 Mykawa Road, Houston, TX 77048 </span>
                                </a>
                            </div>
                            <div className="flex mr-sm:flex-nowrap flex-wrap mr-sm:w-max mr-sm:gap-x-5 gap-5 items-center pt-6 border-t border-[#8A8A8A]">
                                <Image src={Avater} alt="avater" className="block" />
                                <div>
                                    <h5 className="text-[#3EA99F] mr-md:text-[20px] text-lg leading-normal font-bold mb-3">Let Your Words Take Flight!</h5>
                                    <p className="text-base leading-normal font-normal">Let Broadway Publishers help you discover your inner <br /> author and share your story with the world.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mr-xl:col-span-5 mr-lg:col-span-6 col-span-12 before:top-0 before:shadow-[-30px_0px_5px_-4px_rgba(0,0,0,0.3)] before:absolute before:w-full before:h-full before:right-0 before:bg-[#242424] before:-z-10">
                            <div className="form relative overflow-hidden bg-white shadow-2xl py-[20px] mr-md:py-[40px] pl-[45px] pr-[20px] mr-md:pr-[35px] z-0">
                                <div className="image absolute top-0 left-[-32px]">
                                    <Image src={formParticle} alt='PSB' />
                                </div>
                                <h3 className='text-center text-[23px] mr-md:text-[30px] mb-3 secondary font-[600]'>Get Your Publishing Cost Estimate</h3>
                                <p className='text-center text-[14px] mr-md:text-[16px] secondary mr-md:leading-[25px] pb-8'>Find out how much it will cost to publish your book.</p>
                                <form onSubmit={handleSubmit} className='relative z-[999]'>
                                    <input type="text" required name="name" placeholder='Full Name *' onkeypress="return /[a-z]/i.test(event.key)" className='text-[#000000] text-[14px] secondary leading-[20px] bg-[#F3F3F3] h-[60px] w-full rounded-[6px] px-4 mb-4 focus:outline-0' />

                                    <input type="email" required name="email" placeholder='Email * ' className='text-[#000000] text-[14px] secondary leading-[20px] bg-[#F3F3F3] h-[60px] w-full rounded-[6px] px-4 mb-4 focus:outline-0' />

                                    <input type="tel" placeholder='Phone *' minLength="10" maxLength="13" pattern="[0-9]*" name="phone" required className='text-[#000000] text-[14px] secondary leading-[20px] bg-[#F3F3F3] h-[60px] w-full rounded-[6px] px-4 mb-4 focus:outline-0' />

                                    <textarea placeholder='Message' name="comments" className='text-[#000000] text-[14px] secondary leading-[20px] bg-[#F3F3F3] h-[116px] w-full rounded-[6px] px-4 py-2 resize-none mb-4 focus:outline-0'></textarea>

                                    <button className='w-full h-[45px] rounded-[6px] bg-[#2E2E2E] text-white secondary font-[300] leading-[20px]'>{score}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
