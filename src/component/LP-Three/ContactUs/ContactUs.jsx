import Image from "next/image";
import Banner from "media/book-illustrations/contactBanner.png"
import Call from "media/book-illustrations/callIconBlue.svg"
import Email from "media/book-illustrations/email.svg"
import Location from "media/book-illustrations/location.svg"
import Avater from "media/book-illustrations/avater.png"
import Alien from "media/book-illustrations/banifits/3.png"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Axios from "axios";
const ContactUs = () => {
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
        <section id="contact">
            <div className="relative z-10 mr-md:py-[60px] py-[40px]">
                <Image src={Banner} alt="heroBanner" className="absolute top-0 left-0 right-0 bottom-0 -z-10 w-full h-full object-cover" priority={true} />
                <div className="mr-container">
                    <div className="grid grid-cols-12 mr-lg:gap-x-5 gap-5 items-center">
                        <div className="mr-xl:col-span-7 mr-lg:col-span-6 col-span-12 text-white">
                            <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] leading-tight font-semibold mb-3">Hire the Best Children’s Book Illustrators for Your Project!</h2>
                            <p className="mr-md:text-base text-sm leading-normal font-normal">We have a talented team of book illustrators ready to bring your story to life. Every project includes expert management to ensure your book illustrations are perfect. Fill out our inquiry form for children's book illustration services, and we'll promptly provide you with an estimate.</p>
                            <div className="my-8">
                                <a href="mailto:info@broadwaypublishers.com" className="flex items-center gap-x-3 mb-3">
                                    <span className="block"><Image src={Email} alt="icons" width={20} height={20} /></span>
                                    <span className="block">info@broadwaypublishers.com</span>
                                </a>
                                <a href="tel:5127622397 " className="flex items-center gap-x-3 mb-3">
                                    <span className="block"><Image src={Call} alt="icons" width={20} height={20} /></span>
                                    <span className="block">512 762 2397 </span>
                                </a>
                                <a href="javascript:;" target="_blank" className="flex items-center gap-x-3 mb-3">
                                    <span className="block"><Image src={Location} alt="icons" width={20} height={20} /></span>
                                    <span className="block">15-312 79th St, Howard Beach, NY 11414, USA </span>
                                </a>
                            </div>
                            <div className="flex mr-sm:flex-nowrap flex-wrap mr-sm:w-max mr-sm:gap-x-5 gap-5 items-center pt-6 border-t border-[#8A8A8A]">
                                <Image src={Avater} alt="avater" className="block" />
                                <div>
                                    <h5 className="text-[#3EA99F] mr-md:text-[20px] text-lg leading-normal font-bold mb-3">Make Your Book a Visual Delight with Illustrations!</h5>
                                    <p className="text-base leading-normal font-normal">We create beautiful illustrations that make your book visually <br className="mr-sm:block hidden" />
                                        captivating, focusing on quality and creativity.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mr-xl:col-span-5 mr-lg:col-span-6 col-span-12">
                            <div className="relative z-20 text-center mr-sm:w-[80%] px-5 py-[40px] rounded-3xl bg-white mx-auto border border-[#DCDCDC]">
                                <Image src={Alien} alt="icon" width={70} height={70} className="absolute -top-6 mr-sm:-left-6 -left-4 z-30 w-[18%] h-[16%] object-contain" priority={true} />
                                <h3 className="mr-md:text-[30px] text-[25px] font-medium leading-tight text-black mb-3">Request A <span className="text-[#3EA99F]">Free</span> Quote</h3>
                                <p className="mr-md:text-base text-sm font-normal text-black leading-normal">Find out how much it will cost to illustrate a children’s book</p>
                                <form onSubmit={handleSubmit} className="mt-8">
                                    <div className="flex justify-between gap-x-5">
                                        <input type="text" required name="name" placeholder="Full Name *" onkeypress="return /[a-z]/i.test(event.key)" className="block bg-[#000] bg-opacity-30 focus-visible:outline-primary-100 w-full rounded-xl px-4 py-4 mb-4 placeholder:text-white font-medium" />
                                        <input type="email" required name="email" placeholder="Email *" className="block bg-[#000] bg-opacity-30 focus-visible:outline-primary-100 w-full rounded-xl px-4 py-4 mb-4 placeholder:text-white font-medium" />
                                    </div>
                                    <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name="phone" placeholder="Phone" required className="block bg-[#000] bg-opacity-30 focus-visible:outline-primary-100 w-full rounded-xl px-4 py-4 mb-4 placeholder:text-white font-medium" />
                                    <textarea className="resize-none bg-[#000] bg-opacity-30 focus-visible:outline-primary-100 w-full rounded-xl px-4 pt-4 pb-10 mb-4 placeholder:text-white" id="message" name="comments" placeholder="Message"></textarea>
                                    <button type="submit" className="__animatedPing bg-[#000] text-white w-max px-16 mx-auto block rounded-full py-3 hover:bg-black transition-all duration-300 ease-in-out">{score}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ContactUs;