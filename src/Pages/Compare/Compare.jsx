import React from 'react'
import comparemenu from '../../assets/comparemenu.webp'
import Joinbtn from '../../components/Joinbtn'

const Compare = () => {
  return (
    <>
      <div className='flex p-5 w-full'>
        <div id='text' className='w-1/2 p-7 flex flex-col gap-4'>

          <h1 class="font-[500] text-[4rem] leading-[1.2] text-left">
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
        <div id='image' className='w-1/2 bg-customColor rounded-3xl'>
          <img src={comparemenu} alt="" />
        </div>
      </div>

      <div className='w-full'>
        <h1>WHY LimeChat?</h1>
        <div id='textwhylimechat' className=''>
          <h1>Chatbots better than your best agents.</h1>
          <p>
            Confidently handle 90% of customer inquiries with the world’s first GPT-powered bot for commerce. Grow your brand without adding to your support team.
          </p>
        </div>

        <div id='imgylimechat' className=''>


        </div>
      </div>

    </>
  )
}

export default Compare