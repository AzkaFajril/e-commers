import  { useState } from 'react';

const dummyHistory = [
  {
    id: 'ORD-001',
    date: '2024-06-01',
    items: [
      { name: 'Beats Studio3 Wireless', qty: 1, price: 349.95 },
      { name: 'Sports Headphones', qty: 2, price: 179.99 },
    ],
    total: 709.93,
    status: 'Completed',
  },
  {
    id: 'ORD-002',
    date: '2024-05-20',
    items: [
      { name: 'Gaming Headset Pro', qty: 1, price: 250.0 },
    ],
    total: 250.0,
    status: 'Completed',
  },
  {
    id: 'ORD-003',
    date: '2024-05-10',
    items: [
      { name: 'Wireless Earbuds 2', qty: 1, price: 100.0 },
    ],
    total: 100.0,
    status: 'Cancelled',
  },
];

export default function History() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Left side - Logo and Title */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">P</span>
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">History</h1>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <nav className="flex space-x-6">
                <a href="/" className="text-gray-600 hover:text-teal-600 transition">Home</a>
                <a href="/history" className="text-gray-600 hover:text-teal-600 transition">History</a>
                <a href="/cart" className="text-gray-600 hover:text-teal-600 transition">Cart</a>
              </nav>
              
              <div className="flex items-center space-x-3">
                <button className="p-2 text-gray-600 hover:text-teal-600 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
                <a
                  href="/setting"
                  className="flex items-center space-x-2 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Settings</span>
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <nav className="flex flex-col space-y-4">
                <a href="/" className="text-gray-600 hover:text-teal-600 transition">Home</a>
                <a href="/history" className="text-gray-600 hover:text-teal-600 transition">History</a>
                <a href="/cart" className="text-gray-600 hover:text-teal-600 transition">Cart</a>
                <a href="/setting" className="text-gray-600 hover:text-teal-600 transition">Settings</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="py-4 md:py-8 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-4 md:p-6">
          <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Purchase History</h1>
          {dummyHistory.length === 0 ? (
            <div className="text-gray-500 text-center py-8 md:py-12">No purchase history found.</div>
          ) : (
            <div className="space-y-4 md:space-y-6">
              {dummyHistory.map((order) => (
                <div key={order.id} className="border rounded-md p-3 md:p-4 bg-gray-50">
                  <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:justify-between md:items-center mb-2">
                    <div className="text-sm md:text-base">
                      <span className="font-semibold">Order ID:</span> {order.id}
                    </div>
                    <div className="text-xs md:text-sm text-gray-500">{order.date}</div>
                  </div>
                  <div className="mb-2">
                    <span className="font-semibold text-sm md:text-base">Items:</span>
                    <ul className="ml-4 list-disc text-xs md:text-sm">
                      {order.items.map((item, idx) => (
                        <li key={idx} className="mt-1">
                          {item.name} &times; {item.qty} <span className="text-gray-500">(${item.price.toFixed(2)})</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:justify-between md:items-center">
                    <div className="text-sm md:text-base">
                      <span className="font-semibold">Total:</span> ${order.total.toFixed(2)}
                    </div>
                    <div>
                      <span
                        className={`inline-block px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-semibold ${
                          order.status === 'Completed'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}