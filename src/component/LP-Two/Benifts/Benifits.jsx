import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Axios from "axios";

import benifitsBanner from "media/book-marketing-company/benifitsBanner.png"
import benifitsBg from "media/book-marketing-company/benifitsBg.png"
import { MRCTA } from "@/component";
const Benifits = ({ title, desc }) => {
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
                console.log('IP Data:', res.data);
            } catch (error) {
                console.error('Error fetching IP data:', error);
            }
        };
        getIPData();
    }, []);

    useEffect(() => {
        const currentUrl = window.location.href;
        console.log('Current URL:', currentUrl);
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

        console.log('Form Data:', data);

        const JSONdata = JSON.stringify(data);

        setScore('Loading');

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
                console.log('Response Succeeded', res);
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
        <section>
            <div className="relative z-10 mr-md:py-[60px] py-[40px] font-sans">
                <Image src={benifitsBanner} alt="benifitsBanner" className="absolute top-0 left-0 right-0 bottom-0 -z-10 w-full h-full object-cover object-bottom" priority={true} />
                <div className="mr-container">
                    <div className="grid grid-cols-12 mr-lg:gap-x-5 gap-5 items-center">
                        <div className="mr-lg:col-span-7 col-span-12 relative z-10">
                            <Image src={benifitsBg} alt="benifitsBanner" className="absolute top-0 left-0 right-0 bottom-0 -z-10 w-full h-full object-auto" priority={true} />
                            <div className="py-16 w-[85%] mx-auto text-white">
                                <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] font-medium leading-normal mb-2">{title}</h2>
                                <p className="mr-md:text-base text-sm mr-sm:text-start text-justify font-normal leading-normal">{desc}</p>
                                <MRCTA text="Get Free Consultation" classes="bg-black mt-4 mr-md:mb-14 mb-10 mr-md:text-base text-sm hover:bg-transparent hover:border-white" link="javascript:;" handle="parent.LC_API.open_chat_window();return false;" animation="__animatedPing" />
                                <div className="grid grid-cols-12 2xl:gap-x-4 mr-md:gap-2 gap-5 items-center">
                                    <span className="mr-sm:col-span-3 col-span-6 flex items-center mr-2xl:gap-x-2 gap-x-1 border-e">
                                        <h4 className="mr-2xl:text-[40px] mr-xl:text-[30px] mr-sm:text-[25px] text-lg font-bold leading-tight">10</h4>
                                        <p className="mr-2xl:text-[12px] text-[12px] font-normal leading-tight">YEARS OF <br />
                                            EXPERIENCE</p>
                                    </span>
                                    <span className="mr-sm:col-span-4 col-span-6 flex items-center mr-2xl:gap-x-2 gap-x-1 border-e">
                                        <h4 className="mr-2xl:text-[40px] mr-xl:text-[30px] mr-sm:text-[25px] text-lg font-bold leading-tight">474</h4>
                                        <p className="mr-2xl:text-[12px] text-[12px] font-normal leading-tight">PUBLISHED <br />
                                            LAST 12 MONTHS</p>
                                    </span>
                                    <span className="mr-sm:col-span-4 col-span-6 flex items-center mr-2xl:gap-x-2 gap-x-1">
                                        <h4 className="mr-2xl:text-[40px] mr-xl:text-[30px] mr-sm:text-[25px] text-lg font-bold leading-tight">39</h4>
                                        <p className="mr-2xl:text-[12px] text-[12px] font-normal leading-tight">PUBLISHED <br />
                                            LAST MONTH</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="mr-lg:col-span-5 col-span-12 text-center mr-md:w-[90%] w-full px-5 py-[40px] rounded-2xl bg-white ms-auto shadow-[0_0_20px_rgba(0,_0,_0,_0.1)]">
                            <h3 className="mr-md:text-[30px] text-[25px] font-medium leading-tight text-black mb-3">Request A <span className="text-[#3EA99F]">Free</span> Quote</h3>
                            <p className="mr-md:text-base text-sm font-normal text-black leading-normal">Get in touch with out book marketing expert <br /> to discuss in detail</p>
                            <form onSubmit={handleSubmit} className="mt-8">
                                <input type="text" required name="name" placeholder="Full Name *" onkeypress="return /[a-z]/i.test(event.key)" className="block focus-visible:outline-[#3EA99F] w-full border-2 border-[#E1E1E1] rounded-md px-4 py-4 mb-4 placeholder:text-[#B4B4B4] font-medium" />
                                <input type="email" required name="email" placeholder="Email *" className="block focus-visible:outline-[#3EA99F] w-full border-2 border-[#E1E1E1] rounded-md px-4 py-4 mb-4 placeholder:text-[#B4B4B4] font-medium" />
                                <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name="phone" placeholder="Phone" required className="block focus-visible:outline-[#3EA99F] w-full border-2 border-[#E1E1E1] rounded-md px-4 py-4 mb-4 placeholder:text-[#B4B4B4] font-medium" />
                                <textarea className="resize-none focus-visible:outline-[#3EA99F] w-full border-2 border-[#E1E1E1] rounded-md px-4 pt-4 pb-10 mb-4 placeholder:text-[#B4B4B4]" id="message" name="comments" placeholder="Comments.."></textarea>
                                <button type="submit" className="__animatedPing bg-[#3EA99F] text-white w-full block rounded-md py-3 hover:bg-black transition-all duration-300 ease-in-out">{score}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Benifits;