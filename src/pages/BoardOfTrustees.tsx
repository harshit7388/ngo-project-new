import bg2 from '../assets/bg2.jpg';
const trustees = [
  {
    name: "Dr. Sarah Johnson",
    position: "Chairperson",
    image: "https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg",
    bio: "Dr. Johnson brings 20+ years of experience in international development and healthcare management."
  },
  // {
  //   name: "Michael Chen",
  //   position: "Vice Chairperson",
  //   image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
  //   bio: "A veteran in corporate social responsibility with expertise in sustainable development."
  // },
  // {
  //   name: "Dr. Emily Rodriguez",
  //   position: "Secretary",
  //   image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg",
  //   bio: "Education specialist with focus on developing innovative learning programs."
  // },
  // {
  //   name: "James Wilson",
  //   position: "Treasurer",
  //   image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
  //   bio: "Financial expert with extensive experience in nonprofit management."
  // },
  // {
  //   name: "Dr. Aisha Patel",
  //   position: "Board Member",
  //   image: "https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg",
  //   bio: "Healthcare professional specializing in rural healthcare initiatives."
  // },
  // {
  //   name: "Robert Thompson",
  //   position: "Board Member",
  //   image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
  //   bio: "Technology entrepreneur focused on digital solutions for social impact."
  // }
];

const BoardOfTrustees = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[300px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}
      >
        <div className="container text-white">
          <h1 className="text-5xl font-bold mb-4 trusteesheading">Board of Trustees</h1>
          <p className="text-xl max-w-2xl">Meet the dedicated individuals guiding our mission and vision.</p>
        </div>
      </section>

      {/* Trustees Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {trustees.map((trustee, index) => (
              <div 
                key={index} 
                className="w-full sm:w-[320px] bg-gradient-to-br from-[#14B8A6] via-[#5b49ff] to-white text-white p-1 rounded-xl shadow-xl transform transition hover:scale-105"
              >
                <div className="bg-white text-gray-800 rounded-lg p-6 h-full">
                  <h3 className="text-2xl font-bold mb-2">{trustee.name}</h3>
                  <p className="text-indigo-600 font-semibold mb-3">{trustee.position}</p>
                  <p className="text-gray-600 text-sm">{trustee.bio}</p>
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