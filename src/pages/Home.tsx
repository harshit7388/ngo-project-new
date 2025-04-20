import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Target, Globe } from 'lucide-react';

const Home = () => {
  return (
    <div>
  {/* Hero Section */}
  <section
    className="relative h-[600px] bg-cover bg-center flex items-center"
    style={{
      backgroundImage: 'url("https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg")',
      backgroundBlendMode: 'overlay',
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }}
  >
    <div className="container text-white px-4 md:px-0">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 max-w-2xl">
        Empowering Communities, Transforming Lives
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-xl">
        Join us in our mission to create lasting positive change through sustainable development and community empowerment.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/donate" className="btn btn-primary text-center">
          Donate Now
        </Link>
        <Link to="/about" className="btn btn-outline border-white text-white hover:bg-white hover:text-gray-900 text-center">
          Learn More
        </Link>
      </div>
    </div>
  </section>

  {/* Impact Numbers */}
  <section className="py-16 bg-gray-50">
    <div className="container px-4 md:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <Heart className="w-12 h-12 text-teal-600 mx-auto mb-4" />
          <h3 className="text-3xl md:text-4xl font-bold mb-2">10K+</h3>
          <p className="text-gray-600">Lives Impacted</p>
        </div>
        <div>
          <Users className="w-12 h-12 text-teal-600 mx-auto mb-4" />
          <h3 className="text-3xl md:text-4xl font-bold mb-2">500+</h3>
          <p className="text-gray-600">Volunteers</p>
        </div>
        <div>
          <Target className="w-12 h-12 text-teal-600 mx-auto mb-4" />
          <h3 className="text-3xl md:text-4xl font-bold mb-2">100+</h3>
          <p className="text-gray-600">Projects Completed</p>
        </div>
        <div>
          <Globe className="w-12 h-12 text-teal-600 mx-auto mb-4" />
          <h3 className="text-3xl md:text-4xl font-bold mb-2">25+</h3>
          <p className="text-gray-600">Communities Served</p>
        </div>
      </div>
    </div>
  </section>

  {/* Featured Initiatives */}
  <section className="py-16">
    <div className="container px-4 md:px-0">
      <h2 className="text-3xl font-bold text-center mb-12">Our Initiatives</h2>

      <div className="flex flex-col md:flex-row items-center justify-between relative gap-12">
        {/* Horizontal Line (visible only for md and up) */}
        <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-teal-600"></div>

        {/* Initiatives */}
        {[1, 2, 3, 4].map((num, index) => (
          <div key={index} className="flex flex-col items-center text-center md:w-1/4 px-4 relative">
            <div className="flex items-center justify-center w-12 h-12 bg-white border-2 border-teal-600 rounded-full font-bold text-teal-600 text-lg mb-4 z-10">
              {num}
            </div>
            {num === 1 && (
              <>
                <h3 className="text-xl font-semibold mb-2">Education for All</h3>
                <p className="text-gray-600 mb-4">Providing quality education to underprivileged children.</p>
              </>
            )}
            {num === 2 && (
              <>
                <h3 className="text-xl font-semibold mb-2">Healthcare Access</h3>
                <p className="text-gray-600 mb-4">Making healthcare accessible to remote communities.</p>
              </>
            )}
            {num === 3 && (
              <>
                <h3 className="text-xl font-semibold mb-2">Community Development</h3>
                <p className="text-gray-600 mb-4">Building sustainable and resilient communities.</p>
              </>
            )}
            {num === 4 && (
              <>
                <h3 className="text-xl font-semibold mb-2">Sustainability Awareness</h3>
                <p className="text-gray-600 mb-4">Environmental sustainability and awareness campaigns.</p>
              </>
            )}
            <Link
              to="/about"
              className="text-teal-600 font-medium flex items-center justify-center hover:text-teal-700"
            >
              Learn More <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* CTA Section */}
  <section className="py-16 bg-teal-600 text-white">
    <div className="container text-center px-4 md:px-0">
      <h2 className="text-3xl font-bold mb-6">Make a Difference Today</h2>
      <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
        Your support can help us continue our mission of empowering communities and transforming lives.
      </p>
      <Link
        to="/donate"
        className="btn bg-white text-teal-600 hover:bg-gray-100 inline-block"
      >
        Donate Now
      </Link>
    </div>
  </section>
</div>

  );
};

export default Home;