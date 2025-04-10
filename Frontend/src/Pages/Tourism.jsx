import React from 'react'
import { motion } from 'framer-motion'
import Consultation from '../components/Consultation'

const tourismPackages = [
  {
    id: 1,
    title: "Ananta/Holiday Destination",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1780&auto=format&fit=crop",
    alt: "Holiday Resort",
    quote: "Boundless Serenity, Infinite Memories.",
    price: "₹45,000",
    description: "Immerse yourself in the natural beauty of pristine beaches and serene landscapes.",
    duration: "3-7 Days",

    features: [
      "Luxury beach-front accommodation",
      "Guided tours to local attractions", 
      "Gourmet dining experiences",
      "Water sports and activities"
    ]
  },
  {
    id: 2,
    title: "Saubhagya/Wedding Destination",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
    alt: "Wedding Destination",
    quote: "Where Sacred Bonds Meet Ocean's Eternal Witness",
    price: "₹3,50,000",
    description: "Create unforgettable memories with a dream wedding at our exclusive oceanfront venue.",
    duration: "3-5 Days",

    features: [
      "Beachfront ceremony setups",
      "Customized wedding planning",
      "Luxury accommodation for guests",
      "Professional photography services"
    ]
  },
  {
    id: 3,
    title: "Moksha Yatra/Spiritual Tourism",
    image: "https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?q=80&w=2070&auto=format&fit=crop",
    alt: "Spiritual Tourism",
    quote: "The Path to Enlightenment",
    price: "₹35,000",
    description: "Embark on a journey of self-discovery through ancient temples and spiritual retreats.",
    duration: "4-10 Days",
 
    
    features: [
      "Guided temple tours",
      "Meditation and yoga sessions",
      "Authentic Ayurvedic treatments",
      "Spiritual discussions with local experts"
    ]
  },
  {
    id: 4,
    title: "Vishram/Senior Citizen Haven",
    image: "https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?q=80&w=2070&auto=format&fit=crop",
    alt: "Spiritual Tourism",
    quote: "A Haven of Rest & Renewal",
    price: "₹35,000",
    description: "Embark on a journey of self-discovery through ancient temples and spiritual retreats.",
    duration: "4-10 Days",
 
    
    features: [
      "Guided temple tours",
      "Meditation and yoga sessions",
      "Authentic Ayurvedic treatments",
      "Spiritual discussions with local experts"
    ]
  },
  {
    id: 5,
    title: "Vrindavan/NRI Holiday Package",
    image: "https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?q=80&w=2070&auto=format&fit=crop",
    alt: "Spiritual Tourism",
    quote: "A Journey Back to Your Roots",
    price: "₹35,000",
    description: "Embark on a journey of self-discovery through ancient temples and spiritual retreats.",
    duration: "4-10 Days",
 
    
    features: [
      "Guided temple tours",
      "Meditation and yoga sessions",
      "Authentic Ayurvedic treatments",
      "Spiritual discussions with local experts"
    ]
  },
  {
    id: 6,
    title: "Swa  Rachana/Customized Packages",
    image: "https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?q=80&w=2070&auto=format&fit=crop",
    alt: "Spiritual Tourism",
    quote: "Your Vision, Our Masterpiece",
    price: "₹35,000",
    description: "Embark on a journey of self-discovery through ancient temples and spiritual retreats.",
    duration: "4-10 Days",
 
    
    features: [
      "Guided temple tours",
      "Meditation and yoga sessions",
      "Authentic Ayurvedic treatments",
      "Spiritual discussions with local experts"
    ]
  },
  {
    id: 7,
    title: "Sangram/Meetings and Seminars ",
    image: "https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?q=80&w=2070&auto=format&fit=crop",
    alt: "Spiritual Tourism",
    quote: "Your Vision, Our Masterpiece",
    price: "₹35,000",
    description: "Embark on a journey of self-discovery through ancient temples and spiritual retreats.",
    duration: "4-10 Days",
 
    
    features: [
      "Guided temple tours",
      "Meditation and yoga sessions",
      "Authentic Ayurvedic treatments",
      "Spiritual discussions with local experts"
    ]
  }
];

const Tourism = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-black text-white">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[60vh] flex items-center justify-center"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
            alt="Beach"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6">
            <span className="text-white">Tourism</span>{" "}
            <span className="text-[#dfb562]">Packages</span>
          </h1>
          <p className="text-xl text-gray-200">
            Discover our handcrafted tourism experiences designed to create unforgettable memories
          </p>
        </motion.div>
      </motion.div>

      <div className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourismPackages.map((pkg, index) => (
              <motion.div 
                key={pkg.id} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-b from-gray-800 to-gray-900/80 rounded-2xl overflow-hidden transition-all duration-300 border border-gray-700 hover:shadow-xl hover:border-[#cd754a]/30"
              >
                <div className="relative">
                  <motion.img 
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    src={pkg.image}
                    alt={pkg.alt}
                    className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <motion.div 
                    initial={{ x: 100 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="absolute top-4 right-4 bg-gradient-to-r from-[#cd754a] to-[#dfb562] px-4 py-2 rounded-xl text-sm font-medium text-white shadow-lg"
                  >
                    <span className="text-xs font-medium">Starting from</span>
                    <br />
                    <span className="text-lg font-bold">{pkg.price}</span>
                  </motion.div>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="p-6 md:p-8"
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[#dfb562] bg-clip-text text-transparent bg-gradient-to-r from-[#cd754a] to-[#dfb562]">
                    {pkg.title}
                  </h3>
                  <p className='text-lg md:text-xl font-semibold mb-4 text-[#dfb562] bg-clip-text text-transparent bg-gradient-to-r from-[#cd754a] to-[#dfb562]'>
                    {pkg.quote}
                  </p>
                  <p className="text-gray-300 mb-6 text-base leading-relaxed tracking-wide">
                    {pkg.description}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-5 h-5 text-[#cd754a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-300 font-medium">{pkg.duration}</span>
                    </div>
                    <span className="px-3 py-1.5 bg-[#cd754a]/10 text-[#cd754a] rounded-full text-sm font-medium">
                      Available Now
                    </span>
                  </div>

                  <ul className="grid grid-cols-2 gap-3 mb-6 text-gray-300">
                    {pkg.features.map((feature, index) => (
                      <motion.li 
                        key={index} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2.5 p-2.5 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors"
                      >
                        <svg className="w-5 h-5 text-[#cd754a]" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.599.111.793-.261.793-.577v-8.334c0-.284-.02-1.055-.02-1.285 0-.131-.087-.203-.139-.203-.054 0-.09.055-.111.128L7 19.238V21h6.17l-1.14-1.874H12v-2.064c.59-.076 1.032-.434 1.032-.999 0-.267-.02-.78-.02-1.48V13.52c-.02-.284-.031-1.055-.031-1.285 0-.131.087-.203.139-.203.054 0 .09.055.111.128L17 16.762V19h6.17l-1.14-1.874H20v-7.285c0-4.096-2.865-7.579-6.839-8.816C17.135 3.819 12.567 2 12 2z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-[#cd754a] to-[#dfb562] hover:from-[#cf6631] hover:to-[#e09a4d] text-white py-3 rounded-lg font-bold text-base transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Book Now
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Customize Your Tourism Experience</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Looking for something specific? Fill out the form below and our travel experts will create the perfect package tailored to your needs.
            </p>
          </div>
          
          <Consultation type="tourism" />
        </div>
      </motion.div>
    </div>
  )
}

export default Tourism