import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface SidebarToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-6 -right-4 z-20 bg-white border rounded-full shadow p-1 hover:bg-teal-100 transition"
      aria-label="Toggle Sidebar"
    >
      {isOpen ? <FiChevronLeft size={24} /> : <FiChevronRight size={24} />}
    </button>
  );
};

export default SidebarToggle;