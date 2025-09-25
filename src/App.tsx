import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CSR from "./pages/CSR";
import Donate from "./pages/Donate";
import BoardOfTrustees from "./pages/BoardOfTrustees";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import CancellationRefundPolicy from "./pages/CancellationAndRefundPolicy";
import Programs from "./pages/Programs";
import Reach from "./pages/Reach";
import Impact from "./pages/Impact";
import Partners from "./pages/Partners";
import ImpactStories from "./pages/ImpactStories";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/csr" element={<CSR />} />
          <Route path="/donate" element={<Donate />} />
          {/* <Route path="/board-of-trustees" element={<BoardOfTrustees />} /> */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          {/* <Route path="/cancellation-and-refund-policy" element={<CancellationRefundPolicy />} /> */}
          <Route path="/programs" element={<Programs />} />
          <Route path="/reach" element={<Reach />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/impactstories" element={<ImpactStories />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
