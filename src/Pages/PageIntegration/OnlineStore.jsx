import React from 'react';

const OnlineStore = () => {
    return (
        <>

            <div className="max-w-2xl mx-auto p-5 bg-gray-100">
                <h1 className="text-2xl font-semibold mb-2">Online Stores</h1>
                <p className="text-gray-600 mb-5">Create a new revenue stream by integrating WhatsApp with your online store.</p>
                <div className="grid grid-cols-3 gap-5">
                    <div className="bg-white rounded-lg p-5 flex items-center justify-center shadow-md min-h-[120px]">
                        <img src="shopify-logo.png" alt="Shopify" className="max-w-full h-auto" />
                    </div>
                    <div className="bg-white rounded-lg p-5 flex items-center justify-center shadow-md min-h-[120px]">
                        <img src="shopify-plus-logo.png" alt="Shopify Plus" className="max-w-full h-auto" />
                    </div>
                    <div className="bg-white rounded-lg p-5 flex items-center justify-center shadow-md min-h-[120px]">
                        <img src="farzi-engineer-logo.png" alt="Farzi Engineer" className="max-w-full h-auto" />
                    </div>
                    <div className="bg-white rounded-lg p-5 flex items-center justify-center shadow-md min-h-[120px]">
                        <img src="dukaan-logo.png" alt="Dukaan" className="max-w-full h-auto" />
                    </div>
                    <div className="bg-white rounded-lg p-5 flex items-center justify-center shadow-md min-h-[120px]">
                        <img src="magento-logo.png" alt="Magento" className="max-w-full h-auto" />
                    </div>
                    <div className="bg-white rounded-lg p-5 flex items-center justify-center shadow-md min-h-[120px]">
                        <img src="woocommerce-logo.png" alt="WooCommerce" className="max-w-full h-auto" />
                    </div>
                    <div className="bg-white rounded-lg p-5 flex items-center justify-center shadow-md min-h-[120px]">
                        <img src="bigcommerce-logo.png" alt="BigCommerce" className="max-w-full h-auto" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default OnlineStore;
