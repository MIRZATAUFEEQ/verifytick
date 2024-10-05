import React from 'react';
import HeroSection from '../Home/HeroSection/HeroSection';

const OurStory = () => {
    return (
        <>

            <div className="flex justify-center p-5">
                <div className="max-w-xl w-full p-5 md:p-10">
                    <h1 className="text-2xl font-bold mb-4">Unlock Your Business Potential with Verifytick's Custom WhatsApp Bots</h1>
                    <p className="text-gray-700">
                        Verifytick is a forward-thinking company that specializes in providing custom WhatsApp bots tailored to the unique needs of business owners. Our goal is to help businesses streamline their customer interactions, automate repetitive tasks, and enhance overall efficiency. By leveraging the power of WhatsApp, one of the world's most popular messaging platforms, Verifytick empowers businesses to grow by optimizing their communication processes and improving customer engagement.
                    </p>
                    <p className="text-gray-700 mt-4">
                        Whether it's handling customer inquiries, managing orders, or offering personalized support, our custom bots ensure that businesses can stay connected with their audience 24/7, enabling faster response times and better service. At Verifytick, we focus on providing solutions that drive business growth, helping entrepreneurs and companies of all sizes unlock the potential of WhatsApp to elevate their operations and build lasting relationships with customers.
                    </p>
                </div>
            </div>
            <div>
                <HeroSection />
            </div>
        </>
    );
}

export default OurStory;
