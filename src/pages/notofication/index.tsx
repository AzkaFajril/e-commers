import  { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose, AiOutlineBell } from 'react-icons/ai'; // Import icons

// Anda mungkin ingin mendefinisikan interface untuk struktur notifikasi
// interface NotificationItem {
//   id: string;
//   message: string;
//   timestamp: string; // or Date
//   read: boolean;
// }

const NotoficationPage: React.FC = () => { // Nama komponen menggunakan typo sesuai folder path
  const navigate = useNavigate();
  // State for mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State placeholder untuk daftar notifikasi
  // Dalam aplikasi nyata, ini akan diisi dari API atau real-time updates
  const [notifications, setNotifications] = useState([
    { id: '1', message: 'Your order #1234 has shipped!', timestamp: '2023-10-27T10:00:00Z', read: false },
    { id: '2', message: 'Product "Wireless Earbuds" is back in stock.', timestamp: '2023-10-27T09:30:00Z', read: true },
    // Tambahkan lebih banyak notifikasi placeholder
  ]);

  // Fungsi placeholder untuk menandai notifikasi sebagai sudah dibaca
  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notif =>
      notif.id === id ? { ...notif, read: true } : notif
    ));
    // Dalam aplikasi nyata, ini juga akan mengirim permintaan ke backend
  };

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
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">Notifications</h1> {/* Page Title */}
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
               <Link to="/" className="text-gray-600 hover:text-teal-600">Home</Link>
               <Link to="/cart" className="text-gray-600 hover:text-teal-600">Cart</Link>
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
                  to="/cart"
                  className="block px-3 py-2 rounded-md text-gray-600 hover:text-teal-600 hover:bg-gray-50"
                   onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  Cart
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
      <div className="pt-16 py-8 px-4 sm:px-6 lg:px-8"> {/* Adjusted padding-top */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Notifications</h2>

          {notifications.length === 0 ? (
            <p className="text-center text-gray-600">No new notifications.</p>
          ) : (
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <ul role="list" className="divide-y divide-gray-200">
                {notifications.map((notif) => (
                  <li
                    key={notif.id}
                    className={`px-4 py-4 sm:px-6 cursor-pointer hover:bg-gray-50 ${notif.read ? 'text-gray-500' : 'text-gray-800 font-semibold'}`}
                    onClick={() => markAsRead(notif.id)}
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-sm truncate pr-3">{notif.message}</p>
                      <div className="flex items-center flex-shrink-0">
                        {/* Anda bisa menampilkan timestamp atau ikon lain di sini */}
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${notif.read ? 'bg-gray-100 text-gray-800' : 'bg-teal-100 text-teal-800'}`}>
                           {notif.read ? 'Read' : 'New'}
                        </span>
                      </div>
                    </div>
                    <div className="mt-1 text-xs text-gray-500">
                       {new Date(notif.timestamp).toLocaleString()}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Asumsi ada Footer komponen di sini */}
      {/* <Footer /> */}
    </div>
  );
};

export default NotoficationPage; // Ekspor komponen dengan nama ini
