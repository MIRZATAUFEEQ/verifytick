import React from 'react'
// import { SiWoocommerce } from "react-icons/si";
import Magentologo from '../../assets/Magentologo.png'
import woocommercelogo from '../../assets/woocommercelogo.png'
import shopifylogo from '../../assets/shopifylogo.png'
import dukaanlogo from '../../assets/dukaanlogo.png'
import farziengineerlogo from '../../assets/farziengineerlogo.png'
import stripelogo from '../../assets/stripelogo.png'
import clickpostlogo from '../../assets/clickpostlogo.png'
import pickrrlogo from '../../assets/pickrrlogo.png'
import shopflologo from '../../assets/shopflologo.png'
import payulogo from '../../assets/payulogo.png'


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
                            <img
                                src={woocommercelogo}
                                alt="WooCommerce"
                                className="h-12 mx-auto"
                            />
                            {/* <span className="h-12 mx-auto"></span> */}
                            <img
                                src={Magentologo}
                                alt="Magento"
                                className="h-12 mx-auto"
                            />
                            <img
                                src={dukaanlogo}
                                alt="Dukaan"
                                className="h-12 mx-auto"
                            />
                            <img
                                src={stripelogo}
                                alt="Stripe"
                                className="h-12 mx-auto"
                            />
                            <img
                                src={clickpostlogo}
                                alt="ClickPost"
                                className="h-12 mx-auto"
                            />
                            <img
                                src={payulogo}
                                alt="Payu"
                                className="h-12 mx-auto"
                            />
                            <img
                                src={shopifylogo}
                                alt="Shopify"
                                className="h-12 mx-auto"
                            />
                            <img
                                src={pickrrlogo}
                                alt="Pickrr"
                                className="h-12 mx-auto"
                            />
                            <img
                                src={shopflologo}
                                alt="Shopflo"
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