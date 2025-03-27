import React from 'react'

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
    quote: "Where Sacred Bonds Meet Ocean’s Eternal Witness",
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
    title: "Sangram/Meetings and Seminars ",
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
    <div className="min-h-screen bg-black text-white">
      <div className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
            alt="Beach"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6">
            <span className="text-white">Tourism</span>{" "}
            <span className="text-[#dfb562]">Packages</span>
          </h1>
          <p className="text-xl text-gray-200">
            Discover our handcrafted tourism experiences designed to create unforgettable memories
          </p>
        </div>
      </div>

      <div className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourismPackages.map((pkg) => (
              <div key={pkg.id} className="bg-gray-800/70 rounded-xl overflow-hidden hover:transform hover:scale-105 transition duration-300">
                <div className="relative">
                  <img 
                    src={pkg.image}
                    alt={pkg.alt}
                    className="w-full h-64 object-cover"
                  />
                  <div className={`absolute top-4 right-4 bg-[#cd754a] px-4 py-2 rounded-md text-sm font-medium`}>
                    From {pkg.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className={`text-2xl font-semibold mb-3 text-[#dfb562]`}>{pkg.title}</h3>
                  <p className='text-slate-300 text-xl font-bold mb-4'>{pkg.quote}</p>
                  <p className="text-gray-300 mb-4">{pkg.description}</p>
                  
                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {pkg.duration}
                    </span>
                    <span className="text-white">Available Now</span>
                  </div>

                  <ul className="space-y-2 mb-6 text-gray-300">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="#cd754a" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="8" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full bg-[#cd754a] hover:bg-[#cf6631] text-white py-3 rounded-lg font-medium transition`}>
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tourism  