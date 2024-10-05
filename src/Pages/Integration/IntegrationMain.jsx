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

            <div className="flex flex-col md:flex-row justify-between px-5 md:px-20 items-center rounded-lg p-5 md:p-10 w-full bg-gray-100 shadow-md">
            <ul className="list-none p-0 m-0 mb-5 flex flex-col md:flex-row">
                <li className="text-gray-600 py-2 text-lg hover:text-black hover:cursor-pointer">Online Stores</li>
                <li className="text-gray-600 py-2 text-lg hover:text-black hover:cursor-pointer">Payment and Checkout</li>
            </ul>
            <div className='h-96 overflow-scroll scroll-smooth w-full'>
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

