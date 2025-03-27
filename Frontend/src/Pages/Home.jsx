import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const userTypeData = {
  doctors: {
    title: "A Healing Haven",
    description: "After long hours of providing care, immerse yourself in a peaceful and rejuvenating environment that promotes wellness. Our hygienic, serene spaces and wellness amenities are designed with medical professionals in mind.",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
    features: [
      "Wellness Spa & Health Center",
      "Quiet Meditation Spaces",
      "Clean Air & Pristine Environment",
      "Medical Concierge Services"
    ]
  },
  nris: {
    title: "Your Indian Home",
    description: "Maintain your connection to India with a luxurious property that offers the perfect blend of traditional values and modern amenities. Enjoy hassle-free ownership with our comprehensive property management services.",
    image: "https://images.unsplash.com/photo-1582610116397-edb318620f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Simplified Documentation",
      "Remote Property Management",
      "Cultural Celebrations & Events",
      "Investment Appreciation"
    ]
  },
  businessOwners: {
    title: "Strategic Retreat",
    description: "Balance work and leisure in an environment designed for high-achieving professionals. Host exclusive meetings, entertain clients, or simply recharge in a setting that reflects your success and ambition.",
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Executive Meeting Spaces",
      "High-Speed Connectivity",
      "Networking Opportunities",
      "Prestigious Address"
    ]
  },
  families: {
    title: "Generational Memories",
    description: "Create lasting memories in a safe, engaging environment where every family member can find their perfect activity. From children's play areas to multi-generational entertainment options, we've thought of everyone.",
    image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Family-Friendly Activities",
      "Children's Play Areas",
      "Multi-Generational Spaces",
      "Safe & Secure Environment"
    ]
  }
};

