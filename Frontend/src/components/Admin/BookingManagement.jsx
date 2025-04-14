import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const BookingManagement = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/bookings');
      setBookings(response.data.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch bookings');
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id, status) => {
    try {
      await axios.patch(`http://localhost:5000/api/bookings/${id}/status`, { status });
      fetchBookings();
    } catch (err) {
      setError('Failed to update booking status');
    }
  };

  const handleViewDetails = (booking) => {
    setSelectedBooking(booking);
    setIsModalOpen(true);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Bookings Management</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left">Booking ID</th>
              <th className="py-3 px-4 text-left">Customer</th>
              <th className="py-3 px-4 text-left">Package</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <motion.tr
                key={booking._id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-3 px-4">{booking._id}</td>
                <td className="py-3 px-4">
                  <div>
                    <p className="font-medium">{booking.customerName}</p>
                    <p className="text-sm text-gray-500">{booking.customerEmail}</p>
                  </div>
                </td>
                <td className="py-3 px-4">{booking.packageName}</td>
                <td className="py-3 px-4">
                  {new Date(booking.bookingDate).toLocaleDateString()}
                </td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                    booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {booking.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleViewDetails(booking)}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      View
                    </motion.button>
                    <select
                      value={booking.status}
                      onChange={(e) => handleStatusUpdate(booking._id, e.target.value)}
                      className="border rounded px-2 py-1"
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Booking Details Modal */}
      {isModalOpen && selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg p-6 w-full max-w-2xl"
          >
            <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-700">Customer Information</h3>
                <p>Name: {selectedBooking.customerName}</p>
                <p>Email: {selectedBooking.customerEmail}</p>
                <p>Phone: {selectedBooking.customerPhone}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Booking Details</h3>
                <p>Package: {selectedBooking.packageName}</p>
                <p>Date: {new Date(selectedBooking.bookingDate).toLocaleDateString()}</p>
                <p>Number of People: {selectedBooking.numberOfPeople}</p>
                <p>Total Amount: {selectedBooking.totalAmount}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Additional Information</h3>
                <p>{selectedBooking.additionalInfo || 'No additional information provided'}</p>
              </div>
              <div className="flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default BookingManagement; 