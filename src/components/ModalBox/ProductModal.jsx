
import React from 'react';
import marketing from '../../assets/marketing.avif';
import { FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { IoLogoWhatsapp } from "react-icons/io";

const ProductModal = () => {
    return (
        <>
            <div id='main' className='flex justify-center md:flex-row w-auto max-w-[24rem] gap-4 md:gap-1 border-black bg-white'>
                {/* Marketing Section🤣😎👟😃😂 */}
                <div id='marketing' className='flex justify-center items-center flex-col gap-4 md:gap-2 md:w-112 bg-white rounded-lg'>
                    <Link to='/marketing'>
                        <div id='marketingimg' className='p-4 md:p-2 flex flex-col gap-2 w-[24rem] border border-transparent hover:border-cyan-200 rounded-lg hover:bg-cyan-50'>
                            <span className='text-black'>MARKETING</span>
                            <img src={marketing} alt="Marketing" className='h-28 w-full md:w-52 rounded-lg' />
                            <div className='flex items-center text-black gap-4'>
                                <span>Marketing Overview</span>
                                <span><FaAngleRight /></span>
                            </div>
                        </div>
                    </Link>
                    <div className='flex gap-3 flex-col w-[24rem] bg-white'>
                        <Link to='/whatsappmarketing'>
                            <div className='p-2 border border-transparent hover:border-cyan-200 hover:cursor-pointer rounded-lg hover:bg-cyan-50 flex items-center gap-1 text-black'>
                                <span className='h-5 w-5 rounded-full'><IoLogoWhatsapp /></span>
                                <span>Whatsapp Marketing</span>
                            </div>
                        </Link>
                        {/* write code here about whatsappmarketing😃😃😂😂😡😡✂️ */}
                    </div>
                </div>
            </div>

            {/* write support section code ✂️✂️😡😂😃👟👟😎🤣 here */}
        </>
    );
}

export default ProductModal;
