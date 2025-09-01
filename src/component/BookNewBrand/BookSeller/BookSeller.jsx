import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Axios } from 'axios'
import Link from 'next/link'
import Image from 'next/image'
// Images
import Email from "media/newBrandv2/email.png"
import Teliphone from "media/newBrandv2/tell.svg"
import Location from "media/newBrandv2/location.png"

const BookSeller = () => {
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
        <section className='bg-[#f7f8f9] pb-12 mr-xl:pb-20'>
            <div className="max-w-7xl mx-auto px-4 mr-md:px-8 mr-2xl:px-0">
                <div className="bg-white border border-[#e1e1e1] rounded-[20px] py-8 mr-md:py-12 px-6 mr-md:px-10 shadow-[8px_9px_35px_0px_#92929233]">
                    <div className="grid grid-cols-12 gap-y-10 items-center">
                        <div className="col-span-12 mr-lg:col-span-6">
                            <h2 className='text-[30px] mr-md:text-[45px] mr-xl:text-[53px] leading-[40px] mr-md:leading-[55px] mr-xl:leading-[60px] font-semibold capitalize dm-serif mb-2 text-center mr-md:text-left'>Let's Turn Your Book Into A Best Seller.</h2>
                            <p className='text-[14px] mr-md:text-[15px] poppins font-[500] text-center mr-md:text-left pb-4 mr-lg:pb-7'>Unlocking cost-effectiveness and consumer-centricity: redefining book marketing with finesse!</p>
                            <div>
                                <div className="flex flex-col mr-xl:flex-row mr-xl:items-center mr-xl:gap-x-12 gap-y-5 pb-3 mr-lg:pb-4">
                                    <Link href="mailto:info@broadwaypublishers.com" className='flex items-center gap-2 text-[14px] mr-md:text-[15px] poppins font-[500] break-all'>
                                        <Image src={Email} alt='Email Icon' className='w-[30px] h-[30px]' />
                                        info@broadwaypublishers.com
                                    </Link>
                                    <Link href="tel:(800) 781-9093" className='flex items-center gap-2 text-[14px] mr-md:text-[15px] poppins font-[500]'>
                                        <Image src={Teliphone} alt='Email Icon' className='w-[30px] h-[25px]' />
                                        855-666-6675
                                    </Link>
                                </div>
                                <Link href="#" className='flex items-center gap-2 text-[14px] mr-md:text-[15px] poppins font-[500]'>
                                    <Image src={Location} alt='Email Icon' className='w-[30px] h-[30px]' />
                                    9518 Mykawa Road, Houston, TX 77048
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-12 mr-lg:col-span-6">
                            <form onSubmit={handleSubmit} className='mr-lg:w-11/12 mr-xl:w-10/12 ml-auto'>
                                <div className="name pb-4">
                                    <input type="text" name='name' placeholder='Full Name' className='bg-[#f3f3f3] border border-[#e1e1e1] placeholder:text-[#73858F] placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[22px] text-[15px] poppins text-black w-full h-[55px] rounded-full px-4 focus:outline-0' />
                                </div>
                                <div className="email pb-4">
                                    <input type="email" name='email' placeholder='Email' className='bg-[#f3f3f3] border border-[#e1e1e1] placeholder:text-[#73858F] placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[22px] text-[15px] poppins text-black w-full h-[55px] rounded-full px-4 focus:outline-0' />
                                </div>
                                <div className="phone pb-4">
                                    <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name="phone" placeholder='Phone' className='bg-[#f3f3f3] border border-[#e1e1e1] placeholder:text-[#73858F] placeholder:text-[154x] placeholder:font-[400] placeholder:leading-[22px] text-[15px] poppins text-black w-full h-[55px] rounded-full px-4 focus:outline-0' />
                                </div>
                                <div className="message pb-3">
                                    <textarea name="comments" placeholder='Description' className='bg-[#f3f3f3] border border-[#e1e1e1] placeholder:text-[#73858F] placeholder:text-[154x] placeholder:font-[400] placeholder:leading-[22px] text-[15px] poppins text-black w-full h-[130px] rounded-[18px] px-4 focus:outline-0 pt-3'></textarea>
                                </div>
                                <button className='bg-[#65c7e4] hover:bg-black hover:duration-700 duration-700 ease-in-out rounded-full shadow-[0_5px_15px_0px_#1B31372B] border border-white w-full h-[55px] px-4 mr-lg:px-6 flex items-center justify-center text-white poppins uppercase text-[15px] mr-md:text-[18px] italic tracking-widest font-[700]'>
                                    {score}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookSeller
