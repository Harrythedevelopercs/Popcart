import React from 'react'
import Image from 'next/image';
import styles from '@/styles/Banner.module.css'
//
import img2 from 'media/images/banner/img2.png'
import alignicon from 'media/images/icons/align.png'
import authoricon from 'media/images/icons/author.png'
import cupicon from 'media/images/icons/cup.png'

const BannerItems = () => {
    return (
        <>
            <div className={`${styles.count} mt-3 mainclass`}>
                <div className={`grid grid-cols-3 ${styles.counteRow}`}>
                    <div className='flex items-center gap-3'>
                        <Image quality={100}  className='img-fluid'
                            src={alignicon}
                            alt='Best_Publisher'
                        />
                        <div style={{ lineHeight: 1 }}>
                            <span className='font-50 fw-700 font-primary txt-secondary'>400</span>
                            <p className='font-20 fw-800 font-primary txt-primary'>Million Words</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Image quality={100}  className='img-fluid'
                            src={authoricon}
                            alt='Best_Publisher'
                        />
                        <div style={{ lineHeight: 1 }}>
                            <span className='font-50 fw-700 font-primary txt-secondary'>100</span>
                            <p className='font-20 fw-800 font-primary txt-primary'>Authors</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Image quality={100}  className='img-fluid'
                            src={cupicon}
                            alt='Best_Publisher'
                        />
                        <div style={{ lineHeight: 1 }}>
                            <span className='font-50 fw-700 font-primary txt-secondary'>870</span>
                            <p className='font-20 fw-800 font-primary txt-primary'>Cups Of Coffee</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.banshortimg} style={{ paddingBottom: "50px" }}>
                <Image quality={100} src={img2} alt='Best_Publisher' className='img-fluid mt-5'></Image>
            </div>
        </>
    )
}

export default BannerItems
