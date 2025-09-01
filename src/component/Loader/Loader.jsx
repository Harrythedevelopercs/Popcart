import React from 'react'
import styles from "./Loader.module.css";

const Loader = () => {
    return (
        <section className={`${styles.loader} bg-white font-sans fixed left-0 top-0 w-[100%] h-[100vh]  z-50 flex flex-col items-center uppercase justify-center bg-whit`}>
                <div>
                    <p className="text-[30px] font-bold font-sans leading-3 tracking-wider">Best <span className={styles.animi}>Selling</span></p>
                    <p className={`text-[30px] font-bold font-sans tracking-wider`}>Publisher</p>
                </div>
                <p className={`${styles.para} pt-1`}></p>
            </section>
    )
}

export default Loader
