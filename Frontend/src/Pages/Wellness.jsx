import React from 'react'

const Wellness = () => {
  return (
    <div className="min-h-screen bg-black text-white ">
      
      <div className="relative w-full h-[60vh] mb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop" 
            alt="Wellness Center" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-[#cd754a] text-white text-xs sm:text-sm font-medium py-2 px-4 sm:px-6 rounded-full inline-block mb-6">
            ICONIC WELLNESS EXPERIENCE
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-4">
            Ancient Wisdom, Modern Wellness
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
            All at Your Doorstep
          </p>
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-12">
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto">
            At ICONIC Ocean Edge, wellness is more than just relaxation—it's a way of life. 
            Designed to rejuvenate the mind, body, and soul, our state-of-the-art wellness centers 
            bring together the best of ancient Indian healing traditions and modern medical advancements.
          </p>
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-serif text-center mb-12">
          Holistic Healing Under One Roof
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Ayurveda Card */}
          <div className="bg-gray-900/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop" 
                alt="Ayurveda Retreat" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium text-[#dfb562] mb-3">Ayurveda & Panchakarma Retreats</h3>
              <p className="text-gray-300">
                Experience the timeless healing power of Ayurveda, with personalized therapies, 
                detox treatments, and herbal remedies.
              </p>
            </div>
          </div>

          {/* Yoga Card */}
          <div className="bg-gray-900/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1922&auto=format&fit=crop" 
                alt="Yoga Sanctuary" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium text-[#dfb562] mb-3">Yoga & Meditation Sanctuaries</h3>
              <p className="text-gray-300">
                Reconnect with your inner self through guided yoga and transcendental 
                meditation in serene ocean-facing spaces.
              </p>
            </div>
          </div>

          {/* Naturopathy Card */}
          <div className="bg-gray-900/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974&auto=format&fit=crop" 
                alt="Naturopathy" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium text-[#dfb562] mb-3">Naturopathy & Holistic Therapies</h3>
              <p className="text-gray-300">
                Restore balance with hydrotherapy, mud therapy, acupuncture, and sound healing.
              </p>
            </div>
          </div>

          {/* Spa Card */}
          <div className="bg-gray-900/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1770&auto=format&fit=crop" 
                alt="Luxury Spa" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium text-[#dfb562] mb-3">Advanced Spa & Luxury Wellness</h3>
              <p className="text-gray-300">
                Indulge in premium spa therapies, hydrothermal baths, and deep tissue 
                massages for the ultimate relaxation.
              </p>
            </div>
          </div>

          {/* Reiki Card */}
          <div className="bg-gray-900/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&w=1770&auto=format&fit=crop" 
                alt="Reiki Healing" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium text-[#dfb562] mb-3">Reiki & Energy Healing</h3>
              <p className="text-gray-300">
                Channel cosmic energy to cleanse your aura and enhance vitality.
              </p>
            </div>
          </div>

          {/* Nutrition Card */}
          <div className="bg-gray-900/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1770&auto=format&fit=crop" 
                alt="Nutritional Coaching" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-medium text-[#dfb562] mb-3">Nutritional & Wellness Coaching</h3>
              <p className="text-gray-300">
                Personalized diet plans based on Ayurveda and modern nutrition science.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="bg-gradient-to-r from-[#cd754a] to-[#dfb562] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-serif mb-4 text-white">
            At Ocean Edge, well-being meets luxury
          </h2>
          <p className="text-lg text-white/90">
            A sanctuary where ancient wisdom and advanced wellness unite for a transformative experience.
          </p>
          <button className="mt-8 bg-white text-[#cd754a] hover:bg-white/90 font-medium py-3 px-8 rounded-md transition">
            Book Your Wellness Journey
          </button>
        </div>
      </div>
    </div>
  )
}

export default Wellness