import React from 'react';
import Joinbtn from '../../../components/Joinbtn';
import heroSection2 from '../../../assets/heroSection2.jpeg';

const HeroSection = () => {
    return (
        <div className='w-full h-auto p-5'>
            <div className="flex flex-col lg:flex-row rounded-2xl bg-[#0a5d4d] text-white h-screen">
                <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center items-center text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
                        Revolutionize your customer experience and accelerate business growth
                    </h1>
                    <div className='w-full max-w-xs flex justify-center'>
                        <Joinbtn />
                    </div>
                </div>
                <div className="flex-1 bg-cover bg-center overflow-hidden">
                    <img src={heroSection2} className='w-full lg:rounded-l-full h-full object-cover' alt="" />
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
