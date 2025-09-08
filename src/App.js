import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Services from "./components/Pages/Services";
import Programs from "./components/Pages/Programs";
import Gallery from "./components/Pages/Gallery";
import Reviews from "./components/Pages/Reviews";
import Pricing from "./components/Pages/Pricing";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";

import './App.css'
import Navbar from "./components/Navbar";  
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />   
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
