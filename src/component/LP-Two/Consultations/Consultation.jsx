import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Axios from "axios";
// import Banner from "media/book-marketing-company/consultationBanner.png"
// import BannerMockup from "media/book-marketing-company/bannerMockup.png"
const Consultation = ({ title, desc, backgroundImage, mockup }) => {
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
        <section>
            <div className="relative z-10 font-sans mr-lg:py-[80px] mr-md:py-[60px] py-[40px]">
                <Image src={backgroundImage} alt="consultationBanner" className="absolute top-0 left-0 right-0 bottom-0 -z-10 w-full h-full object-cover object-bottom" priority={true} />
                <div className="mr-container">
                    <div className="mr-sm:text-center text-justify text-white mr-xl:w-[75%] mr-md:w-[90%] w-full mx-auto">
                        <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] leading-normal font-medium mb-3" dangerouslySetInnerHTML={{ __html: title }} />
                        <p className="mr-md:text-base text-sm font-normal leading-normal" dangerouslySetInnerHTML={{ __html: desc }} />
                    </div>
                    <div className="grid mr-lg:grid-cols-2 items-center mr-lg:gap-x-10 gap-10 mr-md:mt-16 mt-5">
                        <div >
                            <form onSubmit={handleSubmit} className="mt-8">
                                <input type="text" required name="name" placeholder="Full Name *" onkeypress="return /[a-z]/i.test(event.key)" className="bg-[linear-gradient(180deg,_rgba(83,83,83,0.9)_0%,_rgba(43,43,43,1)_100%)] text-white block w-full border border-[#707070] rounded-2xl px-4 py-4 mb-4 placeholder:text-[#ffffff] font-medium" />
                                <input type="email" required name="email" placeholder="Email *" className="bg-[linear-gradient(180deg,_rgba(83,83,83,0.9)_0%,_rgba(43,43,43,1)_100%)] text-white block w-full border border-[#707070] rounded-2xl px-4 py-4 mb-4 placeholder:text-[#ffffff] font-medium" />
                                <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name="phone" placeholder="Phone No *" required className="bg-[linear-gradient(180deg,_rgba(83,83,83,0.9)_0%,_rgba(43,43,43,1)_100%)] text-white block w-full border border-[#707070] rounded-2xl px-4 py-4 mb-4 placeholder:text-[#ffffff] font-medium" />
                                <textarea className="bg-[linear-gradient(180deg,_rgba(83,83,83,0.9)_0%,_rgba(43,43,43,1)_100%)] text-white resize-none w-full border border-[#707070] rounded-2xl px-4 pt-4 pb-10 mb-4 placeholder:text-[#ffffff]" id="message" name="comments" placeholder="Message"></textarea>
                                <button type="submit" className="__animatedPing bg-[#3EA99F] text-white w-full block rounded-md py-3 hover:bg-secondary-100 transition-all duration-300 ease-in-out">{score}</button>
                            </form>
                        </div>
                        <div>
                            <Image src={mockup} alt="BannerMockup" className="block ms-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Consultation;