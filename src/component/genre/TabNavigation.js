import React, { useState } from 'react';
import Image from 'next/image';
import { MRCTAGroup } from '..';
const TabNavigation = ({ activeTab, setActiveTab }) => {

  return (
    <div className='tab-pillss'>
      <ul className="flex max-w-7xl lg:max-w-6xl gap-x-6 lg:gap-x-3 lg:pt-5 md:gap-2 sm:py-5 sm:gap-x-1 xs:gap-x-1 mx-auto justify-center sm:justify-start sm:mx-0 sm:overflow-x-scroll xs:justify-start xs:mx-0 xs:overflow-x-scroll xs:py-5" role="tablist">
        <li className="">
          <a
            className={`py-2 px-10 md:px-2 xs:px-3 cursor-pointer ${activeTab === 's1' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[2px] border-[#777777] text-[#8a8a8a] focus:text-white'
              }`}
            onClick={() => setActiveTab('s1')}
            role="tab"
            aria-controls="s1"
            aria-selected={activeTab === 's1' ? 'true' : 'false'}
          >
            Fiction
          </a>
        </li>
        <li className="">
          <a
            className={`py-2 px-10 md:px-2 xs:px-3 cursor-pointer ${activeTab === 's2' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[2px] border-[#707070] text-[#8a8a8a]'
              }`}
            onClick={() => setActiveTab('s2')}
            role="tab"
            aria-controls="s2"
            aria-selected={activeTab === 's2' ? 'true' : 'false'}
          >
            Non&nbsp;Fiction
          </a>
        </li>
        <li className="">
          <a
            className={`py-2 px-10 md:px-2 xs:px-3 cursor-pointer ${activeTab === 's3' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[2px] border-[#777777] text-[#8a8a8a]'
              }`}
            onClick={() => setActiveTab('s3')}
            role="tab"
            aria-controls="s3"
            aria-selected={activeTab === 's3' ? 'true' : 'false'}
          >
            Biography
          </a>
        </li>
        <li className="">
          <a
            className={`py-2 px-10 md:px-2 xs:px-3 cursor-pointer ${activeTab === 's4' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[2px] border-[#777777] text-[#8a8a8a]'
              }`}
            onClick={() => setActiveTab('s4')}
            role="tab"
            aria-controls="s4"
            aria-selected={activeTab === 's4' ? 'true' : 'false'}
          >
            Informative
          </a>
        </li>
        <li className="">
          <a
            className={`py-2 px-10 md:px-2 xs:px-3 cursor-pointer ${activeTab === 's5' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[2px] border-[#777777] text-[#8a8a8a]'
              }`}
            onClick={() => setActiveTab('s5')}
            role="tab"
            aria-controls="s5"
            aria-selected={activeTab === 's5' ? 'true' : 'false'}
          >
            Autobiography
          </a>
        </li>
        <li className="">
          <a
            className={`py-2 px-10 md:px-2 xs:px-3 cursor-pointer ${activeTab === 's6' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[2px] border-[#777777] text-[#8a8a8a]'
              }`}
            onClick={() => setActiveTab('s6')}
            role="tab"
            aria-controls="s6"
            aria-selected={activeTab === 's6' ? 'true' : 'false'}
          >
            Memoir
          </a>
        </li>
        <li>
          <a
            className={`py-2 px-10 md:px-2 xs:px-3 cursor-pointer ${activeTab === 's7' ? 'bg-[#00c0e4] text-white border-[2px] border-solid border-[#00c0e4]' : 'bg-transparent border-solid border-[2px] border-[#777777] text-[#8a8a8a]'
              }`}
            onClick={() => setActiveTab('s7')}
            role="tab"
            aria-controls="s7"
            aria-selected={activeTab === 's7' ? 'true' : 'false'}
          >
            Children&nbsp;Book
          </a>
        </li>
      </ul>
    </div>

  );
};

