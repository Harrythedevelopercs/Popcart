import React from 'react'
import check from 'media/ahsan/checkmark.png'
import Image from 'next/image'
const Theading = [
    {
        name1: 'Services',
        name2: 'Basics',
        name3: 'Standard',
        name4: 'Platinum'
    }
]
const Thead = [['Services'], ['Basics'], ['Standard'], ['Platinum']]
const TData = [
    {
        Services: 'Google Preview Book',
        Basics: check,
        Standard: check,
        Platinum: check
    },
    {
        Services: 'Social Media Promotion',
        Basics: '1 Month',
        Standard: '3 Month',
        Platinum: '6 Month'
    },
    {
        Services: 'Amazon Marketing',
        Basics: '',
        Standard: check,
        Platinum: check
    },
    {
        Services: 'Search Engine Optimization',
        Basics: '1 Month',
        Standard: '3 Month',
        Platinum: '6 Month'
    },
    {
        Services: 'Video Reviews',
        Basics: '3 Reviews',
        Standard: '5 Reviews',
        Platinum: '10 Reviews'
    },
    {
        Services: 'Book Launch Animated Video - 1 Minute Video',
        Basics: '1 Video',
        Standard: '1 Video',
        Platinum: '1 Video'
    },
    {
        Services: 'Author Website Setup- 1',
        Basics: check,
        Standard: check,
        Platinum: check
    },
    {
        Services: 'Website For Author And Book',
        Basics: check,
        Standard: check,
        Platinum: check
    },
    {
        Services: 'Promotional Bookmarks Design',
        Basics: '3 Each',
        Standard: '5 Each',
        Platinum: '10 Each'
    },
    {
        Services: 'Promotional Postcards Design',
        Basics: '3 Each',
        Standard: '5 Each',
        Platinum: '10 Each'
    },
    {
        Services: 'Promotional Business Cards Design',
        Basics: check,
        Standard: check,
        Platinum: check
    },
    {
        Services: 'Blogs/Articles Marketing',
        Basics: '10',
        Standard: '15',
        Platinum: '30'
    },
    {
        Services: 'Blogs Written And Posted On High Authority Domain Platforms',
        Basics: check,
        Standard: check,
        Platinum: check
    },
    {
        Services: 'Press Release Campaign - 10',
        Basics: '5',
        Standard: '5',
        Platinum: '10'
    },
    {
        Services: 'Press Releases',
        Basics: '',
        Standard: '10',
        Platinum: '10'
    },
    {
        Services: 'Google Knowledge Panel For The Book',
        Basics: '',
        Standard: check,
        Platinum: check
    },
    {
        Services: 'Podcast',
        Basics: '',
        Standard: check,
        Platinum: check
    },
    {
        Services: 'Editorial Critique',
        Basics: check,
        Standard: check,
        Platinum: check
    },
    {
        Services: 'Quora Space',
        Basics: '',
        Standard: check,
        Platinum: check
    }
]


const MRTable = ({
    subTitle = "",
    title = "",
    desc = "",
    imageIcon = "check"
}) => {
    return (
        <>
            <section>
                <div className="relative py-[40px] mr-lg:py-[70px]">
                    <div className="mr-container">
                        <div className="text-center mb-5">
                            {subTitle && (<span className="text-[20px] mr-lg:text-[30px] block leading-tight font-semibold font-sans text-[#3EA99F] mb-2">
                                {subTitle}
                            </span>)}
                            {title && (<h2 className="text-[26px] mr-md:text-[30px] mr-lg:text-[40px] block leading-tight font-bold font-sans text-[#000000] mb-2" dangerouslySetInnerHTML={{ __html: title }} />)}
                            {desc && (<p className="text-[14px] mr-lg:text-[16px] mr-lg:w-[85%] mx-auto block leading-[26px] font-normal font-sans text-[#000000]" dangerouslySetInnerHTML={{ __html: desc }} />)}
                        </div>

                        <div className='mr-md:mt-10 mt-5 font-sans overflow-x-scroll overflow-visible'>
                            <table className=' mr-md:w-[100%] table-fixed border-collapse border border-[#E2E2E2]'>
                                {/* <thead>
                                    <tr>
                                        {Thead?.map((Theading, i) => (
                                            <th key={i} className='border border-[#E2E2E2] py-3'>{Theading}</th>
                                        ))}
                                    </tr>
                                </thead> */}
                                <thead>
                                    {Theading?.map((e, i) => (
                                        <tr key={i} className='font-semibold mr-md:text-[18px] text-[16px]'>
                                            <th className='bg-[#3EA99F] text-white border border-[#E2E2E2] mr-md:py-2 py-1 mr-md:px-3 px-10'>{e.name1}</th>
                                            <th className='bg-[#000] text-white border border-[#E2E2E2] mr-md:py-2 py-1 mr-md:px-3 px-10'>{e.name2}</th>
                                            <th className='bg-[#3EA99F] text-white border border-[#E2E2E2] mr-md:py-2 py-1 mr-md:px-3 px-10'>{e.name3}</th>
                                            <th className='bg-[#000] text-white border border-[#E2E2E2] mr-md:py-2 py-1 mr-md:px-3 px-10'>{e.name4}</th>
                                        </tr>
                                    ))}
                                </thead>
                                <tbody>
                                    {TData?.map((e, i) => (
                                        <tr key={i} className='font-semibold mr-md:text-[16px] text-[12px]'>
                                            <td className='border border-[#E2E2E2] mr-md:py-2 py-1 pl-3'>
                                                {e.Services}
                                            </td>
                                            <td className='border border-[#E2E2E2] mr-md:py-3 py-1 text-center'>
                                                {e.Basics == check ?
                                                    <Image src={e.Basics} quality={100} width={30} height={40} alt='icon' className='m-auto' /> : 
                                                    <p>{e.Basics}</p>    
                                                }
                                            </td>

                                            <td className='border border-[#E2E2E2] mr-md:py-3 py-1 text-center'>
                                                {(e.Standard) == check ? (
                                                    <Image src={e.Standard} quality={100} width={30} height={40} alt='icon' className='m-auto' />
                                                ) : (
                                                    <p>
                                                        {e.Standard}
                                                    </p>
                                                )}
                                            </td>
                                            <td className='border border-[#E2E2E2] mr-md:py-3 py-1 text-center'>
                                                {(e.Platinum) == check ? (
                                                    <Image src={e.Platinum} quality={100} width={30} height={40} alt='icon' className='m-auto' />
                                                ) : (
                                                    <p>
                                                        {e.Platinum}
                                                    </p>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default MRTable
