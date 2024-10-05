import React from 'react'
import { Link } from 'react-router-dom'

const AboutusModal = () => {
    return (
        <>

            <div class=" w-[34rem] bg-white shadow-md rounded-md p-2 max-w-xs">
                <ul class="space-y-3">
                    <Link to='/ourstory'>
                        <div className='border border-transparent hover:border-cyan-200 rounded-lg hover:bg-cyan-50 hover:cursor-pointer'>
                            <li class="text-gray-700">Our Story</li>
                        </div>
                    </Link>
                </ul>
            </div>


        </>
    )
}

export default AboutusModal