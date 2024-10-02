import React from 'react';
import { BiSupport } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsBarChart } from "react-icons/bs";
import { Link } from 'react-router-dom';

const ProductSuitCard = () => {
    return (
        <>
            <div id='ProductSuitCard' className='flex flex-col gap-5 mt-12 px-4'>
                <h1 className='text-3xl md:text-4xl font-medium leading-tight text-center p-4 md:p-5'>
                    Verifytick Product Suite
                </h1>
                <div className='flex flex-col md:flex-row justify-center gap-5'>

                    <Link to=''>
                        <div className="border-cyan-200 hover:border-cyan-200 hover:cursor-pointer hover:bg-cyan-50 bg-gray-200 border border-transparent rounded-lg flex gap-4 md:gap-16 flex-col p-6 md:p-8 items-start transition-all duration-200 ease-out w-72 md:w-80 h-auto md:h-80 shadow-sm hover:shadow-lg mx-auto">
                            <div>
                                <span className='text-4xl md:text-5xl'>
                                    <BiSupport className='bg-cyan-300 border border-transparent rounded-full p-1' />
                                </span>
                                <span className='text-xl md:text-2xl font-semibold'>
                                    Support
                                </span>
                                <p className='pt-4 text-custom-green text-sm md:text-base'>
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
                    </Link>

                    <Link to='/marketing'>
                        <div className="border-cyan-200 hover:border-cyan-200 hover:cursor-pointer hover:bg-cyan-50 bg-gray-200 border border-transparent rounded-lg flex gap-4 md:gap-16 flex-col p-6 md:p-8 items-start transition-all duration-200 ease-out w-72 md:w-80 h-auto md:h-80 shadow-sm hover:shadow-lg mx-auto">
                            <div>
                                <span className='text-4xl md:text-5xl'>
                                    <BsBarChart className='bg-cyan-300 border border-transparent rounded-full p-1' />
                                </span>
                                <span className='text-xl md:text-2xl font-semibold'>
                                    Marketing
                                </span>
                                <p className='pt-4 text-custom-green text-sm md:text-base'>
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
                    </Link>
                </div>
            </div>
        </>
    );
}

export default ProductSuitCard;