const ParentComponent = () => {
  const [activeTab, setActiveTab] = useState('s1');


  const openLiveChat = (e) => {
    e.preventDefault();
    if (window.LiveChatWidget) {
      window.LiveChatWidget.call('maximize');
    }
  };


  return (
    <div>
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />



      {/* Content for each tab */}
      {activeTab === 's1' && (
        <div className='container max-w-7xl lg:max-w-6xl md:max-w-2xl text-[#1d1d1f] pt-20 xs:pt-10'>
          <div className='grid grid-cols-2 grid-rows-1 xs:grid-cols-1 xs:gap-y-10 items-center justify-center font-secondary'>
            <div className='space-y-2'>
              <h6 className='text-[30px] font-semibold text-[#3EA99F] font-primary'>Fiction</h6>
              <h3 className='font-bold font-primary text-[40px] md:text-4xl sm:text-3xl leading-tight xs:text-3xl'>Top-Ranked Services for Fiction Book Publishing Genre</h3>
              <p>Our well-regarded fiction writing services will help you tell better stories. Our talented writers create gripping mysteries, endearing romances, or grand journeys. We provide your story's life with suspense, feeling, and striking visuals, from engrossing storylines to vibrant characters. Turn your project over to our gifted staff of wordsmiths, who specialize in creating stories that keep readers on the edge of their seats.</p>
              <div className='w-[60%] grid grid-cols-2 grid-rows-1 gap-x-5 py-5 md:w-[100%] sm:w-[90%] xs:w-[90%]'>
                <MRCTAGroup />
              </div>
            </div>
            <div>
              <Image quality={95} src='/assets/images/newimg/shalf-book.png' width={600} height={600} alt='Tablist Images' />
            </div>

          </div>
        </div>
      )}
      {activeTab === 's2' && (
        <div className='container max-w-7xl lg:max-w-6xl md:max-w-2xl text-[#1d1d1f] pt-20 xs:pt-10'>

          <div className='grid grid-cols-2 grid-rows-1 xs:grid-cols-1 xs:gap-y-10 items-center justify-center font-secondary'>
            <div className='space-y-2'>
              <h6 className='text-[30px] font-semibold text-[#3EA99F] font-primary'>Non-Fiction</h6>
              <h3 className='font-bold font-primary text-[40px] leading-tight md:text-4xl sm:text-3xl xs:text-3xl'>Top-Ranked Services for Non Fiction Book Publishing Genre</h3>
              <p>Our top non fiction book publishing services can let you experience the power of narrative. Our skilled non-fiction writers turn real-life events into gripping stories. By use of thorough investigation and captivating narrative, we enable you to impart your knowledge and motivate readers to investigate novel concepts, acquire insightful knowledge, and act. Our staff makes sure your project resonates with authenticity and leaves a lasting effect. </p>
              <div className='w-[60%] grid grid-cols-2 grid-rows-1 gap-x-5 py-5 md:w-[100%] sm:w-[90%] xs:w-[90%]'>
                <MRCTAGroup />
              </div>
            </div>
            <div>
              <Image quality={95} src='/assets/images/newimg/bearded-author-glasses-reading-book.png' width={600} height={600} alt='Tablist Images' />
            </div>

          </div>
        </div>
      )}
      {activeTab === 's3' && (
        <div className='container max-w-7xl lg:max-w-6xl md:max-w-2xl text-[#1d1d1f] pt-20 xs:pt-10'>

          <div className='grid grid-cols-2 grid-rows-1 xs:grid-cols-1 xs:gap-y-10 items-center justify-center font-secondary'>
            <div className='space-y-2'>
              <h6 className='text-[30px] font-semibold text-[#3EA99F] font-primary'>Biographies</h6>
              <h3 className='font-bold font-primary text-[40px] leading-tight md:text-4xl sm:text-3xl xs:text-3xl'>Professional Biography Writing Services</h3>
              <p>Hire our well-known biography writing services to record life stories. Our professional biography writers pay close attention to details and love writing exciting stories that celebrate wins, losses, and successes. Whether they are honoring a famous person or a loved one, our team makes sure that their story is told to the world in a way that inspires and teaches the next generation.</p>
              <div className='w-[60%] grid grid-cols-2 grid-rows-1 gap-x-5 py-5 md:w-[100%] sm:w-[90%] xs:w-[90%]'>
                <MRCTAGroup />
              </div>
            </div>
            <div>
              <Image quality={95} src='/assets/images/newimg/article-banner.png' width={600} height={600} alt='Tablist Images' />
            </div>

          </div>
        </div>
      )}
      {activeTab === 's4' && (
        <div className='container max-w-7xl lg:max-w-6xl md:max-w-2xl text-[#1d1d1f] pt-20 xs:pt-10'>

          <div className='grid grid-cols-2 grid-rows-1 xs:grid-cols-1 md:gap-x-5 xs:gap-y-10 items-center justify-center font-secondary'>
            <div className='space-y-2'>
              <h6 className='text-[30px] font-semibold text-[#3EA99F] font-primary'>Informative</h6>
              <h3 className='font-bold font-primary text-[40px] leading-tight md:text-4xl sm:text-3xl xs:text-3xl'>Best Informative Writing Services</h3>
              <p>Our informative book writers specialize in producing articles, guides, and instructional materials that educate, enthrall, and empower readers, and distill complicated knowledge into understandable, approachable text. We make sure your message is understood clearly and positions you as a reliable authority in your field. Our offerings range from well-researched articles that examine new trends and developments to thorough guides that offer useful guidance and insightful analysis.</p>
              <div className='w-[60%] grid grid-cols-2 grid-rows-1 gap-x-5 py-5 md:w-[100%] sm:w-[90%] xs:w-[90%]'>
                <MRCTAGroup />
              </div>
            </div>
            <div>
              <Image quality={95} src='/assets/images/newimg/blog-banner.png' width={600} height={600} alt='Tablist Images' />
            </div>

          </div>
        </div>
      )}
      {activeTab === 's5' && (
        <div className='container max-w-7xl lg:max-w-6xl md:max-w-2xl text-[#1d1d1f] pt-20 xs:pt-10'>

          <div className='grid grid-cols-2 grid-rows-1 xs:grid-cols-1 xs:gap-y-10 items-center justify-center font-secondary'>
            <div className='space-y-2'>
              <h6 className='text-[30px] font-semibold text-[#3EA99F] font-primary'>Autobiography</h6>
              <h3 className='font-bold font-primary text-[40px] leading-tight md:text-4xl sm:text-3xl xs:text-3xl'>Leading Autobiography Writing Services</h3>
              <p>Write sincere, real stories with our autobiography writing services. Our autobiography writers focus on assisting people in narrating their life stories with depth, clarity, and emotional impact. By use of open interviews, introspective writing, and deft narration, we document the highs and lows, victories, and setbacks that have molded your life, so constructing an engaging story that enables readers to take on your position and see the world from your perspective.</p>
              <div className='w-[60%] grid grid-cols-2 grid-rows-1 gap-x-5 py-5 md:w-[100%] sm:w-[90%] xs:w-[90%]'>
                <MRCTAGroup />
              </div>
            </div>
            <div>
              <Image quality={95} src='/assets/images/newimg/book-cover-table-banner.png' width={600} height={600} alt='Tablist Images' />
            </div>

          </div>
        </div>
      )}
      {activeTab === 's6' && (
        <div className='container max-w-7xl lg:max-w-6xl md:max-w-2xl text-[#1d1d1f] pt-20 xs:pt-10'>

          <div className='grid grid-cols-2 grid-rows-1 xs:grid-cols-1 xs:gap-y-10 items-center justify-center font-secondary'>
            <div className='space-y-2'>
              <h6 className='text-[30px] font-semibold text-[#3EA99F] font-primary'>Memoir</h6>
              <h3 className='font-bold font-primary text-[40px] leading-tight md:text-4xl sm:text-3xl xs:text-3xl'>Top-Ranked Memoir Publishing Services</h3>
              <p>Write compelling stories based on your own life that will hold readers' attention and accurately, and empathetically. We take you through the joyful, sad, loving, and sad times that have shaped you by using self-reflection and insight to craft a story that people can really connect with. We make sure that your story is told in a way that is fair, honest, and caring.</p>
              <div className='w-[60%] grid grid-cols-2 grid-rows-1 gap-x-5 py-5 md:w-[100%] sm:w-[90%] xs:w-[90%]'>
                <MRCTAGroup />
              </div>
            </div>
            <div>
              <Image quality={95} src='/assets/images/newimg/bring-book.png' width={600} height={600} alt='Tablist Images' />
            </div>

          </div>
        </div>
      )}
      {activeTab === 's7' && (
        <div className='container max-w-7xl lg:max-w-6xl md:max-w-2xl text-[#1d1d1f] pt-20 xs:pt-10'>

          <div className='grid grid-cols-2 grid-rows-1 xs:grid-cols-1 xs:gap-y-10 items-center justify-center font-secondary'>
            <div className='space-y-2'>
              <h6 className='text-[30px] font-semibold text-[#3EA99F] font-primary'>Children Books</h6>
              <h3 className='font-bold font-primary text-[40px] leading-tight md:text-4xl sm:text-3xl xs:text-3xl'>Top-Rated Children Book Writing Services</h3>
              <p>Our team of skilled children's book writers will work closely with you to make your ideas come to life. They will write books that entertain, inspire, and leave a lasting effect on young readers who are excited to try new books. As one of the best children book publishing services, we write books for kids that give them power, teach them, entertain them, and let them discover new worlds through age-appropriate content and interesting stories.</p>
              <div className='w-[60%] grid grid-cols-2 grid-rows-1 gap-x-5 py-5 md:w-[100%] sm:w-[90%] xs:w-[90%]'>
                <MRCTAGroup />
              </div>
            </div>
            <div>
              <Image quality={95} src='/assets/images/newimg/contactformbg1.png' width={600} height={600} alt='Tablist Images' className='' />
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default ParentComponent;
