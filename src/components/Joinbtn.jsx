import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

export default function Joinbtn() {
    return (
        <>
            <a href="https://app.verifytick.io/dashboard" target='blank'> <div
                id='nav-button'
                className='bg-cyan-300 rounded-3xl font-semibold text-lg px-8 py-2 
                hover:bg-cyan-500 hover:shadow-lg transition-colors duration-700'
            >
                <button className='flex items-center gap-1 text-center'>
                    Get Your Bot                    <span>
                        <FaArrowRightLong />
                    </span>
                </button>
            </div>
            </a>
        </>
    )
}
