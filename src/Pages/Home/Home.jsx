// src/pages/Home.jsx

import React from 'react';
import Joinbtn from '../../components/Joinbtn';
import headerimg from '../../assets/headerimg.png';
import { useTypewriter, Cursor } from 'react-simple-typewriter'


export const Home = () => {

    //  typeEffect Animation
    const [typeEffect] = useTypewriter({
      words: ['Grow Sales Instantly','Market On Whatsapp','Boost Engagement Seamlessly','Drive Success Automatically','Simplify Customer Interaction','Accelerate Business Growth','Enhance Sales Automation','Streamline Client Support'],
      loop: {},
      typeSpeed: 100,
      deleteSpeed: 80,
      delaySpeed: 3000,
    })

  return (
    <>
      <div className='flex flex-col md:flex-row justify-center md:justify-between items-center w-full h-auto'>
        <div id='paragraf' className='flex flex-col items-center justify-center p-6 md:pl-12 md:px-20 w-full md:w-[40rem]'>
          <p className='text-4xl sm:text-4xl md:text-4xl lg:text-5xl text-center leading-tight h-[7rem]'>
            <span>{typeEffect}</span>
            <Cursor cursorColor='cyan'/>
          </p>
          <p className='text-center mt-2 w-full sm:w-80 md:w-96 lg:w-112 text-gray-500'>
            Combine the power of AI with messaging to lower CAC, enhance retention, and deliver exceptional support.
          </p>
          <div id='button' className='mt-4'>
            <Joinbtn />
          </div>
        </div>

        <div className='w-full md:w-1/2 mt-6 md:mt-0'>
          <div>
            <img src={headerimg} alt="header" className='hidden sm:block mx-auto' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
