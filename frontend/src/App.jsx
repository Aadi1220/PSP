import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Payment from "./pages/Payment"
// import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import WebDev from './pages/services/WebDev';
import Graphic from './pages/services/Graphic';
import DigitalMarketing from './pages/services/DigitalMarketing';
import AppWrapper from "./components/AppWrapper";
import TermsConditions from './components/legal/TermsConditions';
import RefundPolicy from './components/legal/RefundPolicy';
import PrivacyPolicy from './components/legal/PrivacyPolicy';


export default function App() {
  return (
    <Router>
      <AppWrapper>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/web-development" element={<WebDev/>} />
            <Route path="/services/graphics-media" element={<Graphic/>} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing/>} />
            <Route path="/about" element={<About />} />
            <Route path="/payment" element={<Payment />} />
            {/* <Route path="/clients" element={<Clients />} /> */}         
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
      </AppWrapper>
    </Router>
  );
}
