import React, { useState } from 'react';

export default function Profile() {
  // Dummy data user, bisa diganti dengan data dari backend/API
  const [profile, setProfile] = useState({
    name: 'string',
    email: 'john.doe@email.com',
    avatar: 'https://i.pravatar.cc/150?img=3',
    phone: '08123456789',
    address: 'Jl. Contoh No. 123, Jakarta',
  });

  const [editMode, setEditMode] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEditMode(false);
    // Simpan perubahan ke backend di sini jika perlu
  };

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
              <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
            </div>

            {/* Right side - Navigation and Settings */}
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex space-x-6">
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
        </div>
      </header>

      {/* Main Content */}
      <div className="py-8 px-4">
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col items-center mb-6">
            <img
              src={profile.avatar}
              alt="Avatar"
              className="w-24 h-24 rounded-full object-cover border-4 border-teal-500 mb-2"
            />
            <button
              className="text-sm text-teal-600 hover:underline"
              onClick={() => setEditMode(!editMode)}
            >
              {editMode ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>
          {editMode ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  value={profile.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  value={profile.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="text"
                  name="phone"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  value={profile.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  value={profile.address}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Avatar URL</label>
                <input
                  type="text"
                  name="avatar"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  value={profile.avatar}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
              >
                Save Changes
              </button>
            </form>
          ) : (
            <div className="space-y-3">
              <div>
                <span className="font-semibold">Name:</span> {profile.name}
              </div>
              <div>
                <span className="font-semibold">Email:</span> {profile.email}
              </div>
              <div>
                <span className="font-semibold">Phone:</span> {profile.phone}
              </div>
              <div>
                <span className="font-semibold">Address:</span> {profile.address}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
