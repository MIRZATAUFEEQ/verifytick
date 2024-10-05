import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
// import { Link } from 'react-router-dom';

export default function Joinbtn() {
    return (
        <>
            <a href="https://app.verifytick.io/dashboard" target='blank'>
            {/* <Link to='/contact'> */}
            
             <div
                id='nav-button'
                className='w-full md:w-auto px-4 py-2 text-sm md:text-base font-semibold text-black bg-cyan-300 rounded-full hover:bg-cyan-500 transition'
                >
                <button className='flex items-center gap-1 text-center'>
                    Get Your Bot                    <span>
                        <FaArrowRightLong />
                    </span>
                </button>
            </div>
                {/* </Link> */}

            </a>
        </>
    )
}


// bg-cyan-300 rounded-3xl font-semibold text-lg px-8 py-2 
//                 hover:bg-cyan-500 hover:shadow-lg transition-colors duration-700