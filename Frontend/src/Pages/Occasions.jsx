import React from 'react'

const Occasions = () => {
  return (
    <div className="min-h-screen bg-black text-white ">
     
      <div className="relative w-full h-[60vh] mb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop" 
            alt="Luxury Event Space" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-[#D4B678] text-black text-xs sm:text-sm font-medium py-2 px-4 sm:px-6 rounded-full inline-block mb-6">
            ICONIC EVENTS & GATHERINGS
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-4">
            From Grand Celebrations to High-Impact Gatherings
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
            Where memories are crafted with elegance
          </p>
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-12">
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto">
            ICONIC Ocean Edge offers exquisite venues tailored for all occasions, blending elegance with world-class hospitality. 
            Whether it's a grand family celebration, a destination wedding, or a high-profile business summit, 
            our spaces provide the perfect setting.
          </p>
        </div>
        
        {/* Personal Celebrations Section */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-serif text-center mb-12">
            Celebrate Life's Special Moments
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Weddings Card */}
            <div className="bg-gray-900/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519741347686-c1e331fcb4d0?q=80&w=2070&auto=format&fit=crop" 
                  alt="Beachside Wedding" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-[#D4B678] mb-3">Weddings & Destination Nuptials</h3>
                <p className="text-gray-300">
                  Say "I do" against breathtaking ocean views with customized themes and luxury accommodations.
                </p>
              </div>
            </div>

            {/* Family Reunions Card */}
            <div className="bg-gray-900/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2069&auto=format&fit=crop" 
                  alt="Family Gathering" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-[#D4B678] mb-3">Family Reunions & Private Getaways</h3>
                <p className="text-gray-300">
                  Gather with your loved ones in an exclusive paradise, designed for togetherness.
                </p>
              </div>
            </div>

            {/* Birthday/Anniversary Card */}
            <div className="bg-gray-900/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1533294455009-a77b7557d2d1?q=80&w=2070&auto=format&fit=crop" 
                  alt="Celebration Gala" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-[#D4B678] mb-3">Birthday Bashes & Anniversary Galas</h3>
                <p className="text-gray-300">
                  Celebrate milestones in a grand, customized setting.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Corporate Events Section */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif text-center mb-12">
            Corporate Excellence by the Ocean
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Business Conferences Card */}
            <div className="bg-gray-900/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" 
                  alt="Business Conference" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-[#D4B678] mb-3">Business Conferences & Board Meetings</h3>
                <p className="text-gray-300">
                  Elevate your corporate discussions in an ultra-modern, inspiring setting.
                </p>
              </div>
            </div>

            {/* Luxury Retreats Card */}
            <div className="bg-gray-900/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?q=80&w=2070&auto=format&fit=crop" 
                  alt="Professional Retreat" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-[#D4B678] mb-3">Luxury Retreats for Professionals</h3>
                <p className="text-gray-300">
                  Reconnect, refresh, and realign goals amidst serene landscapes.
                </p>
              </div>
            </div>

            {/* Seminars Card */}
            <div className="bg-gray-900/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop" 
                  alt="Product Launch" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-[#D4B678] mb-3">Seminars, Product Launches & Expos</h3>
                <p className="text-gray-300">
                  Impress your audience with state-of-the-art infrastructure and premium hospitality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative w-full py-20 mb-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070&auto=format&fit=crop" 
            alt="Elegant Event Setup" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif mb-6 text-white">
            Every occasion at Ocean Edge is a seamless blend of luxury, precision, and unforgettable experiences.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button className="bg-[#D4B678] hover:bg-[#c9a55f] text-black font-medium py-3 px-8 rounded-md transition">
              Plan Your Event
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white border border-white font-medium py-3 px-8 rounded-md transition">
              View Our Venues
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Occasions