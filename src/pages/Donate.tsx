import { Heart } from 'lucide-react';
import donatenow from '../assets/donatenow.jpg';

// Declare Razorpay on window
declare global {
  interface Window {
    Razorpay: any;
  }
}

const Donate = () => {

  

  const openRazorpay = () => {
    window.location.href = 'https://rzp.io/r/k4DcBJhF'; // your payment page link
  };
  

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url(${donatenow})`,
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}
      >
        <div className="container text-white">
          <h1 className="text-5xl font-bold mb-4">Make a Difference</h1>
          <p className="text-xl max-w-2xl">Your contribution helps us continue our mission of empowering communities and transforming lives.</p>
        </div>
      </section>

      {/* Unified Donation Banner */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-blue-500 text-white text-center">
        <div className="container">
          <Heart className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-4">Every Rupee Counts</h2>
          <p className="text-lg mb-6">Support education, healthcare, and livelihoods. One small step from you can bring a big change to someone’s life.</p>
          <button
            onClick={openRazorpay}
            className="bg-white text-teal-700 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
          >
            DONATE NOW
          </button>
        </div>
      </section>
    </div>
  );
};

export default Donate;