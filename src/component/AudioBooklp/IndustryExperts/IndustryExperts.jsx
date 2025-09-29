import Image from "next/image";
import Avater from "media/book-marketing-company/avater.png"
// import IndustryExpertsBanner from "media/book-marketing-company/IndustryExpertsBanner.png"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Axios from "axios";
// Images
import Email from "media/assets/audiobook/email.svg"
import Phone from "media/assets/audiobook/phone.svg"
import Location from "media/assets/audiobook/location.svg"
const IndustryExperts = ({ title, desc, descTwo, isContact, bannerBg }) => {
    // ===============
    const [ip, setIP] = useState('');
    const [score, setScore] = useState('Apply For It');
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
        <section id="contact">
            <div className="font-sans relative z-10 mr-lg:my-16 mr-lg:py-0 mr-md:py-[60px] py-[40px]">
                <Image src={bannerBg} alt="IndustryExpertsBanner" className="absolute mr-xl:top-[4%] mr-lg:top-[5%] left-0 right-0 bottom-0 -z-10 w-full mr-lg:h-[92%] h-full object-cover" priority={true} />
                <div className="mr-container">
                    <div className="grid mr-lg:grid-cols-12 grid-cols-1 mr-lg:gap-x-5 gap-10 items-center">
                        <div className="mr-2xl:col-span-6 mr-lg:col-span-7 text-white mr-sm:text-start text-justify">
                            <h2 className="mr-xl:text-[40px] mr-md:text-[30px] text-[25px] leading-normal font-medium mb-3" dangerouslySetInnerHTML={{ __html: title }} />
                            <p className="mr-md:text-base text-sm leading-normal font-normal pb-5" dangerouslySetInnerHTML={{ __html: desc }} />
                            {isContact ? null : (<p className="mr-md:text-base text-sm leading-normal font-normal pb-10" dangerouslySetInnerHTML={{ __html: descTwo }} />)}
                            {isContact ? (
                                <div className="contacts">
                                    <a href="mailto:info@broadwaypublishers.com" className="flex items-center gap-x-4 text-[14px] mr-md:text-[18px] secondary font-[300] mb-5">
                                        <Image src={Email} alt="PSB" width={20} height={20} />
                                        <span>info@broadwaypublishers.com</span>
                                    </a>
                                    <a href="tel:5127622397" className="flex items-center gap-x-4 text-[14px] mr-md:text-[18px] secondary font-[300] mb-5">
                                        <Image src={Phone} alt="PSB" width={20} height={20} />
                                        <span>512 762 2397</span>
                                    </a>
                                    <a href="javascript:;" className="flex items-center gap-x-4 text-[14px] mr-md:text-[18px] secondary font-[300] mb-5">
                                        <Image src={Location} alt="PSB" width={20} height={20} />
                                        <span>15-312 79th St, Howard Beach, NY 11414, USA </span>
                                    </a>
                                </div>
                            ) : null}
                            <div className="flex mr-sm:flex-nowrap flex-wrap mr-sm:gap-x-5 gap-5 items-center pt-10 border-t border-white">
                                <Image src={Avater} alt="avater" className="block" />
                                <div>
                                    <h5 className="text-[#3EA99F] mr-md:text-[20px] text-lg leading-normal font-bold mb-3">Transform Your Story into a Sonic Experience!</h5>
                                    <p className="text-base leading-normal font-normal">Let us craft your manuscript into a compelling audiobook, delivering a memorable listening experience that brings your story to life and reaches audiences far and wide.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mr-lg:col-span-5 text-center mr-md:w-[90%] w-full px-5 py-[40px] rounded-2xl bg-white ms-auto shadow-[0_0_20px_rgba(0,_0,_0,_0.1)]">
                            <h3 className="mr-md:text-[25px] text-[20px] font-medium leading-tight text-black mb-3">Get Your <span className="text-[#3EA99F]">Audiobook Production</span> Quote</h3>
                            <p className="mr-md:text-base text-sm font-normal text-black leading-normal">Discover the cost of turning your book into a professionally <br /> narrated audiobook.</p>
                            <form onSubmit={handleSubmit} className="mt-8">
                                <input type="text" required name="name" placeholder="Full Name *" onkeypress="return /[a-z]/i.test(event.key)" className="block focus-visible:outline-[#3EA99F] w-full border-2 border-[#E1E1E1] rounded-md px-4 py-4 mb-4 placeholder:text-[#B4B4B4] font-medium" />
                                <input type="email" required name="email" placeholder="Email *" className="block focus-visible:outline-[#3EA99F] w-full border-2 border-[#E1E1E1] rounded-md px-4 py-4 mb-4 placeholder:text-[#B4B4B4] font-medium" />
                                <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name="phone" placeholder="Phone No" required className="block focus-visible:outline-[#3EA99F] w-full border-2 border-[#E1E1E1] rounded-md px-4 py-4 mb-4 placeholder:text-[#B4B4B4] font-medium" />
                                <textarea className="resize-none focus-visible:outline-[#3EA99F] w-full border-2 border-[#E1E1E1] rounded-md px-4 pt-4 pb-10 mb-4 placeholder:text-[#B4B4B4]" id="message" name="comments" placeholder="Message"></textarea>
                                <button type="submit" className="__animatedPing bg-[#3EA99F] text-white w-full block rounded-md py-3 hover:bg-black transition-all duration-300 ease-in-out">{score}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default IndustryExperts;