const Home = () => {
  // State to track selected user type
  const [selectedUserType, setSelectedUserType] = useState('doctors');
  
  // Get current data based on selected user type
  const currentData = userTypeData[selectedUserType];
  
  return (
    <div className='min-h-screen'>
      <div className='min-h-screen w-full flex flex-col items-center justify-center text-white relative'>
     
        <div className='absolute inset-0 z-0'>
          <img 
            src="https://imgs.search.brave.com/AdnbX4X-gpYV0tZpUVxh4Ef2TGpgH47zrkIqCJVnS28/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQz/MjM1NzE1OS9waG90/by9tb2Rlcm4tYmVh/Y2gtaG91c2Utd2l0/aC1zZWEtdmlldy1z/d2ltbWluZy1wb29s/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1ZZHRkMkYyWlJO/TkFKaW94Ym15M1ZC/OXNLMEViWi1WSjVB/UnltUmVNNWRrPQ" 
            alt="Luxury Interior" 
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black/30'></div>
        </div>
      
        <div className='z-10 text-center px-4 sm:px-6 md:px-8 max-w-4xl mx-auto'>
          <div className='bg-[#cd754a] text-white text-xs sm:text-sm font-medium py-2 px-4 sm:px-6 rounded-full inline-block mb-6 sm:mb-8'>
            YOUR GATEWAY TO LUXURY & SERENITY
          </div>
          
          <h1 className='text-4xl scale-110 font-bold sm:text-5xl md:text-6xl lg:text-6xl font-serif mb-3 sm:mb-4'>
            Experience The <span className='text-[#dfb562] font-bold '>ICONIC</span> Life
          </h1>
          
          <p className='text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 px-2'>
            Exclusive luxury villas and world-class experiences on the 
            pristine coast of Andhra Pradesh
          </p>
          
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-[#cd754a] hover:bg-amber-700 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-md transition text-sm sm:text-base'>
              Book Your Stay
            </button>
            <button className='border border-white hover:bg-white/10 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-md transition text-sm sm:text-base'>
              Own Your Luxury Retreat
            </button>
          </div>
        </div>
      
        <a href='#about' className='absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </a>
      </div>
      
      <div id='about' className='bg-black text-white py-12 sm:py-16 px-4 sm:px-6 md:px-8'>
        <div className='max-w-6xl mx-auto text-center'>
          <div className='bg-amber-900/30 text-amber-300 text-xs sm:text-sm font-medium py-2 px-4 sm:px-6 rounded-full inline-block mb-8 sm:mb-10'>
            THE VISION BEHIND ICONIC OCEAN EDGE
          </div>
          
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-8 sm:mb-10'>
            Creating Extraordinary<br className='hidden sm:block' />Moments & Memories
          </h2>
          
          <p className='text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto px-2'>
            ICONIC Ocean Edge is a testament to luxury living with unparalleled 
            experiences on the pristine coastline of Andhra Pradesh. Designed 
            for discerning individuals who value exclusivity and sophistication.
          </p>
        </div>

        <div className='max-w-7xl mt-16 sm:mt-28 mx-auto'>
          <div className='flex flex-col md:flex-row gap-8 md:gap-12 items-center'>
            <div className='w-full md:w-1/2 relative px-4 sm:px-0'>
              <div className='rounded-lg overflow-hidden'>
                <img 
                  src="https://imgs.search.brave.com/AdnbX4X-gpYV0tZpUVxh4Ef2TGpgH47zrkIqCJVnS28/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQz/MjM1NzE1OS9waG90/by9tb2Rlcm4tYmVh/Y2gtaG91c2Utd2l0/aC1zZWEtdmlldy1z/d2ltbWluZy1wb29s/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1ZZHRkMkYyWlJO/TkFKaW94Ym15M1ZC/OXNLMEViWi1WSjVB/UnltUmVNNWRrPQ" 
                  alt="Luxury Experience" 
                  className='w-full h-full object-cover'
                />
              </div>
              
            </div>
            
            <div className='w-full md:w-1/2 px-4 sm:px-6 md:px-0'>
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-serif mb-4 sm:mb-6'>Our Legacy of Excellence</h2>
              <p className='text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base'>
                With over 15 years of experience in crafting exceptional living spaces, ICONIC
                brings its legacy of credibility, innovation, and customer trust to Ocean Edge. Our
                mission is to create a world-class luxurious and secure getaway that redefines
                coastal living in India.
              </p>
              
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8'>
                <div className='bg-gray-900/50 p-4 sm:p-6 rounded-lg'>
                  <div className='text-amber-500 mb-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className='text-lg sm:text-xl font-medium mb-2'>Unmatched Security</h3>
                  <p className='text-gray-400 text-sm sm:text-base'>State-of-the-art systems ensuring peace of mind at all times.</p>
                </div>
                
                <div className='bg-gray-900/50 p-4 sm:p-6 rounded-lg'>
                  <div className='text-amber-500 mb-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h3 className='text-lg sm:text-xl font-medium mb-2'>Premium Quality</h3>
                  <p className='text-gray-400 text-sm sm:text-base'>Exceptional craftsmanship and materials in every detail.</p>
                </div>
                
                <div className='bg-gray-900/50 p-4 sm:p-6 rounded-lg'>
                  <div className='text-amber-500 mb-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className='text-lg sm:text-xl font-medium mb-2'>Exclusive Amenities</h3>
                  <p className='text-gray-400 text-sm sm:text-base'>Curated experiences designed for the discerning few.</p>
                </div>
                
                <div className='bg-gray-900/50 p-4 sm:p-6 rounded-lg'>
                  <div className='text-amber-500 mb-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8  sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className='text-lg sm:text-xl font-medium mb-2'>Award-Winning</h3>
                  <p className='text-gray-400 text-sm sm:text-base'>Recognized excellence in design and hospitality.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      <div id='explore' className='bg-black text-white py-16 px-4 sm:px-6 md:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <div className='bg-amber-900/30 text-amber-300 text-xs sm:text-sm font-medium py-2 px-4 sm:px-6 rounded-full inline-block mb-6'>
              TAILORED FOR YOU
            </div>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-serif'>
              Experiences Designed For Your Lifestyle
            </h2>
          </div>
          
          <div className='flex flex-col md:flex-row gap-8'>
            <div className='w-full md:w-2/5'>
              {/* User Type Selection */}
              <div className='bg-gray-900/80 rounded-xl p-4'>
                <div 
                  className={`flex items-center p-4 rounded-lg mb-3 cursor-pointer ${selectedUserType === 'doctors' ? 'bg-[#cd754a]' : 'hover:bg-gray-800/50'} transition`}
                  onClick={() => setSelectedUserType('doctors')}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${selectedUserType === 'doctors' ? 'bg-white/20' : 'bg-gray-700'} mr-4`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-medium text-lg'>Doctors</h3>
                    <p className={`text-sm ${selectedUserType === 'doctors' ? 'text-gray-200' : 'text-gray-400'}`}>Tailored experiences</p>
                  </div>
                  <div className='ml-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <div 
                  className={`flex items-center p-4 rounded-lg mb-3 cursor-pointer ${selectedUserType === 'nris' ? 'bg-[#cd754a]' : 'hover:bg-gray-800/50'} transition`}
                  onClick={() => setSelectedUserType('nris')}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${selectedUserType === 'nris' ? 'bg-white/20' : 'bg-gray-700'} mr-4`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-medium text-lg'>NRIs</h3>
                    <p className={`text-sm ${selectedUserType === 'nris' ? 'text-gray-200' : 'text-gray-400'}`}>Tailored experiences</p>
                  </div>
                  <div className='ml-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <div 
                  className={`flex items-center p-4 rounded-lg mb-3 cursor-pointer ${selectedUserType === 'businessOwners' ? 'bg-[#cd754a]' : 'hover:bg-gray-800/50'} transition`}
                  onClick={() => setSelectedUserType('businessOwners')}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${selectedUserType === 'businessOwners' ? 'bg-white/20' : 'bg-gray-700'} mr-4`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-medium text-lg'>Business Owners</h3>
                    <p className={`text-sm ${selectedUserType === 'businessOwners' ? 'text-gray-200' : 'text-gray-400'}`}>Tailored experiences</p>
                  </div>
                  <div className='ml-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <div 
                  className={`flex items-center p-4 rounded-lg mb-3 cursor-pointer ${selectedUserType === 'families' ? 'bg-[#cd754a]' : 'hover:bg-gray-800/50'} transition`}
                  onClick={() => setSelectedUserType('families')}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${selectedUserType === 'families' ? 'bg-white/20' : 'bg-gray-700'} mr-4`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-medium text-lg'>Families</h3>
                    <p className={`text-sm ${selectedUserType === 'families' ? 'text-gray-200' : 'text-gray-400'}`}>Tailored experiences</p>
                  </div>
                  <div className='ml-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                {/* Virtual Tour Section */}
                <div className='mt-8 bg-gray-900/50 rounded-lg p-6'>
                  <div className='flex items-center mb-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <h3 className='font-medium text-lg'>Virtual Tour</h3>
                  </div>
                  <p className='text-sm text-gray-300 mb-4'>
                    Experience our property virtually with our immersive 3D tour technology.
                  </p>
                  <button className='w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg transition'>
                    Book a Virtual Tour
                  </button>
                </div>
              </div>
            </div>
            
            <div className='w-full md:w-3/5'>
              {/* Content for selected user type */}
              <div className='bg-gray-900/30 rounded-xl overflow-hidden'>
                <img 
                  src={currentData.image} 
                  alt={currentData.title} 
                  className='w-full h-64 object-cover'
                />
                <div className='p-6'>
                  <h2 className='text-3xl font-serif mb-4'>{currentData.title}</h2>
                  <p className='text-gray-300 mb-6'>
                    {currentData.description}
                  </p>
                  
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6'>
                    {currentData.features.map((feature, index) => (
                      <div key={index} className='flex items-center'>
                        <div className='w-2 h-2 rounded-full bg-amber-500 mr-2'></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className='bg-amber-600 hover:bg-amber-700 text-white py-2 px-6 rounded-md transition'>
                    Explore More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home