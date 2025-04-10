import React from 'react';
import { motion } from 'framer-motion';
import Consultation from '../components/Consultation';

const Investment = () => {
  const properties = [
    {
      title: 'Ocean Front Villa',
      price: '₹1.95 Cr',
      size: '3500 sq.ft',
      bedrooms: '3 Bedrooms',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop',
      description:
        'Luxurious oceanfront villa with private pool and direct beach access. Perfect for those seeking privacy and uninterrupted sea views.',
      features: ['Private Pool', 'Direct Beach Access', 'Landscaped Garden', 'Smart Home Tech', 'Luxury Furnishings'],
    },
    {
      title: 'Sunset View Residence',
      price: '₹1.45 Cr',
      size: '2800 sq.ft',
      bedrooms: '2 Bedrooms',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
      description:
        'Elevated property with stunning sunset views over the ocean and coastline. Modern architecture with floor-to-ceiling windows.',
      features: ['Infinity Edge Pool', 'Panoramic Views', 'Gourmet Kitchen', 'Home Office', 'Outdoor Dining'],
    },
    {
      title: 'Garden Retreat Villa',
      price: '₹95 Lakhs',
      size: '2200 sq.ft',
      bedrooms: '2 Bedrooms',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      description:
        'Serene garden villa surrounded by lush tropical landscaping. Close to resort amenities with private courtyard.',
      features: ['Tropical Garden', 'Courtyard', 'Spa Bathroom', 'Outdoor Shower', 'Walk to Amenities'],
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-black text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[60vh] flex items-center justify-center mb-16"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Property"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <div className="inline-block px-4 py-1 rounded-full  text-amber-400 text-sm font-medium mb-4">
            YOUR NEXT SMART INVESTMENT
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Luxury Living <span className="font-serif italic">&</span> <br className="md:hidden" />{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#cd754a] to-[#dfb562]">Smart Investment</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            Own a piece of paradise that offers both an exceptional lifestyle and a strategic investment opportunity with compelling returns.
          </p>
        </motion.div>
      </motion.div>

      <div className="mb-16 px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12"
        >
          Featured Property Collections
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {properties.map((property, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900/50 backdrop-blur rounded-xl overflow-hidden shadow-xl border border-gray-800 hover:border-amber-500/50 transition-all duration-300"
            >
              <div className="relative">
                <img src={property.image} alt={property.title} className="w-full h-72 object-cover" />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#cd754a] to-[#dfb562] backdrop-blur-sm text-white px-3 py-1.5 rounded-lg font-medium">
                  {property.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#dfb562]">{property.title}</h3>
                <div className="flex text-sm text-gray-400 mb-3 space-x-4">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    {property.size}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M7 3a1 1 0 011-1h4a1 1 0 011 1v3h4a1 1 0 011 1v9a1 1 0 01-1 1H3a1 1 0 01-1-1V7a1 1 0 011-1h4V3z" />
                    </svg>
                    {property.bedrooms}
                  </span>
                </div>
                <p className="text-gray-300 mb-4 line-clamp-2">{property.description}</p>
                <div className="mb-6">
                  <h4 className="font-medium mb-3 text-gray-200">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {property.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-gray-300 text-sm"
                      >
                        <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#cd754a] to-[#dfb562] text-white py-3 rounded-lg font-medium transition-all duration-300"
                >
                  Request Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Consultation Form Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 px-4 md:px-8 bg-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Request Property Consultation</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Interested in investing in our luxury properties? Schedule a personalized consultation with our property experts to explore options tailored to your requirements.
            </p>
          </div>
          
          <Consultation type="purchase" />
        </div>
      </motion.div>
    </div>
  );
};

export default Investment;
