import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
// Images
import Email from "media/children-book-lp/email.svg"
import Phone from "media/children-book-lp/phone.svg"
import Location from "media/children-book-lp/location.svg"
import Men from "media/children-book-lp/men-particle.svg"

const BookPublished = () => {
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
        console.log(JSONdata);

        try {
            const res = await fetch('api/email/route', {
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
            legalConsentOptions: {
                consent: {
                    consentToProcess: true,
                    text: 'I agree to allow Example Company to store and process my personal data.',
                    communications: [
                        {
                            value: true,
                            subscriptionTypeId: 999,
                            text: 'I agree to receive marketing communications from Example Company.'
                        }
                    ]
                }
            }
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
        <section className='pt-[50px] mr-lg:pt-[80px] pb-[50px] mr-lg:pb-[80px] relative overflow-hidden'>
            <div className='absolute right-[-195px] mr-2xl:right-[-125px] bottom-[70px] z-[-1] mr-3xl:hidden mr-xl:block hidden'>
                <Image src={Men} alt='Men' className='w-6/12 mr-2xl:w-9/12' />
            </div>
            <div className="mr-container">
                <div className="grid grid-cols-12 gap-y-7 gap-x-4 mr-xl:gap-x-0 items-center">
                    <div className="col-span-12 mr-lg:col-span-6">
                        <div className='mr-3xl:w-11/12'>
                            <h2 className='mr-xl:text-[40px] mr-lg:text-[30px] text-[25px] font-semibold leading-normal text-black mr-2xl:pr-20'>We’ve Published  <span className='text-[#3EA99F] font-normal'>12000+</span> Children’s Books
                                <span className='text-[#3EA99F] font-normal'> with Heart</span> </h2>
                            <p className='mr-md:text-[16px] text-sm font-normal leading-[25px] text-black pt-6'>Your story can be the next best-selling with our expert publishing services. From picture books to chapter books, we offer everything from stunning illustration and hardcover options to easy-to-share digital formats. Our goal is to make sure your book looks beautiful and is available across all major platforms, reaching readers around the world.</p>
                            <p className='mr-md:text-[16px] text-sm font-normal leading-[25px] text-black pt-6 pb-6'>We guarantee to provide you with the best children's book publishing services, ensuring that every detail goes perfect, from formatting your manuscript to creating the perfect cover. With us, you are joining a family of authors who trusted us to bring their stories to life professionally and passionately.</p>
                            <div className="bg-[#3EA99F] rounded-[15px] flex flex-col gap-6 py-4 mr-xl:py-8 px-6">
                                <Link href="mailto:info@broadwaypublishers.com" className='flex items-center gap-x-3'>
                                    <Image src={Email} alt='BSP' className='w-[20px] h-[20px] mr-md:w-auto mr-md:h-auto' />
                                    <span className='text-[15px] mr-md:text-[18px] leading-[24px] text-white font-normal'>info@broadwaypublishers.com</span>
                                </Link>
                                <Link href="tel:(800) 781-9093" className='flex items-center gap-x-3'>
                                    <Image src={Phone} alt='BSP' className='w-[20px] h-[20px] mr-md:w-auto mr-md:h-auto' />
                                    <span className='text-[15px] mr-md:text-[18px] leading-[24px] text-white font-normal'>(800) 781-9093 (Toll Free)</span>
                                </Link>
                                <Link href="#" className='flex items-center gap-x-3'>
                                    <Image src={Location} alt='BSP' className='w-[20px] h-[20px] mr-md:w-auto mr-md:h-auto' />
                                    <span className='text-[15px] mr-md:text-[18px] leading-[24px] text-white font-normal'>15-312 79th St, Howard Beach, NY 11414, USA </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 mr-lg:col-span-6">
                        <div className='shadow-xl px-5 mr-md:px-8 py-10 rounded-[20px] mr-xl:w-9/12 mx-auto relative z-10 bg-white h-full'>
                            <h3 className="mr-md:text-[30px] text-[20px] font-semibold leading-tight text-black text-center mb-3">Request A <span className="text-[#3EA99F] font-normal">Free</span> Quote</h3>
                            <p className="mr-md:text-base text-sm font-normal text-black text-center leading-normal">Cost-effectiveness. Consumer-centric—the crudity of <br className='mr-xl:block hidden' /> book marketing, delivered!</p>
                            <form onSubmit={handleSubmit} className="mt-8">
                                <input type="text" required name="name" placeholder="Full Name *" onkeypress="return /[a-z]/i.test(event.key)" className="block focus-visible:outline-[#3EA99F] w-full border-2 border-[#E1E1E1] rounded-md px-4 py-4 mb-4 placeholder:text-[#B4B4B4] font-medium" />
                                <input type="email" required name="email" placeholder="Email *" className="block focus-visible:outline-[#3EA99F] w-full border-2 border-[#E1E1E1] rounded-md px-4 py-4 mb-4 placeholder:text-[#B4B4B4] font-medium" />
                                <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name="phone" placeholder="Phone No" required className="block focus-visible:outline-[#3EA99F] w-full border-2 border-[#E1E1E1] rounded-md px-4 py-4 mb-4 placeholder:text-[#B4B4B4] font-medium" />
                                <textarea className="resize-none focus-visible:outline-[#3EA99F] w-full border-2 border-[#E1E1E1] rounded-md px-4 pt-4 pb-10 mb-4 placeholder:text-[#B4B4B4]" id="message" name="comments" placeholder="Message"></textarea>
                                <button type="submit" className="__animatedPing bg-[#000] text-white w-full block rounded-md py-3 hover:bg-black transition-all duration-300 ease-in-out">{score}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookPublished
