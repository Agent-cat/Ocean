import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const TourismManagement = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPackage, setCurrentPackage] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    alt: '',
    quote: '',
    price: '',
    description: '',
    duration: '',
    features: [''],
    category: 'holiday',
    status: 'active'
  });

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tourism');
      setPackages(response.data.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch packages');
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentPackage) {
        await axios.put(`http://localhost:5000/api/tourism/${currentPackage._id}`, formData);
      } else {
        await axios.post('http://localhost:5000/api/tourism', formData);
      }
      setIsModalOpen(false);
      fetchPackages();
      resetForm();
    } catch (err) {
      setError('Failed to save package');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this package?')) {
      try {
        await axios.delete(`http://localhost:5000/api/tourism/${id}`);
        fetchPackages();
      } catch (err) {
        setError('Failed to delete package');
      }
    }
  };

  const handleEdit = (pkg) => {
    setCurrentPackage(pkg);
    setFormData({
      title: pkg.title,
      image: pkg.image,
      alt: pkg.alt,
      quote: pkg.quote,
      price: pkg.price,
      description: pkg.description,
      duration: pkg.duration,
      features: pkg.features,
      category: pkg.category,
      status: pkg.status
    });
    setIsModalOpen(true);
  };

  const resetForm = () => {
    setCurrentPackage(null);
    setFormData({
      title: '',
      image: '',
      alt: '',
      quote: '',
      price: '',
      description: '',
      duration: '',
      features: [''],
      category: 'holiday',
      status: 'active'
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Tourism Packages</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
          className="bg-[#dfb562] text-white px-4 py-2 rounded-lg"
        >
          Add New Package
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <motion.div
            key={pkg._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img src={pkg.image} alt={pkg.alt} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">{pkg.title}</h3>
              <p className="text-gray-600 mt-2">{pkg.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-[#dfb562] font-bold">{pkg.price}</span>
                <span className="text-sm text-gray-500">{pkg.duration}</span>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleEdit(pkg)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleDelete(pkg._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg p-6 w-full max-w-2xl"
          >
            <h2 className="text-2xl font-bold mb-4">
              {currentPackage ? 'Edit Package' : 'Add New Package'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Image URL</label>
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Quote</label>
                <input
                  type="text"
                  value={formData.quote}
                  onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Price</label>
                <input
                  type="text"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Duration</label>
                <input
                  type="text"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Features</label>
                {formData.features.map((feature, index) => (
                  <div key={index} className="flex gap-2 mt-1">
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) => {
                        const newFeatures = [...formData.features];
                        newFeatures[index] = e.target.value;
                        setFormData({ ...formData, features: newFeatures });
                      }}
                      className="block w-full rounded-md border-gray-300 shadow-sm"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const newFeatures = formData.features.filter((_, i) => i !== index);
                        setFormData({ ...formData, features: newFeatures });
                      }}
                      className="text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, features: [...formData.features, ''] })}
                  className="mt-2 text-blue-500"
                >
                  Add Feature
                </button>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  required
                >
                  <option value="holiday">Holiday</option>
                  <option value="wedding">Wedding</option>
                  <option value="spiritual">Spiritual</option>
                  <option value="senior">Senior</option>
                  <option value="nri">NRI</option>
                  <option value="custom">Custom</option>
                  <option value="meeting">Meeting</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  required
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="coming_soon">Coming Soon</option>
                </select>
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false);
                    resetForm();
                  }}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-[#dfb562] text-white px-4 py-2 rounded"
                >
                  {currentPackage ? 'Update' : 'Create'}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default TourismManagement; 