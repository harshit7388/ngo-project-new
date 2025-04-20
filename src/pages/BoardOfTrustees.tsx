import React from 'react';

const trustees = [
  {
    name: "Dr. Sarah Johnson",
    position: "Chairperson",
    image: "https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg",
    bio: "Dr. Johnson brings 20+ years of experience in international development and healthcare management."
  },
  {
    name: "Michael Chen",
    position: "Vice Chairperson",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    bio: "A veteran in corporate social responsibility with expertise in sustainable development."
  },
  {
    name: "Dr. Emily Rodriguez",
    position: "Secretary",
    image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg",
    bio: "Education specialist with focus on developing innovative learning programs."
  },
  {
    name: "James Wilson",
    position: "Treasurer",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
    bio: "Financial expert with extensive experience in nonprofit management."
  },
  {
    name: "Dr. Aisha Patel",
    position: "Board Member",
    image: "https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg",
    bio: "Healthcare professional specializing in rural healthcare initiatives."
  },
  {
    name: "Robert Thompson",
    position: "Board Member",
    image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
    bio: "Technology entrepreneur focused on digital solutions for social impact."
  }
];

const BoardOfTrustees = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[300px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}
      >
        <div className="container text-white">
          <h1 className="text-5xl font-bold mb-4">Board of Trustees</h1>
          <p className="text-xl max-w-2xl">Meet the dedicated individuals guiding our mission and vision.</p>
        </div>
      </section>

      {/* Trustees Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustees.map((trustee, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={trustee.image} 
                  alt={trustee.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{trustee.name}</h3>
                  <p className="text-teal-600 font-medium mb-4">{trustee.position}</p>
                  <p className="text-gray-600">{trustee.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our board members bring diverse expertise and shared commitment to our mission,
            ensuring effective governance and strategic direction for maximum social impact.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BoardOfTrustees;