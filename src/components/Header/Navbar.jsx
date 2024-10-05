import React, { useState } from 'react';
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import logo from '../../assets/logo.png';
import Joinbtn from '../Joinbtn';
import ProductModal from '../ModalBox/ProductModal';
import ResourcesModal from '../ModalBox/ResourcesModal';
import AboutusModal from '../ModalBox/AboutusModal'; // Import AboutusModal
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'

export const Navbar = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Animation code 
    useGSAP(() => {
        gsap.from('#animation', {
            y: -20,
            // scrub:true,
            duration: 1

        })
    })



    const menuItems = [
        { label: 'Product' },
        { label: 'Pricing', path: '/pricing' },
        { label: 'Compare', path: '/compare' },
        { label: 'Resources' },
        { label: 'About Us' }, // "About Us" item
    ];

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className='bg-white flex justify-between md:justify-around h-14 border items-center shadow-gray-500 sticky top-0 z-50 px-4'>
                <Link to='/'>
                    <div id='logo' className='text-xl font-black'>
                        <img src={logo} alt="Logo" className='w-auto h-12 object-contain pt-1 pb-1' />
                    </div>
                </Link>

                <div className='md:hidden flex items-center'>
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                <div
                    id='navmenu'
                    className={`${isMenuOpen ? 'flex' : 'hidden'
                        } md:flex flex-col md:flex-row list-none gap-6 md:gap-8 text-gray-500 text-base font-semibold sm:flex-row absolute md:relative top-14 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none md:top-0`}
                >
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className='relative'
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            id='animation'
                        >
                            <li className='flex items-center hover:cursor-pointer p-4 md:p-0'>
                                {item.path ? (
                                    <Link to={item.path} className='flex items-center'>
                                        {item.label}
                                        {(item.label === 'Product' || item.label === 'Resources' || item.label === 'About Us') && (
                                            <span className={`transition-transform duration-300 ${hoveredIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                                                <FaAngleDown />
                                            </span>
                                        )}
                                    </Link>
                                ) : (
                                    <span className='flex items-center'>
                                        {item.label}
                                        {(item.label === 'Product' || item.label === 'Resources' || item.label === 'About Us') && (
                                            <span className={`transition-transform duration-300 ${hoveredIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                                                <FaAngleDown />
                                            </span>
                                        )}
                                    </span>
                                )}
                            </li>

                            {item.label === 'Product' && hoveredIndex === index && (
                                <div className="absolute top-full left-0 w-full shadow-lg z-10">
                                    <ProductModal />
                                </div>
                            )}

                            {item.label === 'Resources' && hoveredIndex === index && (
                                <div className="absolute top-full left-0 w-full shadow-lg z-10">
                                    <ResourcesModal />
                                </div>
                            )}

                            {item.label === 'About Us' && hoveredIndex === index && ( // Show About Us modal
                                <div className="absolute top-full left-0 w-full shadow-lg z-10">
                                    <AboutusModal />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className='hidden md:block'>
                    <Joinbtn />
                </div>
            </div>
        </>
    );
};

export default Navbar;
