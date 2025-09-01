import React from 'react'
import styles from '@/styles/Freequote.module.css'
import Link from 'next/link'
import { useState } from "react";
import Router from 'next/router';

const Freequote = (props) => {

  const [score, setScore] = useState('Let`s discuss');

  const handleSubmit = async (e) => {
    e.preventDefault()

    let bodyContent = JSON.stringify({
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    });

    setScore('Wating For Sending Data');
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: bodyContent
    });

    let data = await response.text();
    console.log(data);
    e.target.reset();
    setScore('Thank You');
    const { pathname } = Router
    if (pathname == pathname) {
      Router.push('/thank-you')
    }

  }


  return (
    <>

      <div className={styles[props.formsaspire]}>

        <h4 className="t-center font-20 fw-700 colortextgrey font-primary">Get A <span className='txt-primary'>Free</span> Quote</h4>
        <form className={styles.formalign} onSubmit={handleSubmit} >
          <label className={styles.label}>Full Name*</label>
          <input type="text" className={styles.formfree} required name="name" placeholder="Your name..." />

          <label className={styles.label}>Email Address*</label>
          <input type="email" className={styles.formfree} required name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Type Email Address" />

          <label className={styles.label}>Phone *</label>
          <input type="number" className={styles.formfree} required name="phone" placeholder="123-456-7890" />

          <label className={styles.label}>Message *</label>
          <textarea className={styles.formfree} required name="message" rows="2" placeholder="Type Your Message Here"></textarea>
          <button className={styles.freebtn} type="submit"> {score} </button>
        </form>


        {props.show ?

          <div className='mt-4'>
            <Link className={styles.freediscuss} href="#">LET'S DISCUSS</Link>
            <Link className={styles.freehomenumer} href="tel:(213) 289 3888">(213) 289 3888</Link>
          </div>


          : ''}



      </div>


    </>
  )
}

export default Freequote