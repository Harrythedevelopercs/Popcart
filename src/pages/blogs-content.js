import React from 'react';


import WMODE from '../component/workMode1'
import BTM from '../component/bottomLogos';
import CTA from '../component/cta3';
import SwiperComponents from '../component/SwiperComponent'

import Bloginners from '../component/Bloginner'
import Head from 'next/head';

const blog = () => {
  return (
    <>
    <Head>
    <meta name="robots" content="noindex"/>
    </Head>
      <main>

        <div>

        </div>

        <Bloginners></Bloginners>

        <CTA />
        <BTM />
        <WMODE
          subtitle="Carrying out"
          title="The Fastest Work Mode, Get Your <br className='mr-lg:block hidden' /> Work in 4 Easy Steps"
          desc=" Working with us gives you prompt delivery of work because we have set up everything systematically. Here is our 4 step process, which keeps us streamlined from the beginning."
          GridCols="grid-cols-4"
          StoryPlotData={[
            {
              steps: "Step 01",
              heading: "Submit Your Manuscript",
              desc: "After making up your mind about working with us, you place your order."
            },
            {
              steps: "Step 02",
              heading: "Edit & Design",
              desc: "We refine your text and design your book's cover."
            },
            {
              steps: "Step 03",
              heading: "Review & Approve",
              desc: "You review our work and give the green light."
            },
            {
              steps: "Step 04",
              heading: "Publish & Distribute",
              desc: "Your book is published and distributed on schedule."
            }
          ]}
        />
        <SwiperComponents />
      </main>
    </>
  )
}

export default blog
