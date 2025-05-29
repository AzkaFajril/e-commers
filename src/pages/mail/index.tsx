import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Import icons for header

const Mail: React.FC = () => {
  // State for mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Title */}
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white text-lg md:text-xl font-bold">P</span> {/* Placeholder logo */}
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">Mail</h1> {/* Page Title */}
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
               <Link to="/" className="text-gray-600 hover:text-teal-600">Home</Link>
               <Link to="/contact" className="text-gray-600 hover:text-teal-600">Contact</Link> {/* Contoh link ke halaman lain */}
               <Link to="/profile" className="text-gray-600 hover:text-teal-600">Profile</Link>
               {/* Tambahkan link navigasi desktop lainnya jika perlu */}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-teal-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <AiOutlineClose className="h-6 w-6" />
              ) : (
                <AiOutlineMenu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                 <Link
                  to="/"
                  className="block px-3 py-2 rounded-md text-gray-600 hover:text-teal-600 hover:bg-gray-50"
                   onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  Home
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 rounded-md text-gray-600 hover:text-teal-600 hover:bg-gray-50"
                   onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  Contact
                </Link>
                 <Link
                  to="/profile"
                  className="block px-3 py-2 rounded-md text-gray-600 hover:text-teal-600 hover:bg-gray-50"
                   onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  Profile
                </Link>
                {/* Tambahkan link navigasi mobile lainnya jika perlu */}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content - Add padding-top to account for fixed header */}
      <div className="pt-16 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center"> {/* Adjusted padding-top */}
        <div className="max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Mail Section</h2>
          <p className="text-gray-600">
            This is where your mail interface will be.
            You can list emails, view messages, or compose new ones here.
          </p>
          {/* Tambahkan UI mail di sini */}
        </div>
      </div>

      {/* Asumsi ada Footer komponen di sini */}
      {/* <Footer /> */}
    </div>
  );
};

export default Mail;
