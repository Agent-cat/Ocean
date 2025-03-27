import React from 'react'

const Investment = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      
      <div className="relative h-[60vh] flex items-center justify-center mb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Property"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1 rounded-full bg-amber-600/20 text-amber-400 text-sm font-medium mb-4">
            YOUR NEXT SMART INVESTMENT
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Luxury Living <span className="font-serif italic">&</span> <br className="md:hidden"/> <span className="text-amber-500">Smart Investment</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            Own a piece of paradise that offers both an exceptional lifestyle and
            a strategic investment opportunity with compelling returns.
          </p>
        </div>
      </div>

      {/* Featured Properties Section */}
      <div className="mb-16 px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Featured Property Collections</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {/* Property Card 1 */}
          <div className="bg-gray-900/50 backdrop-blur rounded-xl overflow-hidden shadow-xl border border-gray-800 hover:border-amber-500/50 transition-all transform hover:scale-[1.02] duration-300">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop" 
                alt="Ocean Front Villa" 
                className="w-full h-72 object-cover"
              />
              <div className="absolute top-4 right-4 bg-amber-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg font-medium">
                ₹1.95 Cr
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-amber-400">Ocean Front Villa</h3>
              <div className="flex text-sm text-gray-400 mb-3 space-x-4">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                  </svg>
                  3500 sq.ft
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7 3a1 1 0 011-1h4a1 1 0 011 1v3h4a1 1 0 011 1v9a1 1 0 01-1 1H3a1 1 0 01-1-1V7a1 1 0 011-1h4V3z"/>
                  </svg>
                  3 Bedrooms
                </span>
              </div>
              <p className="text-gray-300 mb-4 line-clamp-2">
                Luxurious oceanfront villa with private pool and direct beach access. Perfect for those seeking privacy and uninterrupted sea views.
              </p>
              <div className="mb-6">
                <h4 className="font-medium mb-3 text-gray-200">Key Features:</h4>
                <ul className="grid grid-cols-2 gap-2">
                  <li className="flex items-center text-gray-300 text-sm"><span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>Private Pool</li>
                  <li className="flex items-center text-gray-300 text-sm"><span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>Direct Beach Access</li>
                  <li className="flex items-center text-gray-300 text-sm"><span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>Landscaped Garden</li>
                  <li className="flex items-center text-gray-300 text-sm"><span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>Smart Home Tech</li>
                  <li className="flex items-center text-gray-300 text-sm"><span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>Luxury Furnishings</li>
                </ul>
              </div>
              <button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02]">
                Request Details
              </button>
            </div>
          </div>

          {/* Property Card 2 */}
          <div className="bg-gray-900/50 backdrop-blur rounded-xl overflow-hidden shadow-xl border border-gray-800 hover:border-amber-500/50 transition-all transform hover:scale-[1.02] duration-300">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" 
                alt="Sunset View Residence" 
                className="w-full h-72 object-cover"
              />
              <div className="absolute top-4 right-4 bg-amber-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg font-medium">
                ₹1.45 Cr
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-amber-400">Sunset View Residence</h3>
              <div className="flex text-sm text-gray-400 mb-3 space-x-4">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                  </svg>
                  2800 sq.ft
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7 3a1 1 0 011-1h4a1 1 0 011 1v3h4a1 1 0 011 1v9a1 1 0 01-1 1H3a1 1 0 01-1-1V7a1 1 0 011-1h4V3z"/>
                  </svg>
                  2 Bedrooms
                </span>
              </div>
              <p className="text-gray-300 mb-4 line-clamp-2">
                Elevated property with stunning sunset views over the ocean and coastline. Modern architecture with floor-to-ceiling windows.
              </p>
              <div className="mb-6">
                <h4 className="font-medium mb-3 text-gray-200">Key Features:</h4>
                <ul className="grid grid-cols-2 gap-2">
                  <li className="flex items-center text-gray-300 text-sm"><span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>Infinity Edge Pool</li>
                  <li className="flex items-center text-gray-300 text-sm"><span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>Panoramic Views</li>
                  <li className="flex items-center text-gray-300 text-sm"><span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>Gourmet Kitchen</li>
                  <li className="flex items-center text-gray-300 text-sm"><span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>Home Office</li>
                  <li className="flex items-center text-gray-300 text-sm"><span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>Outdoor Dining</li>
                </ul>
              </div>
              <button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02]">
                Request Details
              </button>
            </div>
          </div>

          {/* Property Card 3 */}
          <div className="bg-gray-900/50 backdrop-blur rounded-xl overflow-hidden shadow-xl border border-gray-800 hover:border-amber-500/50 transition-all transform hover:scale-[1.02] duration-300">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
                alt="Garden Retreat Villa" 
                className="w-full h-72 object-cover"
              />
              <div className="absolute top-4 right-4 bg-amber-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg font-medium">
                ₹95 Lakhs
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-amber-400">Garden Retreat Villa</h3>
              <div className="flex text-sm text-gray-400 mb-3 space-x-4">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                  </svg>
                  2200 sq.ft
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7 3a1 1 0 011-1h4a1 1 0 011 1v3h4a1 1 0 011 1v9a1 1 0 01-1 1H3a1 1 0 01-1-1V7a1 1 0 011-1h4V3z"/>
                  </svg>
                  2 Bedrooms
                </span>
              </div>
              <p className="text-gray-300 mb-4 line-clamp-2">
                Serene garden villa surrounded by lush tropical landscaping. Close to resort amenities with private courtyard.
              </p>
              <div className="mb-6">
                <h4 className="font-medium mb-3 text-gray-200">Key Features:</h4>
                <ul className="grid grid-cols-2 gap-2">
                  <li className="flex items-center text-gray-300 text-sm"><span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>Tropical Garden</li>
                  <li className="flex items-center text-gray-300 text-sm"><span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>Courtyard</li>
                  <li className="flex items-center text-gray-300 text-sm"><span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>Spa Bathroom</li>
                  <li className="flex items-center text-gray-300 text-sm"><span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>Outdoor Shower</li>
                  <li className="flex items-center text-gray-300 text-sm"><span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>Walk to Amenities</li>
                </ul>
              </div>
              <button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02]">
                Request Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Investment