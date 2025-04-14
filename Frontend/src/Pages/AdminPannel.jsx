import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AdminSidebar from '../components/Admin/AdminSidebar';
import AdminDashboard from '../components/Admin/AdminDashboard';
import TourismManagement from '../components/Admin/TourismManagement';
import InvestmentManagement from '../components/Admin/InvestmentManagement';
import BookingManagement from '../components/Admin/BookingManagement';
import FormResponses from '../components/Admin/FormResponses';

const AdminPannel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <AdminDashboard />;
      case 'tourism':
        return <TourismManagement />;
      case 'investments':
        return <InvestmentManagement />;
      case 'bookings':
        return <BookingManagement />;
      case 'responses':
        return <FormResponses />;
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex-1 p-8"
        >
          <div className="bg-white rounded-lg shadow-lg p-6">
            {renderContent()}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminPannel;