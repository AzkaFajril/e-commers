import { useState } from 'react';

const tabs = [
  { key: 'profile', label: 'Profile' },
  { key: 'security', label: 'Security' },
  { key: 'notification', label: 'Notification' },
];

export default function Setting() {
  const [activeTab, setActiveTab] = useState('profile');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    avatar: '',
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Left side - Logo and Title */}
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white text-lg md:text-xl font-bold">P</span>
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">Settings</h1>
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
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="py-4 md:py-8 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-4 md:p-6">
          {/* Tabs - Responsive */}
          <div className="flex overflow-x-auto border-b mb-6 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                className={`py-2 px-3 md:px-4 -mb-px border-b-2 font-medium text-sm md:text-base whitespace-nowrap transition-colors ${
                  activeTab === tab.key
                    ? 'border-teal-600 text-teal-600'
                    : 'border-transparent text-gray-500 hover:text-teal-600'
                }`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-4">
            {activeTab === 'profile' && (
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm md:text-base"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm md:text-base"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Avatar URL</label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm md:text-base"
                    value={profile.avatar}
                    onChange={(e) => setProfile({ ...profile, avatar: e.target.value })}
                    placeholder="https://..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto mt-4 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 text-sm md:text-base"
                >
                  Save Profile
                </button>
              </form>
            )}

            {activeTab === 'security' && (
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">New Password</label>
                  <input
                    type="password"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm md:text-base"
                    placeholder="New Password"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                  <input
                    type="password"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm md:text-base"
                    placeholder="Confirm Password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto mt-4 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 text-sm md:text-base"
                >
                  Update Password
                </button>
              </form>
            )}

            {activeTab === 'notification' && (
              <form className="space-y-4">
                <div className="flex items-center">
                  <input
                    id="emailNotif"
                    type="checkbox"
                    className="h-4 w-4 text-teal-600 border-gray-300 rounded"
                  />
                  <label htmlFor="emailNotif" className="ml-2 block text-sm md:text-base text-gray-700">
                    Email Notifications
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="smsNotif"
                    type="checkbox"
                    className="h-4 w-4 text-teal-600 border-gray-300 rounded"
                  />
                  <label htmlFor="smsNotif" className="ml-2 block text-sm md:text-base text-gray-700">
                    SMS Notifications
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto mt-4 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 text-sm md:text-base"
                >
                  Save Notification Settings
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 
 