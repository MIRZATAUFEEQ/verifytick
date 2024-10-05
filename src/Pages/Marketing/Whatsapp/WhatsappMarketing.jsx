import React from 'react'
import Joinbtn from '../../../components/Joinbtn'
import headerimg from '../../../assets/headerimg.png'
import whatsapp2 from '../../../assets/whatsapp2.png'
import HeroSection from '../../Home/HeroSection/HeroSection'

const WhatsappMarketing = () => {
    return (
        <>
            <div>

                <div id='sectionfirst' className='w-full flex flex-col md:flex-row items-center justify-center gap-10'>
                    <div className='w-full md:w-[35rem] p-5 md:p-10'>
                        <h1 className='text-[1.875rem] md:text-[2.438rem] font-bold leading-8 md:leading-10'>
                            Boost your business with powerful WhatsApp Bot, engage, grow!
                        </h1>
                        <p className='py-5 text-sm md:text-base'>
                            Connect with your customers on their favorite platform—WhatsApp. Turn leads into loyal customers through personalized, real-time conversations with our WhatsApp Marketing Software.
                        </p>
                        <div className='w-[10rem] md:w-[10rem]'>
                            <Joinbtn />
                        </div>
                    </div>

                    <div className='w-[18rem] md:w-[25rem]'>
                        <img src={headerimg} alt="Header" />
                    </div>
                </div>

                <div id='sectionsecond' className='flex flex-col-reverse md:flex-row justify-center border-t w-full p-8 md:p-16'>
                    <div className='w-full md:w-1/2'>
                        <h1 className='text-xl md:text-2xl font-semibold'>
                            Dynamic media and interactive features
                        </h1>
                        <p className='text-sm md:text-base'>
                            Elevate your WhatsApp marketing with dynamic media and interactive tools that capture attention!
                        </p>
                        <div id='first' className='flex items-center'>
                            <span className='text-sm md:text-lg font-semibold'>
                                Multimedia content –
                            </span>
                            <p className='text-sm md:text-base'>videos, images, and document attachments</p>
                        </div>
                        <br />
                        <div id='second' className='flex items-center'>
                            <span className='text-sm md:text-lg font-semibold'>
                                Interactive features –
                            </span>
                            <p className='text-sm md:text-base'>
                                Call-to-Action buttons, Quick reply options, and lists.
                            </p>
                        </div>
                        <br />
                        <div id='third' className='flex items-center gap-4'>
                            <span className='text-sm md:text-lg font-semibold'>Call-to-Action</span>
                            <p className='text-sm md:text-base'>buttons guide your customers to product pages or checkout, greatly enhancing the ROI of your WhatsApp campaigns!</p>
                        </div>
                    </div>

                    <div className='w-[18rem] md:w-[25rem] mb-8 md:mb-0'>
                        <img src={whatsapp2} alt="WhatsApp" />
                    </div>
                </div>
            </div>
            <div>
                <HeroSection/>
            </div>
        </>
    )
}

export default WhatsappMarketing
