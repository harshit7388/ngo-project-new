import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Target, Globe } from 'lucide-react';
import homeImage5 from '../assets/homeImage5.png';


const Home = () => {
  return (
    <div className="px-0 sm:px-0 md:px-0"> {/* No padding on mobile or desktop */}
      {/* Hero Section */}
      <section
        className="relative w-full h-[500px] sm:h-[600px] bg-center bg-cover flex items-center justify-start rounded-none overflow-hidden"
        style={{
          backgroundImage: `url(${homeImage5})`,
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <div className="text-white w-full px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
           <span className='homepageheading'>Empowering Communities, Transforming Lives</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6">
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
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div>
            <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-teal-600 mx-auto mb-3" />
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">10K+</h3>
            <p className="text-gray-600 text-sm sm:text-base">Lives Impacted</p>
          </div>
          <div>
            <Users className="w-10 h-10 sm:w-12 sm:h-12 text-teal-600 mx-auto mb-3" />
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">500+</h3>
            <p className="text-gray-600 text-sm sm:text-base">Volunteers</p>
          </div>
          <div>
            <Target className="w-10 h-10 sm:w-12 sm:h-12 text-teal-600 mx-auto mb-3" />
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">100+</h3>
            <p className="text-gray-600 text-sm sm:text-base">Projects Completed</p>
          </div>
          <div>
            <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-teal-600 mx-auto mb-3" />
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">25+</h3>
            <p className="text-gray-600 text-sm sm:text-base">Communities Served</p>
          </div>
        </div>
      </section>

      {/* Featured Initiatives */}
      <section className="py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">Our Initiatives</h2>

        <div className="flex flex-col sm:flex-row items-center justify-between relative gap-10 sm:gap-12 w-full">
          <div className="hidden sm:block absolute top-6 left-0 right-0 h-0.5 bg-teal-600"></div>

          {[1, 2, 3, 4].map((num, index) => (
            <div key={index} className="flex flex-col items-center text-center sm:w-1/4 px-2 relative w-full">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white border-2 border-teal-600 rounded-full font-bold text-teal-600 text-lg mb-3 z-10">
                {num}
              </div>
              {num === 1 && (
                <>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">Education for All</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-3">Providing quality education to underprivileged children.</p>
                </>
              )}
              {num === 2 && (
                <>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">Healthcare Access</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-3">Making healthcare accessible to remote communities.</p>
                </>
              )}
              {num === 3 && (
                <>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">Community Development</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-3">Building sustainable and resilient communities.</p>
                </>
              )}
              {num === 4 && (
                <>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">Sustainability Awareness</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-3">Environmental sustainability and awareness campaigns.</p>
                </>
              )}
              <Link
                to="/about"
                className="text-teal-600 text-sm sm:text-base font-medium flex items-center justify-center hover:text-teal-700"
              >
                Learn More <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-teal-600 text-white text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Make a Difference Today</h2>
        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-xl mx-auto">
          Your support can help us continue our mission of empowering communities and transforming lives.
        </p>
        <Link
          to="/donate"
          className="btn bg-white text-teal-600 hover:bg-gray-100 inline-block"
        >
          Donate Now
        </Link>
      </section>
    </div>
  );
};

export default Home;
