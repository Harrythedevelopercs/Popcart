import Image from "next/image";
import Link from "next/link";
import FilterDropdown from "../FilterDropdown/FilterDropdown";
import { useState, useId, useEffect } from "react";
import { useRouter } from "next/router";
import Axios from "axios";
import Arrow from "media/blog-new/arrowBlack.png"
import Banner1 from "media/blog-new/1.png"
import Banner2 from "media/blog-new/2.png"
import Banner3 from "media/blog-new/3.png"
import Avater from "media/blog-new/avater.png"
import Check from "media/blog-new/check.png"
import { MRCTA } from "@/component";
const Cards = ({ tabs, posts }) => {
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
    const [openIndex, setOpenIndex] = useState(0);
    const toggleAccordion = (i) => {
        setOpenIndex(prevIndex => (prevIndex === i ? null : i));
    };
    const [filter, setFilter] = useState('All');
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [visibleItems, setVisibleItems] = useState(6);

    const handleFilterClick = (selectedOption) => {
        setFilter(selectedOption);
        setVisibleItems(6);
    };

    const handleShowMore = () => {
        setVisibleItems((prev) => prev + 6);
    };

    const handleFilterSubmit = (selectedOption) => {
        setFilter(selectedOption);
    };

    useEffect(() => {
        const initialData = [
            [Banner1, "Blockchain", "Conquer Tech With Broadway Publishers: Your Path To Unstoppable Progress!",
                "Broadway Publishers' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis"],
            [Banner2, "Mobile Application", "Conquer Tech With Broadway Publishers: Your Path To Unstoppable Progress!",
                "Broadway Publishers' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis"],
            [Banner3, "General", "Conquer Tech With Broadway Publishers: Your Path To Unstoppable Progress!",
                "Broadway Publishers' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis"],
            [Banner2, "Mobile Application", "Conquer Tech With Broadway Publishers: Your Path To Unstoppable Progress!",
                "Broadway Publishers' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis"],
            [Banner3, "General", "Conquer Tech With Broadway Publishers: Your Path To Unstoppable Progress!",
                "Broadway Publishers' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis"],
            [Banner1, "Blockchain", "Conquer Tech With Broadway Publishers: Your Path To Unstoppable Progress!",
                "Broadway Publishers' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis"],
            [Banner2, "Mobile Application", "Conquer Tech With Broadway Publishers: Your Path To Unstoppable Progress!",
                "Broadway Publishers' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis"],
            [Banner3, "General", "Conquer Tech With Broadway Publishers: Your Path To Unstoppable Progress!",
                "Broadway Publishers' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis"]
        ];

        setData(initialData);
    }, []);

    useEffect(() => {
        let filtered = [];
        if (filter === 'All') {
            filtered = [...data];
        } else {
            filtered = data.filter(item => item[1] === filter);
        }

        if (filtered.length >= 2) {
            filtered.splice(2, 0, ['special', 'Special']);
        } else {
            filtered.push(['special', 'Special']);
        }

        setFilteredData(filtered);
    }, [filter, data]);


    const options = ['All', 'Blockchain', 'Mobile Application', 'General', 'eCommerce', 'News'];

    return (
        <section>
            <div className="pt-[100px] pb-[80px]">
                <div className="mr-container">
                    <FilterDropdown options={options} onFilterSubmit={handleFilterSubmit} />
                    <div className="grid mr-md:grid-cols-6 mr-sm:grid-cols-3 grid-cols-2 mr-md:gap-0 gap-y-7 mr-md:mt-16 mt-12 w-full mx-auto">
                        {options.map(option => (
                            <button
                                key={option}
                                className={`inline-block pb-2 ${filter === option ? 'border-b-[3px] border-[#F32F53] text-black' : 'text-[#BFBFBF]'}`}
                                onClick={() => handleFilterClick(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <div key={useId()}>
                        <div className="grid mr-lg:grid-cols-3 mr-md:grid-cols-2 grid-cols-1 gap-5 mb-5 mr-md:mt-10 mt-12">
                            {posts.map(({ title, excerpt: desc, slug, bSPCategories, featuredImage, author }, i) => (
                                i === 2 ? (
                                    <>
                                        <div key="unique-card" className="bg-primary-100 rounded-xl flex items-center flex-col justify-center">
                                            <div className="mr-2xl:px-8 px-5 py-6 text-center text-white">
                                                <h4 className="mr-2xl:text-[40px] mr-xl:text-[35px] text-[25px] leading-normal font-semibold mb-4">Top-Quality Articles, Delivered Weekly.</h4>
                                                <p className="text-base leading-normal font-normal">Broadway Publishers' Development Of The Proeye <br className="mr-2xl:block hidden" /> Project, A Wallet Analytics And Search Engine</p>
                                                <form onSubmit={(e) => { e.preventDefault(); }} className="mt-8">
                                                    <div className="bg-[#ffffff] bg-opacity-90 border-2 border-white flex mr-md:w-[100%] mx-auto mb-[50px] p-[6px] rounded-[10px]">
                                                        <input type="email" placeholder="Enter Your Email Address" name="email" id="email" required={true} className="block w-full bg-transparent ps-4 placeholder:text-[#969696] focus-visible:outline-none text-black font-normal text-sm leading-normal" />
                                                        <button className="bg-black text-white text-lg block mr-sm:w-[50%] w-[55%] rounded-[10px] py-[10px]">Subscribe</button>
                                                    </div>
                                                </form>
                                                <span className="block text-sm">By Entering Your Email, You Are Agreeing To Our <Link href="/privacy-policy" target="_blank">Privacy <span className="inline-block border-b-2 border-white">Policy.</span></Link></span>
                                            </div>
                                        </div>



                                        <div key={i} className="bg-[#F3F3F3] rounded-xl">
                                            <div className="border-b border-[#D4D4D4]">
                                                {
                                                    <Link href={`/blogs/${slug}`}>
                                                        <Image src={process.env.NEXT_PUBLIC_MEDIA_ENDPOINT + "/" + featuredImage.node.mediaDetails.file} alt="books" width={440} height={200} className="block mx-auto w-full" />
                                                    </Link>
                                                }
                                                <div className="px-4 py-6">
                                                    {
                                                        bSPCategories?.nodes?.map(({ name }) => (
                                                            <span className="block text-[#F32F53] font-semibold mr-md:text-base text-sm leading-normal capitalize">{name}</span>
                                                        ))
                                                    }
                                                    <h4 className="mr-md:text-[20px] text-base leading-normal font-semibold text-[#000] mb-4">
                                                        <Link href={`/blogs/${slug}`}>{title}</Link>
                                                    </h4>
                                                    <div className="mr-md:text-sm text-xs leading-normal font-normal" dangerouslySetInnerHTML={{ __html: desc.slice(0, 200) }} />
                                                    <Link href={`/blogs/${slug}`} className="mr-md:text-base text-sm flex items-center ms-auto mt-5 gap-x-2 border-b-2 border-black w-max">
                                                        <span className="block">Read More</span>
                                                        <span><Image src={Arrow} alt="arrow" className="block" /></span>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="px-4 py-8">
                                                <div className="flex items-start gap-x-2">
                                                    <Image src={author.node.avatar.url} alt="avater" width={100} height={100} className="block w-[15%] rounded-full" />
                                                    <div>
                                                        <div className="flex items-center gap-x-2">
                                                            <h5 className="text-sm font-medium text-black">{author.node.name}</h5>
                                                            <Image src={Check} alt="check" className="block" />
                                                        </div>
                                                        <p className="text-[#5c5b5b] text-xs leading-normal font-medium">
                                                            {author.node.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>



                                ) : (
                                    <div key={i} className="bg-[#F3F3F3] rounded-xl">
                                        <div className="border-b border-[#D4D4D4]">
                                            {
                                                <Link href={`/blogs/${slug}`}>
                                                    <Image src={process.env.NEXT_PUBLIC_MEDIA_ENDPOINT + "/" + featuredImage.node.mediaDetails.file} alt="books" width={440} height={200} className="block mx-auto w-full" />
                                                </Link>
                                            }
                                            <div className="px-4 py-6">
                                                {
                                                    bSPCategories?.nodes?.map(({ name }) => (
                                                        <span className="block text-[#F32F53] font-semibold mr-md:text-base text-sm leading-normal capitalize">{name}</span>
                                                    ))
                                                }
                                                <h4 className="mr-md:text-[20px] text-base leading-normal font-semibold text-[#000] mb-4">
                                                    <Link href={`/blogs/${slug}`}>{title}</Link>
                                                </h4>
                                                <div className="mr-md:text-sm text-xs leading-normal font-normal" dangerouslySetInnerHTML={{ __html: desc.slice(0, 200) }} />
                                                <Link href={`/blogs/${slug}`} className="mr-md:text-base text-sm flex items-center ms-auto mt-5 gap-x-2 border-b-2 border-black w-max">
                                                    <span className="block">Read More</span>
                                                    <span><Image src={Arrow} alt="arrow" className="block" /></span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="px-4 py-8">
                                            <div className="flex items-start gap-x-2">
                                                <Image src={author.node.avatar.url} alt="avater" width={100} height={100} className="block w-[15%] rounded-full" />
                                                <div>
                                                    <div className="flex items-center gap-x-2">
                                                        <h5 className="text-sm font-medium text-black">{author.node.name}</h5>
                                                        <Image src={Check} alt="check" className="block" />
                                                    </div>
                                                    <p className="text-[#5c5b5b] text-xs leading-normal font-medium">
                                                        {author.node.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                    {visibleItems < filteredData.length && (
                        <button onClick={handleShowMore} className="bg-black font-bold text-lg block mx-auto text-white py-3 px-14 rounded-lg mt-14">
                            Load More
                        </button>
                    )}
                </div>
            </div>
        </section>
    )
}
export default Cards;