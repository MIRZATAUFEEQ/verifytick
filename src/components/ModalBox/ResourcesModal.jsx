import React from 'react'
import { Link } from 'react-router-dom'

const ResourcesModal = () => {
    return (

        <>

            <div class=" w-[34rem] bg-white shadow-md rounded-md p-2 max-w-xs">
                <ul class="space-y-3">
                    <div className='border border-transparent hover:border-cyan-200 rounded-lg hover:bg-cyan-50 hover:cursor-pointer'>
                        <Link to='/customerstories'>
                            <li class="text-gray-700">Customer Stories</li>
                        </Link>
                    </div>

                    <div className='border border-transparent hover:border-cyan-200 rounded-lg hover:bg-cyan-50 hover:cursor-pointer'>
                        <Link to='/integration'>
                            <li class="text-gray-700">Integrations</li>
                        </Link>
                    </div>
                  
                </ul>
            </div>


        </>
    )

}

export default ResourcesModal