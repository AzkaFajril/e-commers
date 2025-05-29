import React from 'react';
import { RiHome2Line, RiShoppingBag2Line, RiUserLine, RiSettings4Line } from 'react-icons/ri';

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const menuItems: MenuItem[] = [
  { 
    icon: <RiHome2Line className="mr-6" />, 
    label: 'Home',
    path: '/'
  },
  { 
    icon: <RiShoppingBag2Line className="mr-6" />, 
    label: 'Cart',
    path: '/cart'
  },
  { 
    icon: <RiUserLine className="mr-6" />, 
    label: 'Profile',
    path: '/profile'
  },
  { 
    icon: <RiSettings4Line className="mr-6" />, 
    label: 'Settings',
    path: '/settings'
  }
];

export default function SidebarMenu() {
  return (
    <div className="flex flex-col space-y-4">
      {menuItems.map((item, index) => (
        <a
          key={index}
          href={item.path}
          className="flex items-center text-gray-600 hover:text-teal-600 transition-colors"
        >
          {item.icon}
          <span>{item.label}</span>
        </a>
      ))}
    </div>
  );
} 