import React from 'react'
import Home from '../Home/Home'
import whatsappmarketing from '../../assets/whatsappmarketing.webp'
import { MdOutlineUsb } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { RiRobot3Line } from "react-icons/ri";
import { MdCountertops } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import HeroSection from '../Home/HeroSection/HeroSection';

const MarketingOverview = () => {
    return (
        <>
            <div>
                <Home />
                <div>
                    <img src={whatsappmarketing} alt="" />
                </div>
                <div className="text-4xl font-medium leading-tight flex justify-center p-8">
                    <span>Our Marketing Suite</span>
                </div>
                <div className='flex flex-wrap gap-10 w-full p-8 justify-center'>
                    <div className="hover:border-cyan-200 hover:cursor-pointer hover:bg-cyan-50 bg-gray-200 border border-transparent rounded-lg flex gap-16 flex-col p-8 items-start transition-all duration-200 ease-out w-80 h-80 shadow-sm hover:shadow-lg">
                        <div>
                            <span className='text-5xl'>
                                <MdOutlineUsb className='bg-cyan-300 border border-transparent rounded-full p-1' />
                            </span>
                            <span className='text-2xl font-semibold'>
                                Conversation Flow
                            </span>
                            <p className='pt-4 text-custom-green'>
                                Improve return on ad spend with WhatsApp Retargeting
                            </p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <span>
                                learn more
                            </span>
                            <span>
                                <FaArrowRightLong />
                            </span>
                        </div>
                    </div>
                    <div className="hover:border-cyan-200 hover:cursor-pointer hover:bg-cyan-50 gap-2 bg-gray-200 border border-transparent rounded-lg flex flex-col justify-between items-start p-8 transition-all duration-200 ease-out w-80 h-80 shadow-sm hover:shadow-lg">
                        <div>
                            <span className='text-5xl'>
                                <HiSpeakerphone className='bg-cyan-300 border border-transparent rounded-full p-1' />
                            </span>
                            <span className='text-2xl font-semibold'>
                                Campaigns and Broadcasts
                            </span>
                            <p className='text-custom-green'>
                                Enhance retention with engaging, non-spammy 2-way WhatsApp campaigns with WhatsApp Retargeting
                            </p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <span>
                                learn more
                            </span>
                            <span>
                                <FaArrowRightLong />
                            </span>
                        </div>
                    </div>
                    <div className="hover:border-cyan-200 hover:cursor-pointer hover:bg-cyan-50 gap-x-4 gap-y-4 bg-gray-200 border border-transparent rounded-lg flex flex-col justify-between items-start p-8 transition-all duration-200 ease-out w-80 h-80 shadow-sm hover:shadow-lg">
                        <div>
                            <span className='text-5xl'>
                                <FaDatabase className='bg-cyan-300 border border-transparent rounded-full p-1' />
                            </span>
                            <span className='text-2xl font-semibold'>
                                Customer Segments
                            </span>
                            <p className='text-custom-green'>
                                Achieve precise targeting and instant engagement for top brands.
                            </p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <span>
                                learn more
                            </span>
                            <span>
                                <FaArrowRightLong />
                            </span>
                        </div>
                    </div>
                    <div className="hover:border-cyan-200 hover:cursor-pointer hover:bg-cyan-50 gap-x-4 gap-y-4 bg-gray-200 border border-transparent rounded-lg flex flex-col justify-between items-start p-8 transition-all duration-200 ease-out w-80 h-80 shadow-sm hover:shadow-lg">
                        <div>
                            <span className='text-5xl'>
                                <RiRobot3Line className='bg-cyan-300 border border-transparent rounded-full p-1' />
                            </span>
                            <span className='text-2xl font-semibold'>
                                WhatsApp Commerce Bot
                            </span>
                            <p className='text-custom-green'>
                                Unlock extra revenue with a seamless WhatsApp buying journey
                            </p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <span>
                                learn more
                            </span>
                            <span>
                                <FaArrowRightLong />
                            </span>
                        </div>
                    </div>
                    <div className="hover:border-cyan-200 hover:cursor-pointer hover:bg-cyan-50 gap-x-4 gap-y-4 bg-gray-200 border border-transparent rounded-lg flex flex-col justify-between items-start p-8 transition-all duration-200 ease-out w-80 h-80 shadow-sm hover:shadow-lg">
                        <div>
                            <span className='text-5xl'>
                                <MdCountertops className='bg-cyan-300 border border-transparent rounded-full p-1' />
                            </span>
                            <span className='text-2xl font-semibold'>
                                RTO Reduction Flows
                            </span>
                            <p className='text-custom-green'>
                                Manage Return-to-Origin effectively through WhatsApp
                            </p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <span>
                                learn more
                            </span>
                            <span>
                                <FaArrowRightLong />
                            </span>
                        </div>
                    </div>
                    <div className="hover:border-cyan-200 hover:cursor-pointer hover:bg-cyan-50 gap-x-4 gap-y-4 bg-gray-200 border border-transparent rounded-lg flex flex-col justify-between items-start p-8 transition-all duration-200 ease-out w-80 h-80 shadow-sm hover:shadow-lg">
                        <div>
                            <span className='text-5xl'>
                                <IoLogoWhatsapp className='bg-cyan-300 border border-transparent rounded-full p-1' />
                            </span>
                            <span className='text-2xl font-semibold'>
                                Click-To-Whatsapp Ads
                            </span>
                            <p className='text-custom-green'>
                                Manage Return-to-Origin effectively through WhatsApp
                            </p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <span>
                                learn more
                            </span>
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
    )
}

export default MarketingOverview;
