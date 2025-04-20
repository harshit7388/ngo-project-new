import React from "react";
import { Link } from "react-router-dom";
import { Target, Lightbulb, Map, Compass } from "lucide-react";
import "../styles/styles.css";
import img3 from "../assets/img3.jpg";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg")',
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="container text-white ">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl">
            Kalyan Ke Kadam Foundation is dedicated to uplifting underprivileged
            communities. Registered in Gurgaon, Haryana, the foundation focuses
            on children and women. They strive to provide social welfare and
            healthcare support.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-teal-600">
                Our Vision
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Holistic development of marginalized groups is our ultimate
                goal. We strive to create a society where everyone has equal
                opportunities. .
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-teal-600">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Advance social welfare, healthcare, and education. We aim to
                promote gender equality and environmental sustainability. Our
                mission is to empower those in need
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Objectives */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Core Objectives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Target className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Programs</h3>
              <p className="text-gray-600">
                Organize targeted programs for underprivileged children and
                women. These initiatives provide essential resources and
                support.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Lightbulb className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Eradication</h3>
              <p className="text-gray-600">
                Eradicate hunger, poverty, and malnutrition through sustainable
                solutions. We focus on long-term impact and empowerment
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Compass className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Support</h3>
              <p className="text-gray-600">
                Support healthcare and welfare in rural and slum areas. Access
                to healthcare is vital for community well-being
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Key Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={img3}
                alt="Education"
                className="w-full h-64 object-cover brightness-50" // <<< reduced brightness
              />
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="border border-white p-6 rounded-lg bg-white bg-opacity-50 backdrop-blur-sm text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Education
                  </h3>
                  <p className="text-gray-800 font-bold text-sm">
                    Education for disadvantaged youth, especially girls, is key.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg"
                alt="Education"
                className="w-full h-64 object-cover brightness-50" // <<< reduced brightness
              />
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="border border-white p-6 rounded-lg bg-white bg-opacity-50 backdrop-blur-sm text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Healthcare
                  </h3>
                  <p className="text-gray-800 font-bold text-sm">
                    Healthcare support and nutrition initiatives are essential.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg"
                alt="Education"
                className="w-full h-64 object-cover brightness-50" // <<< reduced brightness
              />
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="border border-white p-6 rounded-lg bg-white bg-opacity-50 backdrop-blur-sm text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Empowerment
                  </h3>
                  <p className="text-gray-800 font-bold text-sm">
                    Gender equality and womens empowerment projects are
                    crucial.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg"
                alt="Education"
                className="w-full h-64 object-cover brightness-75" // <<< reduced brightness
              />
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="border border-white p-6 rounded-lg bg-white bg-opacity-50 backdrop-blur-sm text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Sustainability
                  </h3>
                  <p className="text-gray-800 font-bold text-sm">
                    Environmental sustainability efforts are a priority.
                  </p>
                </div>
              </div>
            </div>

            {/* Repeat for others similarly */}
          </div>
        </div>
      </section>

      {/* Locations Served */}
      <section className="py-16 bg-gray-50">
  <div className="container">
    <h2 className="text-3xl font-bold text-center mb-12">
      Our Impact
    </h2>

    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row items-center justify-around space-y-8 md:space-y-0">

        {/* Step 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full border-4 border-teal-600 text-teal-600 text-2xl font-bold mb-4">
            1
          </div>
          <h3 className="text-xl font-semibold mb-2">Serving Haryana</h3>
          <p className="text-gray-600 text-sm max-w-[200px]">
            Serving communities in and around Haryana, India.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full border-4 border-teal-600 text-teal-600 text-2xl font-bold mb-4">
            2
          </div>
          <h3 className="text-xl font-semibold mb-2">Collaborative</h3>
          <p className="text-gray-600 text-sm max-w-[200px]">
            Collaborative approach with local stakeholders.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full border-4 border-teal-600 text-teal-600 text-2xl font-bold mb-4">
            3
          </div>
          <h3 className="text-xl font-semibold mb-2">Transparent</h3>
          <p className="text-gray-600 text-sm max-w-[200px]">
            Transparent, inclusive, and measurable metrics.
          </p>
        </div>

      </div>
    </div>
  </div>
</section>


      {/* Future Perspectives */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Future Perspectives
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Expanding Our Reach
                </h3>
                <p className="text-gray-700">
                  We aim to expand our presence to 50+ new locations in the next
                  five years, bringing hope and opportunities to more
                  communities in need.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Innovation in Programs
                </h3>
                <p className="text-gray-700">
                  Developing new programs that leverage technology and
                  sustainable practices to create more effective solutions for
                  community development.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Partnerships for Impact
                </h3>
                <p className="text-gray-700">
                  Building strategic partnerships with organizations and
                  institutions to amplify our impact and reach more
                  beneficiaries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Together, we can create lasting positive change in communities
            across the world.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/donate"
              className="btn bg-white text-teal-600 hover:bg-gray-100"
            >
              Donate Now
            </Link>
            <Link
              to="/contact"
              className="btn btn-outline border-white text-white hover:bg-white hover:text-teal-600"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
