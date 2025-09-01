import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Axios } from 'axios'
import Image from 'next/image'
// Images
import Writer1 from "media/newBrandv2/writer1.png"
import BrandCarousal from '../Brands/BrandCarousal'
const ProfessionalWriters = () => {
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
            pageUrl: pagenewurl,
            "IP": `${ip.ip} - ${ip.country} - ${ip.city}`,
            currentdate: currentdate,
        };

        const JSONdata = JSON.stringify(data);

        setScore('Sending');
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
        <section className='pt-10 pb-12 mr-xl:py-20'>
            <div className="max-w-7xl mx-auto px-4 mr-md:px-8 mr-2xl:px-0">
                <div className="grid grid-cols-12 gap-x-6 mr-xl:gap-x-12">
                    <div className="col-span-12 mr-xl:col-span-4 mr-xl:block hidden">
                        <Image src={Writer1} alt='Writers Book' className='h-full' />
                    </div>
                    <div className="col-span-12 mr-xl:col-span-8">
                        <div className="content text-center mr-md:text-left">
                            <h2 className='text-[30px] mr-md:text-[45px] mr-xl:text-[53px] leading-[40px] mr-md:leading-[55px] mr-xl:leading-[60px] font-semibold capitalize dm-serif mb-4'>
                                Professional Book Writers are here to help you!
                            </h2>
                            <p className='text-[14px] mr-md:text-[15px] poppins font-[500]'>At our core, we believe in the power of every story. Our dedicated book writers bring your ideas to life with meticulous care and craftsmanship. Achieving excellence requires unwavering commitment and hard work, qualities ingrained in our team. To craft compelling narratives, we rely on gathering the essential details from our manuscript writing project brief—the foundational step toward your success.</p>
                        </div>
                        <div className="form bg-[#65C7E4] rounded-[10px] pt-[20px] pb-[15px] mr-md:py-[15px] px-[20px] mr-md:px-[25px] mt-5">
                            <h3 className='text-[30px] mr-md:text-[35px] leading-tight font-semibold text-white dm-serif text-center mr-md:text-left '>Ignite Your Strory Get Started Now</h3>
                            <form onSubmit={handleSubmit} className='pb-[10px] mt-3 mr-md:mt-6'>
                                <div className="grid grid-cols-1 mr-md:grid-cols-2 mr-xl:grid-cols-4 gap-4">
                                    <div className="name">
                                        <input type="text" name='name' placeholder='Name' className='text-[15px] placeholder:text-[12px] placeholder:font-[500] placeholder:italic poppins text-[#0B0E1080] w-full h-[45px] rounded-[50px] shadow-[0px_0px_40px_0px_#00000026] focus:outline-none px-4' />
                                    </div>
                                    <div className="email">
                                        <input type="email" name='email' placeholder='Email' className='text-[15px] placeholder:text-[12px] placeholder:font-[500] placeholder:italic poppins text-[#0B0E1080] w-full h-[45px] rounded-[50px] shadow-[0px_0px_40px_0px_#00000026] focus:outline-none px-4' />
                                    </div>
                                    <div className="phone">
                                        <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name="phone" placeholder='Phone' className='text-[15px] placeholder:text-[12px] placeholder:font-[500] placeholder:italic poppins text-[#0B0E1080] w-full h-[45px] rounded-[50px] shadow-[0px_0px_40px_0px_#00000026] focus:outline-none px-4' />
                                    </div>
                                    <div className="btn">
                                        <button className='text-[15px] leading-[26px] font-semibold tracking-[3px] dm-serif bg-black text-white rounded-full w-full h-[45px] uppercase'>
                                            {score}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="flex flex-col mr-md:flex-row items-center gap-y-5 pt-4 mr-lg:pt-6 mr-xl:pt-10">
                            <div className="w-full mr-md:w-[40%]">
                                <h4 className='text-[20px] mr-lg:text-[25px] mr-2xl:text-[30px] leading-[30px] mr-xl:leading-[35px] mr-2xl:leading-[40px] font-semibold dm-serif capitalize text-center mr-md:text-left'>Awards that validate our impactful Book solutions!</h4>
                            </div>
                            <div className="slider w-full mr-md:w-[75%]">
                                <BrandCarousal />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfessionalWriters
