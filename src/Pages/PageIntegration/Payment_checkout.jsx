import React from 'react'
import razorpaylogo from '../../assets/razorpaylogo.png'
import cashfreelogo from '../../assets/cashfreelogo.jpeg'
import payulogo from '../../assets/payulogo.png'
import stripelogo from '../../assets/stripelogo.png'
import shopflologo from '../../assets/shopflologo.png'
import ecom360logo from '../../assets/ecom360logo.png'

const Payment_checkout = () => {
    return (
        <>

<div className="max-w-2xl mx-auto p-5 bg-gray-100">
            <h1 className="text-2xl font-semibold mb-2">Payment and Checkout</h1>
            <p className="text-gray-600 mb-5">Enhance your transactions and increase conversions by incorporating a smooth payment and checkout experience directly within WhatsApp.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                {[
                    { src: razorpaylogo, alt: "Razorpay" },
                    { src: cashfreelogo, alt: "Cashfree" },
                    { src: payulogo, alt: "PayU" },
                    { src: stripelogo, alt: "Stripe" },
                    { src: shopflologo, alt: "Shopflo" },
                    { src: ecom360logo, alt: "Ecom360" },
                ].map((logo, index) => (
                    <div key={index} className="bg-white rounded-lg p-5 flex items-center justify-center shadow-md min-h-[120px]">
                        <img src={logo.src} alt={logo.alt} className="max-w-full h-auto" />
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Payment_checkout