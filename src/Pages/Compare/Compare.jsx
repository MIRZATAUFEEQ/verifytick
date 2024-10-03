import React from 'react'
import comparemenu from '../../assets/comparemenu.webp'
import Joinbtn from '../../components/Joinbtn'
import comparemenu2 from '../../assets/comparemenu2.webp'
import comparemenu3 from '../../assets/comparemenu3.webp'
import comparemenu4 from '../../assets/comparemenu4.webp'
import { FaCheckCircle } from "react-icons/fa";
import { FaCheck, FaXmark } from "react-icons/fa6";


const Compare = () => {
  return (
    <>
      {/* first section */}
      <div id='first-section' className='flex flex-col md:flex-row p-5 md:p-10 w-full mt-8'>
        <div id='text' className='w-full md:w-1/2 p-4 md:p-7 flex flex-col gap-4'>
          <h1 className="font-[500] text-[2rem] md:text-[3rem] leading-[1.2] text-left">
            The only GPT-Powered<br />
            Experience for<br />
            E-commerce
          </h1>
          <p className='text-slate-600'>
            Combine the power of GPT with our Level-3 AI technology to deliver exceptional experiences at affordable costs. See your automation and CSAT skyrocket. Get unparalleled insights into your CX.
          </p>
          <div className='flex'>
            <Joinbtn />
          </div>
        </div>
        <div id='image' className='w-full md:w-1/2 bg-customColor rounded-3xl'>
          <img src={comparemenu} alt="" />
        </div>
      </div>

      {/* second section */}
      <div id='second-section' className='p-5 md:p-8 mt-5'>
        <h1 className='text-center text-2xl md:text-4xl font-bold p-8'>WHY Verifytick?</h1>
        <div className='flex flex-col md:flex-row w-full'>
          <div id='textwhyVerifytick' className='w-full md:w-1/2 p-8 md:p-16 flex flex-col gap-4'>
            <h1 className='text-2xl md:text-4xl font-medium leading-[1.2]'>
              Chatbots better than your best agents.
            </h1>
            <p className='text-slate-600'>
              Confidently handle 90% of customer inquiries with the world’s first GPT-powered bot for commerce. Grow your brand without adding to your support team.
            </p>
          </div>
          <div id='compare2' className='w-full md:w-1/2 bg-customColor rounded-3xl'>
            <img src={comparemenu2} alt="" />
          </div>
        </div>

        {/* third section */}
        <div id='third-section' className='w-full flex flex-col md:flex-row items-center gap-10 p-5 md:p-16'>
          <div id='foraddimage' className='w-full md:w-1/2 bg-customColor rounded-3xl'>
            <img src={comparemenu3} alt="" />
          </div>
          <div id='textsection' className='w-full md:w-1/2 p-5 md:p-20 flex flex-col gap-4'>
            <h1 className='text-2xl md:text-4xl font-medium leading-[1.2]'>
              Improve Agent Productivity with AI Workflows
            </h1>
            <p className='text-slate-600'>
              Boost your team's efficiency—from order placement to tracking and returns. Utilize AI to personalize interactions and consistently provide exceptional customer experiences.
            </p>
          </div>
        </div>

        {/* fourth section */}
        <div id='fourth-section' className='flex flex-col md:flex-row items-center w-full'>
          <div id='textsection' className='w-full md:w-1/2 p-5 md:p-20 flex flex-col gap-4'>
            <h1 className='text-2xl md:text-4xl font-medium leading-[1.2]'>
              Replace Meta Ads with Interactive WhatsApp<br /> Journeys
            </h1>
            <p className='text-slate-600'>
              Transform acquisition, conversion, and retention with engaging two-way WhatsApp campaigns. Stop spamming and delight your customers on WhatsApp.
            </p>
          </div>
          <div className='w-full md:w-1/2 bg-customColor rounded-3xl'>
            <img src={comparemenu4} alt="" />
          </div>
        </div>

        {/* fifth section */}
        <div id='main' className='flex flex-col items-center justify-center py-10'>
          <div className='text-2xl md:text-4xl font-semibold mb-5'>Comparison</div>
          <div className='grid grid-cols-1 md:grid-flow-col gap-5 md:gap-10 border p-5 max-w-4xl w-full'>
            <div id='left' className='flex flex-col space-y-4'>
              <div>GPT-Powered Chatbot</div>
              <div>AI CRM and Analytics</div>
              <div>Advanced Bot Flows</div>
              <div>iPhone Pop Ups</div>
              <div>Non-Spammy Campaigns</div>
            </div>
            <div id='mid' className='flex flex-col space-y-4'>
              <div>✅</div>
              <div>✅</div>
              <div>✅</div>
              <div>✅</div>
              <div>✅</div>
            </div>
            <div id='right' className='flex flex-col space-y-4'>
              <div>❌</div>
              <div>❌</div>
              <div>❌</div>
              <div>❌</div>
              <div>❌</div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Compare
