import React, { useState } from 'react';
import Image from 'next/image';
import { MRCTAGroup } from '..';

const Tablist = [
  ["Dust jacket cover", 's1'],
  ["Hardboard Cover", 's2'],
  ["Paperback Cover", 's3'],
]

const TabNavigation = ({ activeTab, setActiveTab }) => {



  return (
    <ul className="flex sm:flex-wrap xs:overflow-x-scroll xs:space-x-5 xs:m-0 max-w-7xl mx-auto justify-center items-center xs:justify-start xs:mx-0 " role="tablist">
      <li className="mr-2">
        <a
          className={`py-2 px-10 cursor-pointer ${activeTab === 's1' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[1px] border-[#777777] text-gray-700 focus:text-white'
            }`}
          onClick={() => setActiveTab('s1')}
          role="tab"
          aria-controls="s1"
          aria-selected={activeTab === 's1' ? 'true' : 'false'}
        >
          Dust&nbsp;jacket&nbsp;cover
        </a>
      </li>
      <li className="mr-2">
        <a
          className={`py-2 px-10 cursor-pointer ${activeTab === 's2' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[1px] border-[#777777] text-gray-700'
            }`}
          onClick={() => setActiveTab('s2')}
          role="tab"
          aria-controls="s2"
          aria-selected={activeTab === 's2' ? 'true' : 'false'}
        >
          Hardboard&nbsp;Cover
        </a>
      </li>
      <li className="mr-2">
        <a
          className={`py-2 px-10 cursor-pointer ${activeTab === 's3' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[1px] border-[#777777] text-gray-700'
            }`}
          onClick={() => setActiveTab('s3')}
          role="tab"
          aria-controls="s3"
          aria-selected={activeTab === 's3' ? 'true' : 'false'}
        >
          Paperback&nbsp;Cover
        </a>
      </li>
    </ul>

  );
};

const ParentComponent = () => {

  const openLiveChat = (e) => {
    e.preventDefault();
    if (window.LiveChatWidget) {
      window.LiveChatWidget.call('maximize');
    }
  };


  const [activeTab, setActiveTab] = useState('s1');

  return (
    <div>
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />



      {/* Content for each tab */}
      {activeTab === 's1' && (
        <div className='container max-w-6xl md:max-w-2xl text-[#1d1d1f] pt-14 sm:px-5'>
          <div className='grid grid-cols-2 grid-rows-1 xs:grid-cols-1 items-center justify-center font-secondary'>
            <div className='space-y-2'>
              <h3 className='font-semibold text-[40px] md:text-4xl font-primary sm:text-4xl'>Dust Jacket Cover</h3>
              <p>Imagine holding a story in your hands. What's the first thing you notice?</p>
              <p>The dust jacket cover - a silent herald of the adventures hidden within its pages. It's a canvas where visual storytelling comes to life. With striking imagery, evocative typography, and design elements that pull you in, each cover is a doorway begging to be opened. The dust jacket illuminates key details like the title, author, and a tantalizing synopsis. and our designers would do everything to make a lasting impact on your book!</p>
              <p>Don't believe us? See it for yourself!</p>
             <MRCTAGroup classes='!mt-[20px]'/>
            </div>
            <div>
              <Image quality={95} src='/imageAR/cover-design3.png' className='block mx-auto' width={500} height={600} alt='Tablist Images' />
            </div>

          </div>
        </div>
      )}
      {activeTab === 's2' && (
        <div className='container max-w-6xl md:max-w-2xl text-[#1d1d1f] pt-14 sm:px-5'>

          <div className='grid grid-cols-2 grid-rows-1 xs:grid-cols-1 items-center justify-center font-secondary'>
            <div className='space-y-2'>
              {/* <h3 className='font-semibold text-[40px] md:text-4xl font-primary'>Hard Cover</h3>
              <p>Have you ever considered what makes a book feel like a treasure even before you turn its first page? The magic often begins with its hardcover.</p>
              <p>A hardcover speaks of permanence and longevity, serving as a sturdy shield against the ravages of time. But it's more than just a protector. A hardcover brings with it an air of sophistication and craftsmanship, transforming the act of picking up a book into the start of a luxurious experience. Its solid spine and robust construction add significance to the words waiting inside, promising you a substantial and memorable journey.</p>
              <p>Oh, we don’t want you to just trust our words — we want you to experience it!</p>
              <MRCTAGroup classes='!mt-[20px]'/> */}

              <h3 className='font-semibold text-[40px] md:text-4xl font-primary'>Hardboard Cover</h3>
              <p>Have you ever considered what makes a book feel like a treasure even before you turn its first page? The magic often begins with its hardcover.</p>
              <p>A hardcover speaks of permanence and longevity, serving as a sturdy shield against the ravages of time. But it's more than just a protector. A hardcover brings with it an air of sophistication and craftsmanship, transforming the act of picking up a book into the start of a luxurious experience. Its solid spine and robust construction add significance to the words waiting inside, promising you a substantial and memorable journey.</p>
              <p>Oh, we don’t want you to just trust our words — we want you to experience it!</p>
              <MRCTAGroup classes='!mt-[20px]' />
            </div>
            <div>
              <Image quality={95} src='/assets/images/newimg/hardboard-cover.png' className='mx-auto' width={300} height={600} alt='Tablist Images' />
            </div>

          </div>
        </div>
      )}
      {activeTab === 's3' && (
        <div className='container max-w-6xl md:max-w-2xl text-[#1d1d1f] pt-14 sm:px-5'>

          <div className='grid grid-cols-2 grid-rows-1 xs:grid-cols-1 items-center justify-center font-secondary'>
            <div className='space-y-2'>
              <h3 className='font-semibold text-[40px] md:text-4xl font-primary'>Paperback Cover</h3>
              <p>Who hasn't found themselves lost in a good book, no matter where they are?</p>
              <p>With its versatile and welcoming design, the paperback cover stands as your gateway into the vast and intriguing literary world. But don't let its gentle appearance fool you; the paperback is more than capable of safeguarding the treasure trove of words inside, keeping the essence of your adventure intact. Its affordability and easy-to-carry nature have made it a beloved choice among both those who devour books and those who indulge in the occasional literary escape.</p>
              <p>Do you want to test how good we are at book cover designs?</p>
              <MRCTAGroup classes='!mt-[20px]'/>
            </div>
            <div>
              <Image quality={95} src='/assets/images/newimg/paper-book-cover.png' className='mx-auto' width={400} height={600} alt='Tablist Images' />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ParentComponent;
