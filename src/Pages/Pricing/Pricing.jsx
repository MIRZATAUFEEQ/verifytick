import React from 'react';
import { HiSpeakerphone } from 'react-icons/hi';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { FaBuilding } from 'react-icons/fa';

const Pricing = () => {
    return (
        <div className='flex flex-col items-center pt-16'>
            <h1 className='text-center p-4 w-full sm:w-80 md:w-96 lg:w-128 text-wrap text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight tracking-wider mb-4 font-bold'>
                Choose a plan that’s right for your growth trajectory!
            </h1>
            <div className='flex flex-wrap justify-center p-4 gap-8'>
                {/* Pro Marketing Plan */}
                <div className='border border-neutral-300 bg-white rounded-[1.25rem] p-6 md:p-8 transition-shadow duration-250 ease-out relative text-primary font-inter text-base font-normal leading-7 w-full sm:w-80 hover:bg-cyan-50 hover:cursor-pointer hover:border-cyan-200 shadow-sm hover:shadow-lg'>
                    <div className='flex flex-col gap-4 mb-4'>
                        <div className='flex gap-4'>
                            <span>
                                <HiSpeakerphone className='text-4xl text-cyan-200 bg-custom-light-green rounded-full p-1' />
                            </span>
                            <h1 className='text-lg font-semibold'>Pro Marketing</h1>
                        </div>
                        <p className='border-b-2'>Drive impactful campaigns and build customer relationships with advanced AI-driven marketing tools.</p>
                    </div>
                    <div className='flex gap-3 flex-col'>
                        <div>✅ 2-way WhatsApp Journey and Campaign Builder</div>

                        <div>✅ AI-Powered Customer Segments</div>

                        <div>✅ WhatsApp Commerce Bot</div>

                        <div>✅ Deep Campaign Analytics</div>

                        <div>✅ Store, 3PL & Return Integrations</div>

                        <div>✅ Custom Integrations and Flows</div>

                        <div>✅ Dedicated Onboarding</div>

                        <div>✅ Dedicated Product Consultant</div>

                        <div>✅ Meta Charges Additional++</div>
                    </div>
                </div>
                {/* Pro Support Plan */}
                <div className='border border-neutral-300 bg-white rounded-[1.25rem] p-6 md:p-8 transition-shadow duration-250 ease-out relative text-primary font-inter text-base font-normal leading-7 w-full sm:w-80 hover:bg-cyan-50 hover:cursor-pointer hover:border-cyan-200 shadow-sm hover:shadow-lg'>
                    <div className='flex flex-col gap-4 mb-4'>
                        <div className='flex gap-4'>

                            <span>
                                <BiMessageRoundedDots className='text-4xl text-cyan-200 bg-custom-light-green rounded-full p-1' />
                            </span>
                            <h1 className='text-lg font-semibold'>Pro Support</h1>
                        </div>
                        <p className='border-b-2'>

                            Empower your support team with AI automation and insightful analytics for outstanding customer service.
                        </p>
                    </div>
                    <div className='flex gap-3 flex-col'>
                        <div>
                            ✅ AI-Driven Support Automation
                        </div>
                        <div>
                            ✅ Omnichannel e-commerce CRM
                        </div>
                        <div>
                            ✅ Deep conversation-level insights
                        </div>
                        <div>
                            ✅ Comprehensive Team Analytics
                        </div>
                        <div>
                            ✅ Store, 3PL & Return Integrations
                        </div>
                        <div>
                            ✅ Custom Integrations and Flows
                        </div>
                        <div>
                            ✅ Dedicated Onboarding
                        </div>
                        <div>
                            ✅ Dedicated Product Consultant
                        </div>
                        <div>
                            ✅ Meta Charges Additional++
                        </div>
                    </div>
                </div>
                {/* Enterprises Plan */}
                <div className='border border-neutral-300 bg-white rounded-[1.25rem] p-6 md:p-8 transition-shadow duration-250 ease-out relative text-primary font-inter text-base font-normal leading-7 w-full sm:w-80 hover:bg-cyan-50 hover:cursor-pointer hover:border-cyan-200 shadow-sm hover:shadow-lg'>
                    <div className='flex gap-4 flex-col mb-4'>
                        <div className='flex gap-4'>
                            <span>
                                <FaBuilding className='text-4xl text-cyan-200 bg-custom-light-green rounded-full p-1' />
                            </span>
                            <h1 className='text-lg font-semibold'>Enterprises</h1>
                        </div>
                        <p className='border-b-2 pb-8'>Custom AI solutions and dedicated support to scale your business operations to new heights.</p>
                    </div>
                    <div className='flex gap-3 flex-col'>

                        <div>
                            ✅ Custom AI Solution
                        </div>

                        <div>
                            ✅ AI-Powered Customer Segments
                        </div>

                        <div>
                            ✅ WhatsApp Commerce Bot
                        </div>

                        <div>
                            ✅ Custom Analytics Report
                        </div>

                        <div>
                            ✅ Store, 3PL & Return Integrations
                        </div>

                        <div>
                            ✅ Custom Integrations and Flows
                        </div>

                        <div>
                            ✅ Dedicated Onboarding
                        </div>

                        <div>
                            ✅ Dedicated Product Consultant
                        </div>

                        <div>
                            ✅ Meta Charges Additional++
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
