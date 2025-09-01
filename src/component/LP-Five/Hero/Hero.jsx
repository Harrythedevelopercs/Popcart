import { MRCTAGroup } from "@/component";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Axios } from "axios";
import LogosCarousals from "../Logos/LogosCarousal";
import HeroBook from "media/book-marketing-company/heroBook.png"
import Icon1 from "media/book-marketing-company/servicesIcons/16.svg"
import Icon2 from "media/book-marketing-company/servicesIcons/17.svg"
import Icon3 from "media/book-marketing-company/servicesIcons/18.svg"
const Hero = ({ title, desc }) => {
    const [ip, setIP] = useState('');
    const getIPData = async () => {
        try {
            const res = await fetch('https://ipwho.is/');
            const data = await res.json();
            setIP(data);
        } catch (error) {
            console.error('Error fetching IP data:', error);
        }
    };
    useEffect(() => {
        getIPData()
    }, [])

    const [score, setScore] = useState('Submit');

    const router = useRouter();
    const currentRoute = router.pathname;
    const [pagenewurl, setPagenewurl] = useState('');
    useEffect(() => {
        const pagenewurl = window.location.href;
        console.log(pagenewurl);
        setPagenewurl(pagenewurl);
    }, []);

    const handleSubmit = async (e) => {

        e.preventDefault()
        var currentdate = new Date().toLocaleString() + ''

        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            pageUrl: pagenewurl,
            "IP": `${ip.ip} - ${ip.country} - ${ip.city}`,
            currentdate: currentdate,
        }

        const JSONdata = JSON.stringify(data)

        setScore('Loading');
        console.log(JSONdata);


        fetch('/api/email/route', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSONdata
        }).then((res) => {
            console.log(`Response received ${res}`)
            if (res.status === 200) {
                console.log(`Response Successed ${res}`)
            }
        })

        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
            "IP": `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
            "Brand": "Broadway Publishers",
            "Page": `${currentRoute}`,
            "Date": currentdate,
            "Time": currentdate,
            "JSON": JSONdata,

        });



        await fetch("https://sheetdb.io/api/v1/1ownp6p7a9xpi", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });


        const { pathname } = router;
        if (pathname == pathname) {
            window.location.href = '/ThankYou';
        }

    }
    return (
        <section className="relative z-10 bg-[#272727]">
            <div className="font-sans mr-md:pt-[130px] pt-[120px] mr-lg:pb-[80px] mr-md:pb-[60px] pb-[40px]">
                <div className="mr-container">
                    <div className="grid mr-md:grid-cols-2 grid-cols-1 mr-md:gap-0 gap-5 items-center">
                        <div className="mr-sm:text-start text-justify text-white">
                            <h1 className="mr-xl:text-[50px] mr-lg:text-[40px] mr-md:text-[30px] text-[25px] leading-tight font-bold mb-3" dangerouslySetInnerHTML={{ __html: title }} />
                            <p className="mr-md:text-base leading-normal text-sm font-normal" dangerouslySetInnerHTML={{ __html: desc }} />
                            <MRCTAGroup classes="mt-8" animation="__animatedPing" text1="Get Free Consultation" text2="Call Us Now!" />
                            <LogosCarousals />
                        </div>
                        <div className="relative">
                            <Image src={HeroBook} alt="HeroBook" className="mr-md:block hidden mr-2xl:max-w-max mr-lg:max-w-[80%] mr-lg:me-auto mr-lg:mx-0 mx-auto" />
                            <div className="mr-lg:absolute mr-lg:bottom-16 mr-lg:right-0 mr-lg:block hidden">
                                <div className="flex gap-x-2">
                                    <div className="bg-primary-100 p-2 rounded-xl w-max h-max">
                                        <Image src={Icon2} alt="Icons" className="block" draggable={false} />
                                    </div>
                                    <div className="text-white mb-3">
                                        <h4 className="mr-2xl:text-[40px] mr-xl:text-[35px] text-lg leading-none font-bold mb-px">99%</h4>
                                        <span className="block mr-xl:text-base text-sm leading-normal font-normal">Customer <br /> Satisfaction</span>
                                    </div>
                                </div>
                                <div className="flex gap-x-2">
                                    <div className="bg-primary-100 p-2 rounded-xl w-max h-max">
                                        <Image src={Icon1} alt="Icons" className="block" draggable={false} />
                                    </div>
                                    <div className="text-white mb-3">
                                        <h4 className="mr-2xl:text-[40px] mr-xl:text-[35px] text-lg leading-none font-bold mb-px">5,000+</h4>
                                        <span className="block mr-xl:text-base text-sm leading-normal font-normal">Customers in 50+ <br />Countries</span>
                                    </div>
                                </div>
                                <div className="flex gap-x-2">
                                    <div className="bg-primary-100 p-2 rounded-xl w-max h-max">
                                        <Image src={Icon3} alt="Icons" className="block" draggable={false} />
                                    </div>
                                    <div className="text-white mb-3">
                                        <h4 className="mr-2xl:text-[40px] mr-xl:text-[35px] text-lg leading-none font-bold mb-px">200%</h4>
                                        <span className="block mr-xl:text-base text-sm leading-normal font-normal">Increase In <br /> Sales </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="bg-white bg-opacity-20 mr-md:py-10 py-5 mr-md:px-10 px-5 rounded-xl mt-10">
                        <div className="grid mr-md:grid-cols-4 mr-sm:grid-cols-2 grid-cols-1 mr-md:gap-x-5 gap-5 items-center">
                            <input type="text" required name="name" placeholder="Full Name *" onkeypress="return /[a-z]/i.test(event.key)" className="block bg-[#ECECEC] bg-opacity-30 focus-visible:outline-[#3EA99F] w-full rounded-md px-4 py-3 placeholder:text-[#ffffff] font-medium" />
                            <input type="email" required name="email" placeholder="Email *" className="block bg-[#ECECEC] bg-opacity-30 focus-visible:outline-[#3EA99F] w-full rounded-md px-4 py-3 placeholder:text-[#ffffff] font-medium" />
                            <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name="phone" placeholder="Phone" required className="block bg-[#ECECEC] bg-opacity-30 focus-visible:outline-[#3EA99F] w-full rounded-md px-4 py-3 placeholder:text-[#ffffff] font-medium" />
                            <button type="submit" className="__animatedPing bg-[#3EA99F] text-white w-full block rounded-md py-3 hover:bg-black transition-all duration-300 ease-in-out">{score}</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Hero;