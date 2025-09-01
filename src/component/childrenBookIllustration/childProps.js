import React from 'react'
import Image from 'next/image'
import { MRCTA, MRCTAGroup } from '..';

const childProps = ({
    subtitle,
    title,
    desc,
    ImagePath,
    classes,
    BGclasses,
    txtColor,
    lists,
    desc2
}) => {


    const openLiveChat = (e) => {
        e.preventDefault();
        if (window.LiveChatWidget) {
            window.LiveChatWidget.call('maximize');
        }
    };


    return (
        <>
            <section className="py-[80px]">
                <div className='mr-container'>
                    <div className='grid xl:grid-cols-12 mr-lg:grid-cols-12 m-auto gap-5 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1'>
                        <div className='col-span-5 hidden mr-lg:block mr-xl:block md:hidden'>
                            <Image quality={95} src={ImagePath} className='img-fluid m-auto' alt="publication-section" />
                        </div>
                        <div className='col-span-7 '>
                            <div className=' xs:py-0'>
                                <h2 className='py-4 font-primary font-bold leading-normal text-[45px]  xs:text-[30px]'>
                                    {title}
                                </h2>
                                <p className=' m-auto'>
                                    {desc}
                                </p>
                                <ul className="grid grid-cols-2 list-[square] list-inside indent-0.5 gap-x-5 mr-xs:grid-cols-1 ">
                                    {lists && lists?.map((e, i) => (
                                        <li className='border-b-2 border-solid items-center border-[#707070] py-3' key={i} dangerouslySetInnerHTML={{__html: e}} />
                                    ))}
                                </ul>
                                <p className='mt-3 mb-3'>{desc2}</p>
                                <MRCTAGroup classes='' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default childProps
