// Media
import Bg from "media/lp-four/secondaryFormBg.png"
import Banner from "media/lp-four/secondaryFormBanner.png"
// Next
import Image from "next/image"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
// Axios
import Axios from "axios"


export default function SecondaryForm() {
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
            <div className="mr-lg:py-[80px] mr-md:py-[60px] py-[40px]">
                <div className="mr-container">
                    <div className="relative w-[90%] mx-auto mr-lg:w-full z-10 py-[50px] mr-lg:py-0 mr-lg:h-[360px] mr-xl:h-[430px] mr-2xl:h-[480px]">
                        <Image src={Bg} alt="bg" fill={true} className="-z-10 object-cover object-bottom rounded-[20px]" />
                        <Image src={Banner} alt="banner" className="hidden mr-lg:block absolute bottom-0 left-0 w-[55%] mr-xl:w-[57%] mr-2xl:w-[55%]" />
                        <div className="text-white mr-lg:w-[400px] mr-xl:w-[450px] mr-2xl:w-[520px] ml-auto mr-lg:mr-[40px] flex flex-col justify-center h-full mr-xs:px-5 mr-sm:px-10 mr-lg:px-0">
                            <h2 className="mr-xs:text-[30px] mr-sm:text-[35px] mr-lg:text-[30px] mr-xl:text-[40px] font-semibold leading-tight mb-[15px]">
                                Land on the Bestseller List Next!
                            </h2>
                            <p className="mr-xs:text-[14px] mr-sm:text-[16px] mr-lg:text-[14px] mr-xl:text-[16px] leading-relaxed font-normal">
                                Achieve bestseller status with our expert book publishing services. Fill out the form now for a free consultation session!
                            </p>
                            <form onSubmit={handleSubmit} className="mt-[15px]">
                                <div className="grid mr-xs:grid-cols-1 mr-sm:grid-cols-2 gap-5 mb-5">
                                    <div>
                                        <input type="text" required name="name" placeholder="Full Name *" onkeypress="return /[a-z]/i.test(event.key)" className="h-[45px] w-full bg-[#2CAACE] focus:outline-none px-2 text-[14px] font-normal placeholder:text-white rounded-[6px]" />
                                    </div>
                                    <div>
                                        <input type="email" required name="email" placeholder="Email *" className="h-[45px] w-full bg-[#2CAACE] focus:outline-none px-2 text-[14px] font-normal placeholder:text-white rounded-[6px]" />
                                    </div>
                                    <div>
                                        <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name="phone" placeholder="Phone *" required className="h-[45px] w-full bg-[#2CAACE] focus:outline-none px-2 text-[14px] font-normal placeholder:text-white rounded-[6px]" />
                                    </div>
                                    <div>
                                        <input type="text" name="comments" placeholder="Requirements" className="h-[45px] w-full bg-[#2CAACE] focus:outline-none px-2 text-[14px] font-normal placeholder:text-white rounded-[6px]" />
                                    </div>
                                </div>
                                <button type="submit" className="__animatedPing bg-[#2E2E2E] text-white w-full block rounded-md py-3 hover:bg-black transition-all duration-300 ease-in-out">{score}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}