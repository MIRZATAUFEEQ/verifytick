// import React from 'react'
// import { FaLinkedin } from "react-icons/fa";
// import { AiOutlineInstagram } from "react-icons/ai";
// import { FaXTwitter } from "react-icons/fa6";


// export default function Footer() {
//     return (
//         <>
//             <div className='flex justify-around leading-tight'>
//                 <div id='firstbox' className='' >
//                     <div id='logo' className='text-xl font-black'>Cartrends</div>
//                     <p className='text-custom-green w-80'>Elevate engagement and satisfaction with AI-enhanced communication journeys. Tailored for fast-growing e-commerce brands.</p>
//                 </div>


//                 <div id='secondbox' className='flex-col flex gap-16 leading-tight'>
//                     <div id='upperbox' className='leading-tight'>
//                         <div className='text-lg'>Products</div>
//                         <li className='list-none text-custom-green hover:text-black hover:cursor-pointer'>support</li>
//                         <li className='list-none text-custom-green hover:text-black hover:cursor-pointer'>marketing</li>
//                     </div>

//                     <div id='downbox' className='leading-tight'>
//                         <div className='text-lg'>Company</div>
//                         <li className='list-none text-custom-green hover:text-black hover:cursor-pointer'>News</li>
//                         <li className='list-none text-custom-green hover:text-black hover:cursor-pointer'>Partnership</li>
//                         <li className='list-none text-custom-green hover:text-black hover:cursor-pointer'>About Us</li>
//                     </div>
//                 </div>


//                 <div id='thirdbox' className='flex-col flex gap-6 leading-tight'>
//                     <div id='upperthirdbox'>
//                         <div className='text-lg'>Marketing</div>
//                         <li className='list-none text-custom-green hover:text-black hover:cursor-pointer'> Campaigns and Broadcasts</li>
//                         <li className='list-none text-custom-green hover:text-black hover:cursor-pointer'>Customer Segments </li>
//                         <li className='list-none text-custom-green hover:text-black hover:cursor-pointer'>WhatsApp Commerce Bot</li>
//                         <li className='list-none text-custom-green hover:text-black hover:cursor-pointer'>Click-to-WhatsApp Ads</li>
//                     </div>
//                     <div id='downthirdbox social'>
//                         <div className='text-lg'>social</div>
//                         <div className='flex gap-3'>

//                             <li className='list-none text-gray-600 text-lg hover:text-black hover:cursor-pointer'><FaLinkedin /></li>
//                             <li className='list-none text-gray-600 text-lg hover:text-black hover:cursor-pointer'><AiOutlineInstagram /></li>
//                             <li className='list-none text-gray-600 text-lg hover:text-black hover:cursor-pointer'><FaXTwitter /></li>
//                         </div>



//                     </div>
//                 </div>


//                 <div id='fourthbox' className='leading-tight'>
//                     <div className='text-lg'>Support</div>
//                     <li className='list-none text-custom-green hover:text-black hover:cursor-pointer'>Support Chatbot</li>
//                     <li className='list-none text-custom-green hover:text-black hover:cursor-pointer'>Level-3 AI</li>
//                     <li className='list-none text-custom-green hover:text-black hover:cursor-pointer'>AI Copilot </li>
//                     <li className='list-none text-custom-green hover:text-black hover:cursor-pointer'>Intelligent CSAT</li>
//                     <li className='list-none text-custom-green hover:text-black hover:cursor-pointer'>Support Analytics</li>
//                 </div>


//             </div>
//             <div id='Bottombar'>
//                 <div className=' border-t border-t-black mt-7 ml-5 mr-5'></div>
//                 <div className='flex  h-10 items-center justify-between ml-5 mr-5'>
//                     <div className='flex gap-3'>
//                     <li className='list-none text-black'>Data Policy</li>
//                     <li className='list-none text-black'>Privacy Policy</li>
//                     <li className='list-none text-black'>Service Level Agreement</li>
//                     <li className='list-none text-black'>Terms of Service</li>
//                     </div>
//                     <div>
//                     © 2024, Cartrends Pvt Ltd
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }




import React, { useState } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"; // Icons for collapse/expand
import Logo from '../../assets/logo.png'

