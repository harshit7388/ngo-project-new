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
      {/* (keeping your existing code unchanged) */}
      {/* CTA Section */}
      {/* (keeping your existing code unchanged) */}
    </div>
  );
};

export default Home;
