import Image from "next/image";
import Banner from "media/blog-new/hero.png"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Axios from "axios";
const Hero = () => {
    const [ip, setIP] = useState('');
    //creating function to load ip address from the API
    const getIPData = async () => {
        const res = await Axios.get('https://ipwho.is/');
        setIP(res.data);
    }
    useEffect(() => {
        getIPData()
    }, [])

    const [score, setScore] = useState('Subscribe');

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
            email: e.target.email.value,
            pageUrl: pagenewurl,
            "IP": `${ip.ip} - ${ip.country} - ${ip.city}`,
            currentdate: currentdate,
        }

        const JSONdata = JSON.stringify(data)

        setScore('Loading');
        console.log(JSONdata);


        fetch('api/email/route', {
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
        <section className="font-sans">
            <div className="relative z-10 mr-md:pt-[150px] pt-[125px] mr-lg:pb-[80px] mt-md:pb-[60px] pb-[40px] mr-md:h-screen mr-md:flex mr-md:items-center mr-md:flex-col">
                <Image src={Banner} alt="heroBanner" className="absolute bg-primary-100 top-0 left-0 right-0 bottom-0 -z-10 w-full h-full object-cover" priority={true} />
                <div className="mr-container">
                    <div className="mr-sm:text-center text-justify text-white">
                        <h1 className="mr-xl:text-[50px] mr-lg:text-[40px] mr-md:text-[30px] text-[25px] leading-tight font-medium mb-3">Conquer Tech With Broadway Publishers : <br className="mr-lg:block hidden" /> Your Path To Unstoppable Progress!</h1>
                        <p className="text-base leading-normal font-normal">We’re A Software Development Company That Ensures Its Expertise Extends To Offer A Seamlessly Productive And Growth-Oriented <br className="mr-lg:block hidden" /> Partnership To Its Client’s Goals, And Internal Teams.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-8">
                        <div className="bg-[#242424] bg-opacity-90 border-2 border-white flex mr-md:w-[65%] mx-auto p-[6px] rounded-[10px]">
                            <input type="email" placeholder="Enter Your Email Address" name="email" id="email" required={true} className="block w-full bg-transparent ps-4 placeholder:text-white placeholder:opacity-50 focus-visible:outline-none text-white font-normal text-sm leading-normal" />
                            <button className="bg-primary-100 text-white text-lg block mr-sm:w-[35%] w-[55%] rounded-[10px] py-[10px]">{score}</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Hero;