import React from 'react';
import shopifylogo from "../../assets/shopifylogo.png";
import shopflologo from "../../assets/shopflologo.png";
import farziengineerlogo from "../../assets/farziengineerlogo.png";
import dukaanlogo from "../../assets/dukaanlogo.png";
import Magentologo from "../../assets/Magentologo.png";
import woocommercelogo from "../../assets/woocommercelogo.png";
import bigcommercelogo from "../../assets/bigcommercelogo.png";

const OnlineStore = () => {
    return (
        <>

<div className="max-w-2xl mx-auto p-5 bg-gray-100">
            <h1 className="text-2xl font-semibold mb-2">Online Stores</h1>
            <p className="text-gray-600 mb-5">Create a new revenue stream by integrating WhatsApp with your online store.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                {[
                    { src: shopifylogo, alt: "Shopify" },
                    { src: shopflologo, alt: "Shopify Plus" },
                    { src: farziengineerlogo, alt: "Farzi Engineer" },
                    { src: dukaanlogo, alt: "Dukaan" },
                    { src: Magentologo, alt: "Magento" },
                    { src: woocommercelogo, alt: "WooCommerce" },
                    { src: bigcommercelogo, alt: "BigCommerce" },
                ].map((logo, index) => (
                    <div key={index} className="bg-white rounded-lg p-5 flex items-center justify-center shadow-md min-h-[120px]">
                        <img src={logo.src} alt={logo.alt} className="max-w-full h-auto" />
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default OnlineStore;