export default function Footer() {
    const [showProducts, setShowProducts] = useState(false);
    const [showCompany, setShowCompany] = useState(false);
    const [showMarketing, setShowMarketing] = useState(false);

    return (
        <>
            <div className='flex flex-col md:flex-row justify-around items-start leading-tight p-5 bg-white'>
                {/* First box */}
                <div id='firstbox' className='mb-8 md:mb-0'>
                    <div id='logo' className='text-xl font-black'><img src={Logo} alt="" className='w-auto h-20'/></div>
                    <p className='text-custom-green w-full md:w-80'>
                        Elevate engagement and satisfaction with AI-enhanced communication journeys. Tailored for fast-growing e-commerce brands.
                    </p>
                </div>

                {/* Second box */}
                <div id='secondbox' className='flex flex-col gap-8 md:gap-16 mb-8 md:mb-0'>
                    {/* Products Section */}
                    <div id='upperbox' className='leading-tight'>
                        <div 
                            className='text-lg flex justify-between items-center cursor-pointer md:cursor-default'
                            onClick={() => setShowProducts(!showProducts)}
                        >
                            Products
                            {/* Icons visible on mobile only */}
                            <span className='md:hidden'>
                                {showProducts ? <AiOutlineMinus /> : <AiOutlinePlus />}
                            </span>
                        </div>
                        {/* Child menu: visible on mobile when toggled, always visible on desktop */}
                        <ul className={`pl-4 ${showProducts ? 'block' : 'hidden'} md:block`}>
                            <li className='list-none text-custom-green hover:text-black hover:cursor-pointer'>Support</li>
                            <li className='list-none text-custom-green hover:text-black hover:cursor-pointer'>Marketing</li>
                        </ul>
                    </div>

                    {/* Company Section */}
                    <div id='downbox' className='leading-tight'>
                        <div 
                            className='text-lg flex justify-between items-center cursor-pointer md:cursor-default'
                            onClick={() => setShowCompany(!showCompany)}
                        >
                            Company
                            <span className='md:hidden'>
                                {showCompany ? <AiOutlineMinus /> : <AiOutlinePlus />}
                            </span>
                        </div>
                        <ul className={`pl-4 ${showCompany ? 'block' : 'hidden'} md:block`}>
                            <li className='list-none text-custom-green hover:text-black hover:cursor-pointer'>News</li>
                            <li className='list-none text-custom-green hover:text-black hover:cursor-pointer'>Partnership</li>
                            <li className='list-none text-custom-green hover:text-black hover:cursor-pointer'>About Us</li>
                        </ul>
                    </div>
                </div>

                {/* Third box */}
                <div id='thirdbox' className='flex flex-col gap-6 mb-8 md:mb-0'>
                    {/* Marketing Section */}
                    <div id='upperthirdbox'>
                        <div 
                            className='text-lg flex justify-between items-center cursor-pointer md:cursor-default'
                            onClick={() => setShowMarketing(!showMarketing)}
                        >
                            Marketing
                            <span className='md:hidden'>
                                {showMarketing ? <AiOutlineMinus /> : <AiOutlinePlus />}
                            </span>
                        </div>
                        <ul className={`pl-4 ${showMarketing ? 'block' : 'hidden'} md:block`}>
                            <li className='list-none text-custom-green hover:text-black hover:cursor-pointer'>Campaigns and Broadcasts</li>
                            <li className='list-none text-custom-green hover:text-black hover:cursor-pointer'>Customer Segments</li>
                            <li className='list-none text-custom-green hover:text-black hover:cursor-pointer'>WhatsApp Commerce Bot</li>
                            <li className='list-none text-custom-green hover:text-black hover:cursor-pointer'>Click-to-WhatsApp Ads</li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div id='downthirdbox social'>
                        <div className='text-lg'>Social</div>
                        <div className='flex gap-3'>
                            <li className='list-none text-gray-600 text-lg hover:text-black hover:cursor-pointer'><FaLinkedin /></li>
                            <li className='list-none text-gray-600 text-lg hover:text-black hover:cursor-pointer'><AiOutlineInstagram /></li>
                            <li className='list-none text-gray-600 text-lg hover:text-black hover:cursor-pointer'><FaXTwitter /></li>
                        </div>
                    </div>
                </div>

                {/* Fourth box */}
                <div id='fourthbox' className='leading-tight'>
                    <div className='text-lg'>Support</div>
                    <li className='list-none text-custom-green hover:text-black hover:cursor-pointer'>Support Chatbot</li>
                    <li className='list-none text-custom-green hover:text-black hover:cursor-pointer'>Level-3 AI</li>
                    <li className='list-none text-custom-green hover:text-black hover:cursor-pointer'>AI Copilot</li>
                    <li className='list-none text-custom-green hover:text-black hover:cursor-pointer'>Intelligent CSAT</li>
                    <li className='list-none text-custom-green hover:text-black hover:cursor-pointer'>Support Analytics</li>
                </div>
            </div>

            {/* Bottom Bar */}
            <div id='Bottombar' className='mt-7'>
                <div className='border-t border-black mt-7'></div>
                <div className='flex flex-col md:flex-row justify-between items-center h-auto md:h-10 p-4'>
                    <div className='flex flex-col md:flex-row gap-3 mb-4 md:mb-0'>
                        <li className='list-none text-black hover:cursor-pointer'>Data Policy</li>
                        <li className='list-none text-black hover:cursor-pointer'>Privacy Policy</li>
                        <li className='list-none text-black hover:cursor-pointer'>Service Level Agreement</li>
                        <li className='list-none text-black hover:cursor-pointer'>Terms of Service</li>
                    </div>
                    <div className='text-center md:text-right'>
                        © 2024, Cartrends Pvt Ltd
                    </div>
                </div>
            </div>
        </>
    );
}
