import React from 'react';
import { motion } from 'framer-motion';
import { 
  HomeIcon, 
  GlobeAltIcon, 
  CurrencyDollarIcon, 
  CalendarIcon, 
  ClipboardDocumentListIcon 
} from '@heroicons/react/24/outline';

const AdminSidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: HomeIcon },
    { id: 'tourism', label: 'Tourism Packages', icon: GlobeAltIcon },
    { id: 'investments', label: 'Investments', icon: CurrencyDollarIcon },
    { id: 'bookings', label: 'Bookings', icon: CalendarIcon },
    { id: 'responses', label: 'Form Responses', icon: ClipboardDocumentListIcon }
  ];

  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-[#dfb562]">Admin Panel</h1>
      </div>
      <nav className="mt-8">
        {menuItems.map((item) => (
          <motion.button
            key={item.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center px-6 py-3 text-sm font-medium transition-colors duration-200 ${
              activeTab === item.id
                ? 'bg-gray-900 text-[#dfb562]'
                : 'text-gray-300 hover:bg-gray-700'
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.label}
          </motion.button>
        ))}
      </nav>
    </div>
  );
};

export default AdminSidebar; 