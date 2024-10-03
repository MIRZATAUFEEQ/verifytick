import React from 'react'
import { SiWoocommerce } from "react-icons/si";

const IntegrationHerosectino = () => {
    return (
        <>
            <div className="bg-white">
                {/* Main Container */}
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        {/* Left Section */}
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl font-bold text-gray-900">
                            Verifytick syncs seamlessly with your complete automotive stack.
                            </h2>
                            <p className="mt-4 text-lg text-gray-600">
                            Create enhanced interactions on WhatsApp by leveraging information from your inventory, promotions, transactions, and delivery systems.                            </p>
                        </div>

                        {/* Right Section (Logo Grid) */}
                        <div className="mt-8 lg:mt-0 lg:w-1/2 grid grid-cols-3 gap-6 items-center">
                            {/* Add your logos here */}
                            {/* <img
                                src={<SiWoocommerce/>}
                                alt="WooCommerce"
                                className="h-12 mx-auto"
                            /> */}
                            <span className="h-12 mx-auto"><SiWoocommerce className='text-8xl'/></span>
                            <img
                                src="https://seeklogo.com/images/M/magento-logo-240B2F5AA3-seeklogo.com.png"
                                alt="Magento"
                                className="h-12 mx-auto"
                            />
                            <img
                                src="https://dukaan.io/images/logo.svg"
                                alt="Dukaan"
                                className="h-12 mx-auto"
                            />
                            <img
                                src="https://ncommerce.com/nc-logo.png"
                                alt="NCommerce"
                                className="h-12 mx-auto"
                            />
                            <img
                                src="https://clickpost.ai/assets/images/clickpost-logo-dark.svg"
                                alt="ClickPost"
                                className="h-12 mx-auto"
                            />
                            <img
                                src="https://pickrr.com/img/pickrr-logo.png"
                                alt="Pickrr"
                                className="h-12 mx-auto"
                            />
                            <img
                                src="https://shopflo.io/images/logo.svg"
                                alt="Shopflo"
                                className="h-12 mx-auto"
                            />
                            <img
                                src="https://simpl.com/logo.png"
                                alt="Simpl"
                                className="h-12 mx-auto"
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/4/41/Stripe_Logo%2C_revised_2016.svg"
                                alt="Stripe"
                                className="h-12 mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default IntegrationHerosectino