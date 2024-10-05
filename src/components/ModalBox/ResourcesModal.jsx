import React from 'react';
import { Link } from 'react-router-dom';

const ResourcesModal = () => {
    return (
        <>
            {/* Parent div should be positioned relative to ensure modal positioning */}
            <div className="relative">
                {/* Modal box */}
                <div className="absolute right-0 w-[34rem] bg-white shadow-md rounded-md p-2 max-w-xs md:static"> 
                    <ul className="space-y-10"> {/* Increased gap to space-y-6 */}
                        <div className='border border-transparent hover:border-cyan-200 rounded-lg hover:bg-cyan-50 hover:cursor-pointer'>
                            <Link to='/customerstories'>
                                <li className="text-gray-700">Customer Stories</li>
                            </Link>
                        </div>

                        <div className='border border-transparent hover:border-cyan-200 rounded-lg hover:bg-cyan-50 hover:cursor-pointer'>
                            <Link to='/integration'>
                                <li className="text-gray-700">Integrations</li>
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ResourcesModal;
