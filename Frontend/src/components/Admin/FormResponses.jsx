import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const FormResponses = () => {
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedResponse, setSelectedResponse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    fetchResponses();
  }, []);

  const fetchResponses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/registrations');
      setResponses(response.data.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch form responses');
      setLoading(false);
    }
  };

  const filteredResponses = responses.filter(response => {
    if (activeTab === 'all') return true;
    return response.formType === activeTab;
  });

  const handleViewDetails = (response) => {
    setSelectedResponse(response);
    setIsModalOpen(true);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Form Responses</h2>
      </div>

      <div className="mb-6">
        <div className="flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded ${
              activeTab === 'all'
                ? 'bg-[#dfb562] text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            All Responses
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('tourism')}
            className={`px-4 py-2 rounded ${
              activeTab === 'tourism'
                ? 'bg-[#dfb562] text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Tourism
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('investment')}
            className={`px-4 py-2 rounded ${
              activeTab === 'investment'
                ? 'bg-[#dfb562] text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Investment
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('contact')}
            className={`px-4 py-2 rounded ${
              activeTab === 'contact'
                ? 'bg-[#dfb562] text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Contact
          </motion.button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left">Form Type</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Phone</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredResponses.map((response) => (
              <motion.tr
                key={response._id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-3 px-4">
                  <span className="capitalize">{response.formType}</span>
                </td>
                <td className="py-3 px-4">{response.name}</td>
                <td className="py-3 px-4">{response.email}</td>
                <td className="py-3 px-4">{response.phone}</td>
                <td className="py-3 px-4">
                  {new Date(response.createdAt).toLocaleDateString()}
                </td>
                <td className="py-3 px-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleViewDetails(response)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    View Details
                  </motion.button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Response Details Modal */}
      {isModalOpen && selectedResponse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg p-6 w-full max-w-2xl"
          >
            <h2 className="text-2xl font-bold mb-4">Response Details</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-700">Personal Information</h3>
                <p>Name: {selectedResponse.name}</p>
                <p>Email: {selectedResponse.email}</p>
                <p>Phone: {selectedResponse.phone}</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-700">Form Details</h3>
                <p>Form Type: {selectedResponse.formType}</p>
                <p>Submitted: {new Date(selectedResponse.createdAt).toLocaleString()}</p>
              </div>
              {selectedResponse.formType === 'tourism' && (
                <div>
                  <h3 className="font-medium text-gray-700">Tourism Details</h3>
                  <p>Package: {selectedResponse.packageName}</p>
                  <p>Travel Date: {selectedResponse.travelDate}</p>
                  <p>Number of People: {selectedResponse.numberOfPeople}</p>
                </div>
              )}
              {selectedResponse.formType === 'investment' && (
                <div>
                  <h3 className="font-medium text-gray-700">Investment Details</h3>
                  <p>Investment Type: {selectedResponse.investmentType}</p>
                  <p>Amount: {selectedResponse.amount}</p>
                  <p>Duration: {selectedResponse.duration}</p>
                </div>
              )}
              <div>
                <h3 className="font-medium text-gray-700">Additional Information</h3>
                <p>{selectedResponse.message || 'No additional information provided'}</p>
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

export default FormResponses; 