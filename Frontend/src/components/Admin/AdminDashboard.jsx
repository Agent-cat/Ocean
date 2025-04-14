import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalBookings: 0,
    totalInvestments: 0,
    totalTourismPackages: 0,
    totalFormResponses: 0,
    recentBookings: [],
    recentInvestments: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Fetch all data in parallel
      const [bookingsRes, investmentsRes, tourismRes, responsesRes] = await Promise.all([
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/bookings`),
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/investments`),
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/tourism`),
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/registrations`),
      ]);

      setStats({
        totalBookings: bookingsRes.data.data.length,
        totalInvestments: investmentsRes.data.data.length,
        totalTourismPackages: tourismRes.data.data.length,
        totalFormResponses: responsesRes.data.data.length,
        recentBookings: bookingsRes.data.data.slice(0, 5),
        recentInvestments: investmentsRes.data.data.slice(0, 5),
      });
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch dashboard data');
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h2>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <span className="text-2xl">📅</span>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Bookings</p>
              <p className="text-2xl font-bold">{stats.totalBookings}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <span className="text-2xl">💰</span>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Investments</p>
              <p className="text-2xl font-bold">{stats.totalInvestments}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
              <span className="text-2xl">📊</span>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Tourism Packages</p>
              <p className="text-2xl font-bold">{stats.totalTourismPackages}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
              <span className="text-2xl">👥</span>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Form Responses</p>
              <p className="text-2xl font-bold">{stats.totalFormResponses}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Bookings */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <h3 className="text-lg font-semibold mb-4">Recent Bookings</h3>
          <div className="space-y-4">
            {stats.recentBookings.map((booking) => (
              <div key={booking._id} className="flex items-center justify-between border-b pb-2">
                <div>
                  <p className="font-medium">{booking.customerName}</p>
                  <p className="text-sm text-gray-500">{booking.packageName}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-sm ${
                  booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                  booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {booking.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Investments */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <h3 className="text-lg font-semibold mb-4">Recent Investments</h3>
          <div className="space-y-4">
            {stats.recentInvestments.map((investment) => (
              <div key={investment._id} className="flex items-center justify-between border-b pb-2">
                <div>
                  <p className="font-medium">{investment.title}</p>
                  <p className="text-sm text-gray-500">{investment.amount}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-sm ${
                  investment.status === 'active' ? 'bg-green-100 text-green-800' :
                  investment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {investment.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard; 