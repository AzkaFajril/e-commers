import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  color: string;
  image: string;
}

export default function BuyNow() {
  const navigate = useNavigate();
  const [cartItem, setCartItem] = useState<CartItem | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  useEffect(() => {
    // Ambil data item yang dipilih dari localStorage
    const selectedItems = JSON.parse(localStorage.getItem('selectedItems') || '[]');
    if (selectedItems.length > 0) {
      setCartItem(selectedItems[0]); // Ambil item pertama
    } else {
      navigate('/cart');
    }
  }, [navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Di sini Anda bisa menambahkan logika untuk memproses pembayaran
    alert('Order placed successfully!');
    localStorage.removeItem('cart');
    navigate('/');
  };

  if (!cartItem) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">No items to checkout</h2>
          <button
            onClick={() => navigate('/')}
            className="text-teal-600 hover:text-teal-700"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white text-lg md:text-xl font-bold">P</span>
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">Checkout</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="py-4 md:py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-4 md:p-6">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
            
            {/* Product Details */}
            <div className="flex items-center space-x-4 p-4 border rounded-lg mb-6">
              <img
                src={cartItem.image}
                alt={cartItem.name}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="font-medium text-lg">{cartItem.name}</h3>
                <p className="text-gray-600">Color: {cartItem.color}</p>
                <p className="text-gray-600">Quantity: {cartItem.quantity}</p>
                <p className="text-teal-600 font-semibold mt-2">
                  ${(cartItem.price * cartItem.quantity).toFixed(2)}
                </p>
              </div>
            </div>

            {/* Shipping Information */}
            <div className="mb-6">
              <h3 className="font-semibold mb-4">Shipping Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    rows={3}
                    placeholder="Enter your full address"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    placeholder="+1 234 567 890"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="mb-6">
              <h3 className="font-semibold mb-4">Payment Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                      placeholder="123"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Order Total */}
            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span>${(cartItem.price * cartItem.quantity).toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Shipping</span>
                <span>$5.00</span>
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${(cartItem.price * cartItem.quantity + 5).toFixed(2)}</span>
              </div>
            </div>

            {/* Place Order Button */}
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded-md mt-6 hover:bg-teal-700 transition-colors"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}