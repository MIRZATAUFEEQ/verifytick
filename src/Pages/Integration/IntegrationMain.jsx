import React from 'react';
import IntegrationHerosectino from './IntegrationHerosectino';
import HeroSection from '../Home/HeroSection/HeroSection';
import OnlineStore from '../PageIntegration/OnlineStore';
import Payment_checkout from '../PageIntegration/Payment_checkout';
import './style.css';  // import your CSS file


const IntegrationMain = () => {
    return (
        <>
            <IntegrationHerosectino />

            <div className="flex justify-between px-20 items-center rounded-lg p-10 w-full bg-gray-100 shadow-md">
                <ul className="list-none p-0 m-0 mb-5">
                    <li className="text-gray-600 py-2 text-lg hover:text-black hover:cursor-pointer">Online Stores</li>
                    <li className="text-gray-600 py-2 text-lg hover:text-black hover:cursor-pointer">Payment and Checkout</li>
                    <li className="text-gray-600 py-2 text-lg hover:text-black hover:cursor-pointer">Logistics</li>
                    <li className="text-gray-600 py-2 text-lg hover:text-black hover:cursor-pointer">Marketing</li>
                    <li className="text-gray-600 py-2 text-lg hover:text-black hover:cursor-pointer">Channels</li>
                    <li className="text-gray-600 py-2 text-lg hover:text-black hover:cursor-pointer">Customer Service and CRM</li>
                    <li className="text-gray-600 py-2 text-lg hover:text-black hover:cursor-pointer">Calling Services</li>
                    <li className="text-gray-600 py-2 text-lg hover:text-black hover:cursor-pointer">Other Integrations</li>
                </ul>
                <div className='h-96 overflow-scroll scroll-smooth'>
                    <div>
                        <OnlineStore />
                    </div>
                    <div>
                        <Payment_checkout />
                    </div>
                </div>
            </div>
            <HeroSection />
        </>
    );
};

export default IntegrationMain;

