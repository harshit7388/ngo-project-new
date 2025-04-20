import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CSR from './pages/CSR';
import Donate from './pages/Donate';
import BoardOfTrustees from './pages/BoardOfTrustees';

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
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;