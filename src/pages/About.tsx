import { Link } from "react-router-dom";
import {
  Target,
  Lightbulb,
  Compass,
  Globe,
  Users,
  BookOpen,
  Leaf,
  Stethoscope,
  Users2,
  Utensils,
} from "lucide-react";
import "../styles/styles.css";
import education2 from "../assets/education2.jpg";
import empowerment4 from "../assets/empowerment4.png";
import health2 from "../assets/health2.jpg";
import sustain2 from "../assets/sustain2.jpg";
import aboutus from "../assets/aboutus.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [aboutus, education2, health2];

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          autoplay={true}
          autoplaySpeed={3000}
          slidesToShow={1}
          slidesToScroll={1}
          arrows={false}
        >
          {images.map((img, i) => (
            <div key={i}>
              <div
                className="h-[400px] bg-cover bg-center flex items-center"
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundBlendMode: "overlay",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
              >
                <div className="container text-white">
                  <h1 className="text-5xl font-bold mb-4 aboutpageheading">
                    About Us
                  </h1>
                  <p className="text-xl max-w-2xl">
                    Kalyan Ke Kadam Foundation is dedicated to uplifting
                    underprivileged communities. <br /> <br />
                    Registered in Gurgaon, Haryana, the foundation focuses on
                    children and women.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          {/* 🔹 Description box above Vision & Mission */}
          <div className="bg-teal-50 p-6 rounded-lg shadow-md mb-8 text-center">
            {/* <h2 className="text-2xl md:text-3xl font-bold mb-4 text-teal-700">
        Our Mission & Vision
      </h2> */}
            <p className="text-gray-700 leading-relaxed text-sm md:text-base max-w-3xl mx-auto">
              At <b>Kalyan Ke Kadam Foundation</b>, we envision a nation where
              no child goes hungry, no woman is left behind, and no community is
              denied the right to education, healthcare, and dignity.
            </p>
          </div>

          {/* 🔹 Two-column Vision & Mission cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-teal-600">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                To achieve holistic development of marginalized communities
                across India, creating an equitable and inclusive society where
                opportunities are accessible to all.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-teal-600">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                To strengthen the social fabric of India through education,
                nutrition, healthcare, women’s empowerment, and
                sustainability—impacting millions of lives with compassion and
                accountability.
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

          {/* First row with 3 objectives */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
            {[
              {
                icon: <BookOpen className="w-10 h-10 text-teal-600 mb-4" />,
                title: "Promote Education ",
                desc: "Promote Education by supporting schools, literacy initiatives, and access to quality learning for disadvantaged children.",
              },
              {
                icon: <Stethoscope className="w-10 h-10 text-teal-600 mb-4" />,
                title: "Strengthen Healthcare",
                desc: "Strengthen Healthcare by equipping rural hospitals and clinics with essential medical equipment and organizing health camps.",
              },
              {
                icon: <Users2 className="w-10 h-10 text-teal-600 mb-4" />,
                title: "Empower Women & Youth",
                desc: "Empower Women & Youth with skill-building and vocational training for financial independence.",
              },
            ].map((obj, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                {obj.icon}
                <h3 className="text-lg font-semibold mb-2">{obj.title}</h3>
                <p className="text-gray-600 text-sm">{obj.desc}</p>
              </div>
            ))}
          </div>

          {/* Second row with 2 objectives centered */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {[
              {
                icon: <Utensils className="w-10 h-10 text-teal-600 mb-4" />,
                title: "Eradicate Hunger & Malnutrition ",
                desc: "Eradicate Hunger & Malnutrition through food security programs, ration kit distributions, and nutrition awareness.",
              },
              {
                icon: <Leaf className="w-10 h-10 text-teal-600 mb-4" />,
                title: "Advance Sustainability",
                desc: "Advance Sustainability through environmental awareness, green practices, and resilient communities.",
              },
            ].map((obj, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md text-center w-full sm:w-80"
              >
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
                desc: "School support programs, after-school learning, scholarships, and mentorship for children",
                img: education2,
              },
              {
                title: "Healthcare",
                desc: "Supplying medical equipment to rural hospitals, running preventive health camps, and awareness programs",
                img: health2,
              },
              {
                title: "Women’s Empowerment",
                desc: "Vocational training, entrepreneurship development, and self-help groups",
                img: empowerment4,
              },
              {
                title: "Nutrition & Food Security ",
                desc: "Large-scale ration kit distribution programs reaching thousands of families across India",
                img: sustain2,
              },
              {
                title: "Environmental Sustainability ",
                desc: "Campaigns on conservation, clean energy, and eco-friendly practices",
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
            Our Values{" "}
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row justify-around items-center gap-8">
              {[
                {
                  title: "Human Dignity ",
                  desc: "Every life is precious; every voice matters",
                },
                {
                  title: "Equity & Inclusion ",
                  desc: "Breaking down barriers of caste, gender, geography, and poverty.",
                },
                {
                  title: "Transparency & Trust ",
                  desc: "Delivering measurable, accountable change.",
                },
                {
                  title: "Collaboration ",
                  desc: "Building strong partnerships with governments, corporates, NGOs, and local communities.",
                },
                {
                  title: "Sustainability ",
                  desc: "Creating long-lasting impact that transforms generations.",
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
      {/* <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Future Perspectives
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Expanding Our Reach
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                We aim to expand our presence to 50+ new locations in the next
                five years, bringing hope and opportunities to more communities
                in need.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Innovation in Programs
              </h3>
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
                Building strategic partnerships with organizations and
                institutions to amplify our impact and reach more beneficiaries.
              </p>
            </div>
          </div>
        </div>
      </section> */}

              {/* Who We Serve & SDGs Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Who We Serve */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-black mb-8 relative inline-block">
              Who We Serve
              <span className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-20 h-1 bg-teal-600 rounded-full"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Children",
                  desc: "From rural villages and urban slums who are deprived of education and nutrition.",
                },
                {
                  title: "Women",
                  desc: "From marginalized and vulnerable communities, supporting their journey toward empowerment.",
                },
                {
                  title: "Families",
                  desc: "Across India who face daily struggles with poverty, hunger, and access to healthcare.",
                },
                {
                  title: "Communities",
                  desc: "Entire villages where interventions in education, healthcare, and livelihood create a ripple effect of change.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-md p-6 border-l-4 border-teal-600"
                >
                  <h3 className="text-lg font-semibold text-teal-600 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 text-center mt-8 max-w-3xl mx-auto text-base leading-relaxed">
              At <span className="font-semibold">Kalyan Ke Kadam Foundation</span>, our programs are not just
              local interventions — they are part of a larger global mission to achieve
              the <span className="font-semibold">United Nations Sustainable Development Goals (SDGs)</span>. By empowering
              communities across India, we are directly contributing to multiple SDGs,
              ensuring that our work creates lasting, measurable, and internationally
              recognized impact.
            </p>
          </div>

          {/* How We Contribute to SDGs */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-black mb-12 relative inline-block">
              How We Contribute to SDGs
              <span className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-20 h-1 bg-teal-600 rounded-full"></span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "SDG 1: No Poverty", desc: "Through ration kit distribution programs and livelihood support, we uplift families living in poverty, providing both immediate relief and pathways toward long-term financial independence." },
                { title: "SDG 2: Zero Hunger", desc: "Our large-scale food security initiatives combat malnutrition by ensuring vulnerable communities have consistent access to nutritious meals." },
                { title: "SDG 3: Good Health & Well-Being", desc: "By providing healthcare equipment to rural hospitals, organizing health camps, and nutrition drives, we strengthen community health systems and promote preventive care." },
                { title: "SDG 4: Quality Education", desc: "We support schools with resources, after-school programs, and literacy initiatives to ensure every child — especially girls — has access to quality education." },
                { title: "SDG 5: Gender Equality", desc: "Our women’s empowerment programs equip women with vocational training, entrepreneurship skills, and leadership opportunities, bridging the gender gap in marginalized communities." },
                { title: "SDG 8: Decent Work & Economic Growth", desc: "Through skill-building and vocational training, we empower youth and women to achieve sustainable livelihoods, reducing unemployment and underemployment." },
                { title: "SDG 10: Reduced Inequalities", desc: "We work to uplift marginalized groups — rural families, slum dwellers, women, and children — ensuring inclusion and equity in access to education, healthcare, and resources." },
                { title: "SDG 12: Responsible Consumption & Production", desc: "Our programs emphasize sustainability — from promoting eco-friendly practices in communities to distributing resources responsibly and efficiently." },
                { title: "SDG 13: Climate Action", desc: "We run environmental awareness campaigns on conservation, waste reduction, and green practices, encouraging communities to adopt climate-resilient lifestyles." },
                { title: "SDG 17: Partnerships for the Goals", desc: "Collaboration is at the heart of our work. By partnering with corporates, government bodies, civil society, and global organizations, we maximize our reach and collective impact toward SDGs." },
              ].map((goal, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  {/* Placeholder for SDG Icon */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-100 text-teal-600 font-bold mb-4">
                    {goal.title.split(" ")[1]}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-teal-600">{goal.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{goal.desc}</p>
                </div>
              ))}
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
            Together, we can create lasting positive change in communities
            across the world.
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
