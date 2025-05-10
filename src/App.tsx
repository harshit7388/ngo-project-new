import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CSR from './pages/CSR';
import Donate from './pages/Donate';
import BoardOfTrustees from './pages/BoardOfTrustees';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import CancellationRefundPolicy from './pages/CancellationAndRefundPolicy';

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
          <Route path="/board-of-trustees" element={<BoardOfTrustees />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/cancellation-and-refund-policy" element={<CancellationRefundPolicy />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;