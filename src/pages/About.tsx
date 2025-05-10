import { Link } from "react-router-dom";
import { Target, Lightbulb, Compass } from "lucide-react";
import "../styles/styles.css";
import education2 from '../assets/education2.jpg';
import empowerment4 from '../assets/empowerment4.png';
import health2 from '../assets/health2.jpg';
import sustain2 from '../assets/sustain2.jpg';
import aboutus from '../assets/aboutus.png';
const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
          `url(${aboutus})`,
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="container text-white ">
          <h1 className="text-5xl font-bold mb-4 aboutpageheading">About Us</h1>
          <p className="text-xl max-w-2xl">
            Kalyan Ke Kadam Foundation is dedicated to uplifting underprivileged
            communities. 
            <br />
            <br />
            Registered in Gurgaon, Haryana, the foundation focuses
            on children and women. They strive to provide social welfare and
            healthcare support.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 px-4">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-teal-600">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Holistic development of marginalized groups is our ultimate goal.
            We strive to create a society where everyone has equal opportunities.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-teal-600">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base ">
            Advance social welfare, healthcare, and education. We aim to promote
            gender equality and environmental sustainability. Our mission is to
            empower those in need.
          </p>
        </div>
      </div>
    </div>
  </section>
      {/* Core Objectives */}
      <section className="py-12 px-4 bg-gray-50">
    <div className="container mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Core Objectives
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          {
            icon: <Target className="w-10 h-10 text-teal-600 mb-4" />,
            title: "Programs",
            desc:
              "Organize targeted programs for underprivileged children and women. These initiatives provide essential resources and support.",
          },
          {
            icon: <Lightbulb className="w-10 h-10 text-teal-600 mb-4" />,
            title: "Eradication",
            desc:
              "Eradicate hunger, poverty, and malnutrition through sustainable solutions. We focus on long-term impact and empowerment.",
          },
          {
            icon: <Compass className="w-10 h-10 text-teal-600 mb-4" />,
            title: "Support",
            desc:
              "Support healthcare and welfare in rural and slum areas. Access to healthcare is vital for community well-being.",
          },
        ].map((obj, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-md">
            {obj.icon}
            <h3 className="text-lg font-semibold mb-2">{obj.title}</h3>
            <p className="text-gray-600 text-sm">{obj.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
      {/* Key Focus Areas */}
      <section className="py-12 px-4">
    <div className="container mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Key Focus Areas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "Education",
            desc: "Education for disadvantaged youth, especially girls, is key.",
            img: education2,
          },
          {
            title: "Healthcare",
            desc: "Healthcare support and nutrition initiatives are essential.",
            img: health2,
          },
          {
            title: "Empowerment",
            desc: "Gender equality and women's empowerment projects are crucial.",
            img: empowerment4,
          },
          {
            title: "Sustainability",
            desc: "Environmental sustainability efforts are a priority.",
            img: sustain2,
          },
        ].map((item, i) => (
          <div key={i} className="relative overflow-hidden rounded-lg">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="border border-white p-4 rounded-lg bg-white bg-opacity-50 backdrop-blur-sm text-center">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-800 text-sm font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

      {/* Locations Served */}
      <section className="py-12 px-4 bg-gray-50">
    <div className="container mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Our Impact
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row justify-around items-center gap-8">
          {[
            {
              title: "Serving Haryana",
              desc: "Serving communities in and around Haryana, India.",
            },
            {
              title: "Collaborative",
              desc: "Collaborative approach with local stakeholders.",
            },
            {
              title: "Transparent",
              desc: "Transparent, inclusive, and measurable metrics.",
            },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-14 h-14 flex items-center justify-center rounded-full border-4 border-teal-600 text-teal-600 text-lg font-bold mb-3">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm max-w-[200px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

      {/* Future Perspectives */}
      <section className="py-12 px-4">
    <div className="container mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Future Perspectives
      </h2>
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Expanding Our Reach</h3>
          <p className="text-gray-700 text-sm md:text-base">
            We aim to expand our presence to 50+ new locations in the next five
            years, bringing hope and opportunities to more communities in need.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Innovation in Programs</h3>
          <p className="text-gray-700 text-sm md:text-base">
            Developing new programs that leverage technology and sustainable
            practices to create more effective solutions for community
            development.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Partnerships for Impact
          </h3>
          <p className="text-gray-700 text-sm md:text-base">
            Building strategic partnerships with organizations and institutions
            to amplify our impact and reach more beneficiaries.
          </p>
        </div>
      </div>
    </div>
  </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-teal-600 text-white text-center">
    <div className="container mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Join Us in Making a Difference
      </h2>
      <p className="text-lg max-w-xl mx-auto mb-6">
        Together, we can create lasting positive change in communities across
        the world.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <Link
          to="/donate"
          className="btn bg-white text-teal-600 hover:bg-gray-100 px-6 py-2 rounded"
        >
          Donate Now
        </Link>
        <Link
          to="/contact"
          className="btn border border-white text-white hover:bg-white hover:text-teal-600 px-6 py-2 rounded"
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
