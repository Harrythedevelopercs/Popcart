import { useState } from 'react';
import Image from 'next/image';
import PMS from 'media/ahsan/pms.png'
const tabsList = [
  ["Personal Marketing Assistants", 1],
  ["Social Media Set-Up", 2],
  ["Creative and Appealing Bookmarks", 3],
  ["Digital Postcards", 4],
  ["Business Cards", 5],
  ["Small and Attractive Posters", 6],
  ["Book Video Trailers", 7],
  ["Press Release", 8],
  ["Marketing on Social Media Platforms", 9],
  ["Marketing Consultation", 10],
  ["Amazon Kindle", 11],
  ["Apple Books", 12],
  ["Barnes and Noble Nook Edition", 13],
  ["Audio Book", 14],
  ["Author Website", 15],
  ["Article Writing", 16]
]

function VerticalNavTabs() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };


  const openLiveChat = (e) => {
    e.preventDefault();
    if (window.LiveChatWidget) {
      window.LiveChatWidget.call('maximize');
    }
  };

  return (
    <div className="tab-vertical mr-md:grid mr-md:grid-cols-8 md:mx-auto xs:flex-wrap font-secondary " >
      <div className="col-span-2 bg-[url('/ahsan/Union1.png')] bg-no-repeat bg-cover py-[30px]  text-[#1d1d1f] mt-[-30px] mb-[-30px]" id='style-2'>
        <div className="col-span-2  p-0 text-left active:text-white text-black h-[500px] overflow-y-scroll">
          {tabsList?.map(([text, id]) => (
            <button
              key={id}
              className={`py-2 px-4 w-[95%] m-auto rounded-[5px] text-left cursor-pointer flex items-center gap-3 ${activeTab == id ? 'bg-[#fff] text-[#000] ' : ''}`}
              onClick={() => handleTabClick(id)}
            >
              <span className={`block w-[10px] h-[10px] rounded-full border-2 border-black ${activeTab == id ? "bg-[#3EA99F]" : ""}`}></span>
              {text}
            </button>
          ))}
        </div>
      </div>
      <div className="col-span-6  bg-transparent items-center pl-32 py-24 lg:pl-16 xs:pl-5 sm:pl-5 xs:py-3 md:pl-10 md:py-14 text-white mr-md:mt-0 mt-10">
        {activeTab === 1 && <div>

          <h6 className='text-[30px] font-primary font-semibold text-[#3EA99F]'>
            <Image src={PMS} quality={95} className="img-fluid mr-auto mb-3" />
            Publishing</h6>
          <h3 className='text-[40px] font-primary leading-[60px] gap-10 font-semibold sm:text-4xl xs:text-3xl xs:py-3 sm:py-3'>Personal <span className='text-primary-100'>Marketing</span> Assistants:</h3>
          <p>We offer dedicated marketing assistants to facilitate the promotion, management, and execution of comprehensive promotional campaigns for your book launch across diverse online and offline channels. Tailoring their services to meet your specific requirements they ensure optimal support for your success.</p>
          <div className='w-[40%] text-center grid grid-cols-2 grid-rows-1 gap-2 py-5 sm:w-[70%] xs:w-[100%]'>
            <a href="tel:855-666-6675" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
            <a href="#" onClick={openLiveChat} className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
          </div>
        </div>}
        {activeTab === 2 && <div>
          <h6 className='text-[30px] font-primary font-semibold text-[#3EA99F]'><Image src={PMS} quality={95} className="img-fluid mr-auto mb-3" />Publishing</h6>
          <h3 className='text-[40px] font-primary leading-[60px] gap-10 font-semibold sm:text-4xl xs:text-3xl xs:py-3 sm:py-3'>Social <span className='text-primary-100'> Media</span> Set-Up:</h3>
          <p>We will provide personal marketing assistants who help promote, manage and run promotional campaigns for your book launch through various online and offline channels They will proide you fits your needs!</p>
          <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-2 py-5 sm:w-[70%] xs:w-[100%]'>
            <a href="tel:855-666-6675" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
            <a href="#" onClick={openLiveChat} className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
          </div>
        </div>}
        {activeTab === 3 && <div>
          <h6 className='text-[30px] font-primary font-semibold text-[#3EA99F]'><Image src={PMS} quality={95} className="img-fluid mr-auto mb-3" />Publishing</h6>
          <h3 className='text-[40px] font-primary leading-[60px] gap-10 font-semibold sm:text-4xl xs:text-3xl xs:py-3 sm:py-3'>Creative and <span className='text-primary-100'>Appealing</span>  Bookmarks:</h3>
          <p>We will provide personal marketing assistants who help promote, manage and run promotional campaigns for your book launch through various online and offline channels They will proide you fits your needs!</p>
          <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-2 py-5 sm:w-[70%] xs:w-[100%]'>
            <a href="tel:855-666-6675" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
            <a href="#" onClick={openLiveChat} className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
          </div>
        </div>}
        {activeTab === 4 && <div>
          <h6 className='text-[30px] font-primary font-semibold text-[#3EA99F]'><Image src={PMS} quality={95} className="img-fluid mr-auto mb-3" />Publishing</h6>
          <h3 className='text-[40px] font-primary leading-[60px] gap-10 font-semibold sm:text-4xl xs:text-3xl xs:py-3 sm:py-3'><span className='text-primary-100'>Digital</span> Postcards:</h3>
          <p>We will provide Digital Postcards who help promote, manage and run promotional campaigns for your book launch through various online and offline channels They will proide you fits your needs!</p>
          <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-2 py-5 sm:w-[70%] xs:w-[100%]'>
            <a href="tel:855-666-6675" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
            <a href="#" onClick={openLiveChat} className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
          </div>
        </div>}
        {activeTab === 5 && <div>
          <h6 className='text-[30px] font-primary font-semibold text-[#3EA99F]'><Image src={PMS} quality={95} className="img-fluid mr-auto mb-3" />Publishing</h6>
          <h3 className='text-[40px] font-primary leading-[60px] gap-10 font-semibold sm:text-4xl xs:text-3xl xs:py-3 sm:py-3'><span className='text-primary-100'> Business </span> Cards:</h3>
          <p>We will provide personal marketing assistants who help promote, manage and run promotional campaigns for your book launch through various online and offline channels They will proide you fits your needs!</p>
          <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-2 py-5 sm:w-[70%] xs:w-[100%]'>
            <a href="tel:855-666-6675" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
            <a href="#" onClick={openLiveChat} className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
          </div>
        </div>}
        {activeTab === 6 && <div>
          <h6 className='text-[30px] font-primary font-semibold text-[#3EA99F]'>Publishing</h6>
          <h3 className='text-[40px] font-primary leading-[60px] gap-10 font-semibold sm:text-4xl xs:text-3xl xs:py-3 sm:py-3'>Small and <span className='text-primary-100'>Attractive</span> Posters:</h3>
          <p>We will provide personal marketing assistants who help promote, manage and run promotional campaigns for your book launch through various online and offline channels They will proide you fits your needs!</p>
          <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-2 py-5 sm:w-[70%] xs:w-[100%]'>
            <a href="tel:855-666-6675" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
            <a href="#" onClick={openLiveChat} className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
          </div>
        </div>}
        {activeTab === 7 && <div>
          <h6 className='text-[30px] font-primary font-semibold text-[#3EA99F]'>Publishing</h6>
          <h3 className='text-[40px] font-primary leading-[60px] gap-10 font-semibold sm:text-4xl xs:text-3xl xs:py-3 sm:py-3'>Personal <span className='text-primary-100'>marketing</span>  assistants:</h3>
          <p>We will provide personal marketing assistants who help promote, manage and run promotional campaigns for your book launch through various online and offline channels They will proide you fits your needs!</p>
          <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-2 py-5 sm:w-[70%]  xs:w-[100%]'>
            <a href="tel:855-666-6675" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
            <a href="#" onClick={openLiveChat} className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
          </div>
        </div>}
        {activeTab === 8 && <div>
          <h6 className='text-[30px] font-primary font-semibold text-[#3EA99F]'>Publishing</h6>
          <h3 className='text-[40px] font-primary leading-[60px] gap-10 font-semibold sm:text-4xl xs:text-3xl xs:py-3 sm:py-3'>Personal <span className='text-primary-100'>marketing</span>  assistants:</h3>
          <p>We will provide personal marketing assistants who help promote, manage and run promotional campaigns for your book launch through various online and offline channels They will proide you fits your needs!</p>
          <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-2 py-5 sm:w-[70%] xs:w-[100%]'>
            <a href="tel:855-666-6675" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
            <a href="#" onClick={openLiveChat} className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
          </div>
        </div>}
        {activeTab === 9 && <div>
          <h6 className='text-[30px] font-primary font-semibold text-[#3EA99F]'>Publishing</h6>
          <h3 className='text-[40px] font-primary leading-[60px] gap-10 font-semibold sm:text-4xl xs:text-3xl xs:py-3 sm:py-3'>Personal <span className='text-primary-100'>marketing</span> assistants:</h3>
          <p>We will provide personal marketing assistants who help promote, manage and run promotional campaigns for your book launch through various online and offline channels They will proide you fits your needs!</p>
          <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-2 py-5 sm:w-[70%] xs:w-[100%]'>
            <a href="tel:855-666-6675" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
            <a href="#" onClick={openLiveChat} className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
          </div>
        </div>}
        {activeTab === 10 && <div>
          <h6 className='text-[30px] font-primary font-semibold text-[#3EA99F]'>Publishing</h6>
          <h3 className='text-[40px] font-primary leading-[60px] gap-10 font-semibold sm:text-4xl xs:text-3xl xs:py-3 sm:py-3'>Personal <span className='text-primary-100'>marketing</span> assistants:</h3>
          <p>We will provide personal marketing assistants who help promote, manage and run promotional campaigns for your book launch through various online and offline channels They will proide you fits your needs!</p>
          <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-2 py-5 sm:w-[70%] xs:w-[100%]'>
            <a href="tel:855-666-6675" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
            <a href="#" onClick={openLiveChat} className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
          </div>
        </div>}
        {activeTab === 11 && <div>
          <h6 className='text-[30px] font-primary font-semibold text-[#3EA99F]'>Publishing</h6>
          <h3 className='text-[40px] font-primary leading-[60px] gap-10 font-semibold sm:text-4xl xs:text-3xl xs:py-3 sm:py-3'><span className='text-primary-100'>Marketing</span> Consultation</h3>
          <p>We will provide personal marketing assistants who help promote, manage and run promotional campaigns for your book launch through various online and offline channels They will proide you fits your needs!</p>
          <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-2 py-5 sm:w-[70%] xs:w-[100%]'>
            <a href="tel:855-666-6675" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
            <a href="#" onClick={openLiveChat} className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
          </div>
        </div>}
        {activeTab === 12 && <div>
          <h6 className='text-[30px] font-primary font-semibold text-[#3EA99F]'>Publishing</h6>
          <h3 className='text-[40px] font-primary leading-[60px] gap-10 font-semibold sm:text-4xl xs:text-3xl xs:py-3 sm:py-3'><span className='text-primary-100'>Amazon</span> Kindle</h3>
          <p>We will provide personal marketing assistants who help promote, manage and run promotional campaigns for your book launch through various online and offline channels They will proide you fits your needs!</p>
          <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-2 py-5 sm:w-[70%] xs:w-[100%]'>
            <a href="tel:855-666-6675" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
            <a href="#" onClick={openLiveChat} className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
          </div>
        </div>}
        {activeTab === 13 && <div>
          <h6 className='text-[30px] font-primary font-semibold text-[#3EA99F]'>Publishing</h6>
          <h3 className='text-[40px] font-primary leading-[60px] gap-10 font-semibold sm:text-4xl xs:text-3xl xs:py-3 sm:py-3'><span className='text-primary-100'>Apple </span> Books</h3>
          <p>We will provide personal marketing assistants who help promote, manage and run promotional campaigns for your book launch through various online and offline channels They will proide you fits your needs!</p>
          <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-2 py-5 sm:w-[70%] xs:w-[100%]'>
            <a href="tel:855-666-6675" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
            <a href="#" onClick={openLiveChat} className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
          </div>
        </div>}
        {activeTab === 14 && <div>
          <h6 className='text-[30px] font-primary font-semibold text-[#3EA99F]'>Publishing</h6>
          <h3 className='text-[40px] font-primary leading-[60px] gap-10 font-semibold sm:text-4xl xs:text-3xl xs:py-3 sm:py-3'>Barnes and <span className='text-primary-100'>Noble Nook</span>  Edition</h3>
          <p>We will provide personal marketing assistants who help promote, manage and run promotional campaigns for your book launch through various online and offline channels They will proide you fits your needs!</p>
          <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-2 py-5 sm:w-[70%] xs:w-[100%]'>
            <a href="tel:855-666-6675" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
            <a href="#" onClick={openLiveChat} className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
          </div>
        </div>}
        {activeTab === 15 && <div>
          <h6 className='text-[30px] font-primary font-semibold text-[#3EA99F]'>Publishing</h6>
          <h3 className='text-[40px] font-primary leading-[60px] gap-10 font-semibold sm:text-4xl xs:text-3xl xs:py-3 sm:py-3'><span className='text-primary-100'>Audio</span> Book</h3>
          <p>We will provide personal marketing assistants who help promote, manage and run promotional campaigns for your book launch through various online and offline channels They will proide you fits your needs!</p>
          <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-2 py-5 sm:w-[70%] xs:w-[100%]'>
            <a href="tel:855-666-6675" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
            <a href="#" onClick={openLiveChat} className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
          </div>
        </div>}
        {activeTab === 16 && <div>
          <h6 className='text-[30px] font-primary font-semibold text-[#3EA99F]'>Publishing</h6>
          <h3 className='text-[40px] font-primary leading-[60px] gap-10 font-semibold sm:text-4xl xs:text-3xl xs:py-3 sm:py-3'><span className='text-primary-100'>Author</span> Website</h3>
          <p>We will provide personal marketing assistants who help promote, manage and run promotional campaigns for your book launch through various online and offline channels They will proide you fits your needs!</p>
          <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-2 py-5 sm:w-[70%] xs:w-[100%]'>
            <a href="tel:855-666-6675" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
            <a href="#" onClick={openLiveChat} className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
          </div>
        </div>}
      </div>
    </div>
  );
}

export default VerticalNavTabs;
