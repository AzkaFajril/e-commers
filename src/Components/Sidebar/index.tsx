import { useState, useEffect } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineHistory, AiOutlineSetting } from 'react-icons/ai';
import { FaHeart, FaRegCommentDots } from 'react-icons/fa';
import { RiShoppingBag2Line } from 'react-icons/ri';
import SidebarToggle from '../SidebarToggle';
import "../style.css"


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    // Check screen size on mount and when window resizes
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth < 768) {
                setIsOpen(false);
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <>
            {/* Overlay for mobile */}
            {isMobile && isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-20"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`
                fixed md:relative
                flex flex-col h-screen bg-white text-black transition-all duration-300 z-30
                ${isOpen ? 'w-64' : 'w-20'}
                ${isMobile ? (isOpen ? 'translate-x-0' : '-translate-x-full') : ''}
            `}>
                <SidebarToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
                
                <div className=" flex items-center justify-center h-16 border-b border-white">
                    {isOpen && <h1 className="sid-logo pt-2 text-2xl font-bold">IndoKet.</h1>}
                </div>

                <nav className="flex flex-col p-2">
                    <a href="#" className={`w-full text-black flex items-center py-4 px-4 rounded transition-colors ${isOpen ? 'hover:bg-teal-600 hover:text-white' : ''}`}>
                        <AiOutlineHome className="mr-6" />
                        {isOpen && 'Home'}
                    </a>
                    <a href="/cart" className={`w-full text-black flex items-center py-4 px-4 rounded transition-colors ${isOpen ? 'hover:bg-teal-600 hover:text-white' : ''}`}>
                        <FaHeart className="mr-6" />
                        {isOpen && 'Cart'}
                    </a>
                    <a href="/selling" className={`w-full text-black flex items-center py-4 px-4 rounded transition-colors ${isOpen ? 'hover:bg-teal-600 hover:text-white' : ''}`}>
                        <RiShoppingBag2Line className="mr-6" />
                        {isOpen && 'Selling'}
                    </a>
                    <a href="/profile" className={`w-full text-black flex items-center py-4 px-4 rounded transition-colors ${isOpen ? 'hover:bg-teal-600 hover:text-white' : ''}`}>
                        <AiOutlineUser className="mr-6" />
                        {isOpen && 'Profile'}
                    </a>
                    <a href="/history" className={`w-full text-black flex items-center py-4 px-4 rounded transition-colors ${isOpen ? 'hover:bg-teal-600 hover:text-white' : ''}`}>
                        <AiOutlineHistory className="mr-6" />
                        {isOpen && 'Purchase History'}
                    </a>
                    <a href="/Contact" className={`w-full text-black flex items-center py-4 px-4 rounded transition-colors ${isOpen ? 'hover:bg-teal-600 hover:text-white' : ''}`}>
                        <FaRegCommentDots className="mr-6" />
                        {isOpen && 'Contact Us'}
                    </a>
                    <a href="/setting" className={`w-full text-black flex items-center py-4 px-4 rounded transition-colors ${isOpen ? 'hover:bg-teal-600 hover:text-white' : ''}`}>
                        <AiOutlineSetting className="mr-6" />
                        {isOpen && 'Settings'}
                    </a>
                </nav>

                <div className={`flex flex-col items-center justify-center mt-auto mb-4 p-4 bg-white text-teal-500 rounded-lg shadow ${isOpen ? '' : 'hidden'}`}>
                    <h2 className="text-lg font-semibold">Need Help?</h2>
                    <p className="text-sm text-gray-600">About Account Management, Ordering & Payment refund, and FAQ</p>
                    <button className="mt-2 bg-teal-500 text-white p-2 rounded hover:bg-teal-600">
                        <a href="/contact" className='text-black'>Customer Service</a>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
