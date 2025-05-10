import { Link } from "react-router-dom";
import { Calendar, Users, Target, ArrowRight } from "lucide-react";
import education1 from '../assets/education1.jpg';
import empowerment1 from '../assets/empowerment1.png';
import health4 from '../assets/health4.png';
import csr2 from '../assets/csr2.jpg';

const CSR = () => {
  const pastEvents = [
    {
      title: "Education for All",
      date: "March 15, 2024",
      location: "City Public School",
      description:
        "Provided educational materials and conducted workshops for underprivileged students especially for girls",
      image: education1,
        
    },
    {
      title: "Healthcare Camp",
      date: "February 20, 2024",
      location: "Rural Community Center",
      description:
        "Free medical checkups and health awareness sessions for rural communities.",
      image:
        health4,
    },
    {
      title: "Women Empowerment Workshop",
      date: "January 10, 2024",
      location: "City Park",
      description: "Workshop on skill development and entrepreneurship",
      image:
        empowerment1,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url(${csr2})`,
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="container text-white">
          <h1 className="text-5xl font-bold mb-4 csrheading">CSR Initiatives</h1>
          <p className="text-xl max-w-2xl">
            Partner with us to create meaningful impact through corporate social
            responsibility.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our CSR Approach</h2>
            <p className="text-gray-600 mb-12">
              We work with corporations to design and implement impactful CSR
              programs that align with both corporate objectives and community
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Calendar className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Structured Programs
              </h3>
              <p className="text-gray-600">
                Well-planned initiatives with clear objectives and measurable
                outcomes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Users className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Employee Engagement
              </h3>
              <p className="text-gray-600">
                Opportunities for corporate employees to participate and
                contribute directly.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Target className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Impact Measurement</h3>
              <p className="text-gray-600">
                Regular reporting and assessment of program outcomes and impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Past CSR Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-500 text-sm mb-2">
                    {event.date} | {event.location}
                  </p>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <Link
                    to="/contact"
                    className="text-teal-600 font-medium flex items-center hover:text-teal-700"
                  >
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
            <ul>
              <li className="text-gray-600 mb-8">
                <span  className="font-bold"> Drive Meaningful Impact </span>
                Your CSR initiatives can bring genuine, visible change where it
                is needed the most. With our grassroots presence and deep
                community relationships, we ensure that your contribution
                touches real lives and creates measurable outcomes.
              </li>
              <li className="text-gray-600 mb-8">
                <span  className="font-bold">Fulfill CSR Obligations with Purpose </span>
                We align our projects with your CSR mandates and provide
                complete assistance with documentation, impact reports, and
                compliance requirements under the Companies Act, 2013. Your CSR
                journey becomes seamless and purpose-driven.
              </li>
              <li className="text-gray-600 mb-8">
                <span  className="font-bold"> Transparent and Accountable Processes </span>
                We believe in building trust through transparency. Our processes
                include regular updates, financial accountability, field
                reports, and clear communication at every step, giving you
                complete confidence in your investment.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
            <p className="text-gray-600 mb-8">
              Looking to make a difference through your corporate social
              responsibility initiatives? We offer customized programs that
              align with your company's values and objectives.
            </p>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">How We Can Help</h3>
                <ul className="text-left space-y-3">
                  <li className="flex items-center">
                    <ArrowRight size={16} className="text-teal-600 mr-2" />
                    <span>Custom CSR program design and implementation</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight size={16} className="text-teal-600 mr-2" />
                    <span>Employee volunteer opportunities</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight size={16} className="text-teal-600 mr-2" />
                    <span>Impact assessment and reporting</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight size={16} className="text-teal-600 mr-2" />
                    <span>Community engagement initiatives</span>
                  </li>
                </ul>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-block mt-8 px-8 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CSR;
