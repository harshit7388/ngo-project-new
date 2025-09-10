import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Target, Globe } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import local images
import homeImage5 from "../assets/homeImage5.png";
import education2 from "../assets/education2.jpg";
import health2 from "../assets/health2.jpg";
import sustain2 from "../assets/sustain2.jpg";
import map from "../assets/map.png";
const images = [homeImage5, education2, health2, sustain2];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="px-0 sm:px-0 md:px-0">
      {/* Hero Section with Carousel */}
      <section className="relative w-full h-[500px] sm:h-[600px] overflow-hidden">
        <Slider {...settings}>
          {images.map((img, i) => (
            <div key={i}>
              <div
                className="w-full h-[500px] sm:h-[600px] bg-center bg-cover flex items-center justify-start"
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundBlendMode: "overlay",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
              >
                <div className="text-white w-full px-4 sm:px-6 lg:px-8">
                  <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                    <span className="homepageheading">
                      Empowering Communities, Transforming Lives
                    </span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl mb-6">
                    Join us in our mission to create lasting positive change
                    through sustainable development and community empowerment.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/donate" className="btn btn-primary text-center">
                      Donate Now
                    </Link>
                    <Link
                      to="/ourwork"
                      className="btn btn-outline border-white text-white hover:bg-white hover:text-gray-900 text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Impact Numbers */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div>
            <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-teal-600 mx-auto mb-3" />
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">
              10K+
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">Lives Impacted</p>
          </div>
          <div>
            <Users className="w-10 h-10 sm:w-12 sm:h-12 text-teal-600 mx-auto mb-3" />
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">
              500+
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">Volunteers</p>
          </div>
          <div>
            <Target className="w-10 h-10 sm:w-12 sm:h-12 text-teal-600 mx-auto mb-3" />
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">
              100+
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Projects Completed
            </p>
          </div>
          <div>
            <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-teal-600 mx-auto mb-3" />
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">
              25+
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Communities Served
            </p>
          </div>
        </div>
      </section>

      {/* Featured Initiatives */}
      <section className="py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          Our Initiatives
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-10 sm:gap-12 w-full">
          {[1, 2, 3, 4, 5, 6].map((num, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-2 relative w-full"
            >
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white border-2 border-teal-600 rounded-full font-bold text-teal-600 text-lg mb-3 z-10">
                {num}
              </div>

              {num === 1 && (
                <>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">
                    Education for All
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-3">
                    Providing quality education to underprivileged children.
                  </p>
                </>
              )}
              {num === 2 && (
                <>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">
                    Healthcare Access
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-3">
                    Making healthcare accessible to remote communities.
                  </p>
                </>
              )}
              {num === 3 && (
                <>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">
                    Community Development
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-3">
                    Building sustainable and resilient communities.
                  </p>
                </>
              )}
              {num === 4 && (
                <>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">
                    Sustainability Awareness
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-3">
                    Environmental sustainability and awareness campaigns.
                  </p>
                </>
              )}
              {num === 5 && (
                <>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">
                    point 5
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, architecto?.
                  </p>
                </>
              )}
              {num === 6 && (
                <>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">
                    point 6
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, laudantium.
                  </p>
                </>
              )}

              {/* <Link
                to="/about"
                className="text-teal-600 text-sm sm:text-base font-medium flex items-center justify-center hover:text-teal-700"
              >
                Learn More <ArrowRight size={14} className="ml-1" />
              </Link> */}
            </div>
          ))}
        </div>
      </section>

{/* Image Section (Below Initiatives) */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          Our Reach
        </h2>
        <div className="flex justify-center">
          <img
            src={map}
            alt="Our NGO Reach"
      className="rounded-2xl shadow-lg max-w-2xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2"


          />
        </div>
      </section>

      {/* CTA Section */}
      {/* (keeping your existing code unchanged) */}
    </div>
  );
};

export default Home;
