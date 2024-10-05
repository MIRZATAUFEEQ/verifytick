import React from 'react';
import herosection1 from '../../../assets/herosection1.jpeg';
import { FaArrowRightLong } from "react-icons/fa6";
import HeroSection from '../HeroSection/HeroSection';

const CustomerStories = () => {
  return (
    <>
      <div className='p-5 md:p-10'>
        <h1 className='text-center text-2xl md:text-4xl font-semibold p-5 md:p-10'>
          Customer stories to Inspire You
        </h1>

        <div className='flex flex-col md:flex-row justify-center md:justify-around gap-5 md:gap-0'>
          {/* first card */}
          <div id='card' className='w-full md:w-[22rem] hover:bg-gray-200 hover:cursor-pointer border border-cyan-200 rounded-2xl overflow-hidden'>
            <div className='rounded-2xl group'>
              <img
                src={herosection1}
                className='rounded-2xl transform transition duration-300 ease-in-out group-hover:scale-110'
                alt=""
              />
            </div>
            <div className='p-5'>
              StayVista Drives Lead Engagement and Guest Satisfaction via WhatsApp and Instagram Automation
            </div>
            <div className='flex items-center gap-2 p-3 justify-center'>
              <span>Learn more</span>
              <span>
                <FaArrowRightLong />
              </span>
            </div>
          </div>

          {/* second card */}
          <div id='card' className='w-full md:w-[22rem] hover:bg-gray-200 hover:cursor-pointer border border-cyan-200 rounded-2xl overflow-hidden'>
            <div className='rounded-2xl group'>
              <img
                src={herosection1}
                className='rounded-2xl transform transition duration-300 ease-in-out group-hover:scale-110'
                alt=""
              />
            </div>
            <div className='p-5'>
              StayVista Drives Lead Engagement and Guest Satisfaction via WhatsApp and Instagram Automation
            </div>
            <div className='flex items-center gap-2 p-3 justify-center'>
              <span>Learn more</span>
              <span>
                <FaArrowRightLong />
              </span>
            </div>
          </div>

          {/* third card */}
          <div id='card' className='w-full md:w-[22rem] hover:bg-gray-200 hover:cursor-pointer border border-cyan-200 rounded-2xl overflow-hidden'>
            <div className='rounded-2xl group'>
              <img
                src={herosection1}
                className='rounded-2xl transform transition duration-300 ease-in-out group-hover:scale-110'
                alt=""
              />
            </div>
            <div className='p-5'>
              StayVista Drives Lead Engagement and Guest Satisfaction via WhatsApp and Instagram Automation
            </div>
            <div className='flex items-center gap-2 p-3 justify-center'>
              <span>Learn more</span>
              <span>
                <FaArrowRightLong />
              </span>
            </div>
          </div>
        </div>
      </div>
<div>
  <HeroSection/>
</div>
    </>
  );
}

export default CustomerStories;
