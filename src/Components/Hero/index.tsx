import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// Import icons and images needed for Header
import { AiOutlineSearch, AiOutlineMail, AiOutlineBell, AiOutlineUser, AiOutlineLogin, AiOutlineUserAdd } from 'react-icons/ai';
import { FaBars, FaStar, FaRegHeart } from 'react-icons/fa';
import { FiMinus, FiPlus } from 'react-icons/fi';
// Adjust paths as needed
import userAvatar from '../../assets/user-avatar.png';
import beatsHeadphone from '../../assets/beats-headphone.png';
import promoBannerImage2 from '../../assets/promo-banner2.png.png';
import MultiCardCarousel from './headphones';
import Ipone from './ipone';

function Hero() {
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();
    const [selectedColor, setSelectedColor] = useState('black');
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    // Close dropdown if clicked outside
    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Dummy products/colors etc. can be improved, currently just selectedColor used manually

    const handleBuyNow = () => {
        const cartItem = {
            id: Date.now().toString(),
            name: "Your Headphone Name",
            price: 299.99,
            quantity: quantity,
            color: selectedColor,
            image: "/path/to/your/image.jpg"
        };

        // Save to localStorage
        localStorage.setItem('selectedItems', JSON.stringify([cartItem]));
        // Navigate to buy page
        navigate('/buy');
    };

    return (
        <main className="flex-1 transition-all duration-300 ml-0 md:ml-0">
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="flex flex-col md:flex-row items-center justify-between p-4 bg-gray-50 border-b border-gray-200 gap-4">
                    <div className="w-full md:w-auto p-2 md:p-4">
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3">Welcome</h1>
                            <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">All brand</p>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="flex items-center bg-white rounded-lg shadow-sm p-2 w-full md:w-auto md:mr-4 md:flex-grow md:max-w-md">
                        <AiOutlineSearch className="text-gray-400 mr-2" size={20} />
                        <input
                            type="text"
                            placeholder="Search Product"
                            className="flex-grow outline-none text-gray-700"
                        />
                        <FaBars className="text-gray-400 ml-2 cursor-pointer" size={18} />
                    </div>

                    {/* Icons and Avatar with Dropdown */}
                    <div
                        className="flex items-center space-x-4 w-full md:w-auto justify-between md:justify-end relative"
                        ref={dropdownRef}
                    >
                        <div
                            className="p-2 bg-teal-100 rounded-lg cursor-pointer hover:bg-teal-200 transition-colors"
                            onClick={() => navigate('/mail')}
                        >
                            <AiOutlineMail className="text-teal-600" size={20} />
                        </div>
                        <div
                            className="p-2 bg-teal-100 rounded-lg cursor-pointer hover:bg-teal-200 transition-colors"
                            onClick={() => navigate('/notif')}
                        >
                            <AiOutlineBell className="text-teal-600" size={20} />
                        </div>
                        <div className="relative group">
                            <div
                                className="rounded-full overflow-hidden w-8 h-8 cursor-pointer"
                                onClick={toggleDropdown}
                            >
                                <img
                                    src={userAvatar}
                                    alt="User Avatar"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Dropdown Menu */}
                            <div
                                className={`absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10 transition-all duration-200 ease-in-out ${
                                    isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                                }`}
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => setDropdownOpen(false)}
                            >
                                <ul className="py-2">
                                    <li>
                                        <a
                                            href="/profile"
                                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors"
                                        >
                                            <AiOutlineUser className="mr-2" />
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/login"
                                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors"
                                        >
                                            <AiOutlineLogin className="mr-2" />
                                            Login
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/signup"
                                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors"
                                        >
                                            <AiOutlineUserAdd className="mr-2" />
                                            Signup
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <div className="flex flex-col md:flex-row gap-6 p-4">
                    {/* Product Card */}
                    <div className="flex-1 bg-white rounded-lg shadow-md p-4 md:p-6 flex flex-col md:flex-row items-center gap-6">
                        <div className="w-full md:w-1/3 flex justify-center items-center">
                            <img
                                src={beatsHeadphone}
                                alt="Beats Studio3 Wireless Headphone"
                                className="max-w-full h-auto object-contain"
                            />
                        </div>

                        <div className="flex-1 w-full">
                            <h2 className="text-lg md:text-xl font-semibold mb-2">Beats Studio3 Wireless Headphone</h2>
                            <div className="flex items-center mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400 mr-1" size={16} />
                                ))}
                                <span className="text-gray-600 ml-1">(2000+ Reviews)</span>
                            </div>
                            <p className="text-gray-700 text-sm mb-4">
                                Ergonomic ear cups with on-ear controls. Up to 22 hours of listening time. Apple W1 chip & Class 1 Wireless Bluetooth.
                            </p>
                            <p className="text-teal-600 text-2xl font-bold mb-4">$349.95</p>

                            {/* Color Options */}
                            <div className="flex items-center mb-4">
                                <span className="text-gray-700 mr-3">Color</span>
                                <div className="flex space-x-2">
                                    <div
                                        onClick={() => setSelectedColor('blue')}
                                        className={`w-6 h-6 rounded-full border-2 cursor-pointer ${selectedColor === 'blue' ? 'border-teal-600' : 'border-transparent'} bg-blue-500 hover:border-teal-600`}
                                    />
                                    <div
                                        onClick={() => setSelectedColor('teal')}
                                        className={`w-6 h-6 rounded-full border-2 cursor-pointer ${selectedColor === 'teal' ? 'border-teal-600' : 'border-transparent'} bg-teal-500 hover:border-teal-600`}
                                    />
                                    <div
                                        onClick={() => setSelectedColor('red')}
                                        className={`w-6 h-6 rounded-full border-2 cursor-pointer ${selectedColor === 'red' ? 'border-teal-600' : 'border-transparent'} bg-red-500 hover:border-teal-600`}
                                    />
                                    <div
                                        onClick={() => setSelectedColor('green')}
                                        className={`w-6 h-6 rounded-full border-2 cursor-pointer ${selectedColor === 'green' ? 'border-teal-600' : 'border-transparent'} bg-green-500 hover:border-teal-600`}
                                    />
                                </div>
                            </div>

                            {/* Quantity Selector */}
                            <div className="flex items-center mb-6">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="p-2 border border-gray-300 rounded-l hover:bg-gray-100"
                                >
                                    <FiMinus size={16} />
                                </button>
                                <span className="p-2 border-t border-b border-gray-300">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="p-2 border border-gray-300 rounded-r hover:bg-gray-100"
                                >
                                    <FiPlus size={16} />
                                </button>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                <button className="flex items-center justify-center w-full md:w-12 h-12 border border-teal-600 text-teal-600 rounded-md hover:bg-teal-600 hover:text-white transition-colors">
                                    <FaRegHeart size={20} />
                                </button>
                                <button className="w-full md:flex-1 bg-white border border-teal-600 text-teal-600 py-3 px-6 rounded-md hover:bg-teal-600 hover:text-white transition-colors font-semibold">
                                    Add to cart
                                </button>
                                <button
                                    onClick={handleBuyNow}
                                    className="w-full md:flex-1 bg-teal-600 text-white py-3 px-6 rounded-md hover:bg-teal-700 transition-colors font-semibold"
                                >
                                    Buy now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Promo Banner */}
                    <div
                        className="w-full md:w-1/3 min-h-[200px] md:h-auto bg-gradient-to-br from-blue-400 to-teal-500 rounded-lg shadow-md p-4 md:p-6 text-white flex flex-col justify-between"
                        style={{ backgroundImage: `url(${promoBannerImage2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >
                        <h3 className="text-xl md:text-2xl font-semibold mb-2">Summer headphones from top brands</h3>
                        <div className="flex items-center text-white hover:underline cursor-pointer mt-4">
                            Buy it now <span className="ml-2">→</span>
                        </div>
                    </div>
                </div>

                {/* Carousel */}
                <div className="p-4">
                    <MultiCardCarousel />
                    <Ipone/>
                </div>
            </div>
        </main>
    );
}

export default Hero;

