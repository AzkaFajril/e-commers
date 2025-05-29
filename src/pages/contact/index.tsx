import { useState } from 'react';
import {Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose, AiOutlineSend, AiOutlineCheckCircle, AiOutlineWarning, AiOutlineLoading } from 'react-icons/ai';

const Contact: React.FC = () => {
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [contactStatus, setContactStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [contactError, setContactError] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Webhook URL langsung di sini
  const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1377511994709512202/Qix9LzzTXuUBGctJkdaN-jV2pcCJVEpENHJdS_UA6x1H3Mz26U17JxSDv8DAGu0wNxnP';

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactFormData(prev => ({ ...prev, [name]: value }));
    if (contactStatus !== 'idle') {
      setContactStatus('idle');
      setContactError(null);
    }
  };

  const sendToDiscordWebhook = async (data: { name: string; email: string; message: string }) => {
    setContactStatus('loading');
    setContactError(null);

    const sanitizedData = {
      name: data.name.replace(/[<>]/g, ''),
      email: data.email.replace(/[<>]/g, ''),
      message: data.message.replace(/[<>]/g, '')
    };

    const discordPayload = {
      content: `**New Contact Form Submission**\n\n**Name:** ${sanitizedData.name}\n**Email:** ${sanitizedData.email}\n**Message:**\n${sanitizedData.message}`,
      username: 'Contact Bot',
    };

    try {
      const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(discordPayload),
      });

      if (response.ok || response.status === 204) {
        setContactStatus('success');
        setContactFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error: any) {
      console.error('Error sending to webhook:', error);
      setContactStatus('error');
      setContactError('Failed to send message. Please try again later.');
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!contactFormData.name.trim() || !contactFormData.email.trim() || !contactFormData.message.trim()) {
      setContactStatus('error');
      setContactError('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactFormData.email)) {
      setContactStatus('error');
      setContactError('Please enter a valid email address.');
      return;
    }

    if (contactStatus === 'loading') {
      return;
    }

    sendToDiscordWebhook(contactFormData);
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
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">Contact Us</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
               <Link to="/" className="text-gray-600 hover:text-teal-600">Home</Link>
               <Link to="/login" className="text-gray-600 hover:text-teal-600">Login</Link>
               <Link to="/signup" className="text-gray-600 hover:text-teal-600">Sign Up</Link>
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
                  to="/login"
                  className="block px-3 py-2 rounded-md text-gray-600 hover:text-teal-600 hover:bg-gray-50"
                   onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-3 py-2 rounded-md text-gray-600 hover:text-teal-600 hover:bg-gray-50"
                   onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  Sign Up
                </Link>
                {/* Tambahkan link navigasi mobile lainnya jika perlu */}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content - Add padding-top to account for fixed header */}
      <div className="pt-16 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center"> {/* Adjusted padding-top and centering */}
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Send us a message
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              We'd love to hear from you.
            </p>
          </div>
          <form onSubmit={handleContactSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={contactFormData.name}
                onChange={handleContactChange}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
                required
                disabled={contactStatus === 'loading'}
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={contactFormData.email}
                onChange={handleContactChange}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="Email Address"
                required
                disabled={contactStatus === 'loading'}
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={contactFormData.message}
                onChange={handleContactChange}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="Your Message"
                required
                disabled={contactStatus === 'loading'}
              ></textarea>
            </div>

            {/* Status Feedback */}
            {contactStatus === 'loading' && (
              <div className="flex items-center text-teal-600">
                 <AiOutlineLoading className="animate-spin mr-2" size={20} /> Sending...
              </div>
            )}
            {contactStatus === 'success' && (
              <div className="flex items-center text-green-600">
                 <AiOutlineCheckCircle className="mr-2" size={20} /> Message sent successfully!
              </div>
            )}
             {contactStatus === 'error' && contactError && (
              <div className="flex items-center text-red-600">
                 <AiOutlineWarning className="mr-2" size={20} /> {contactError}
              </div>
            )}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={contactStatus === 'loading'} // Disable button while loading
              >
                <AiOutlineSend className="mr-2" size={20} />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;




