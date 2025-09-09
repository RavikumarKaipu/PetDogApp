// App.js
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages as sections
import Home from "./components/Pages/Home";
import Services from "./components/Pages/Services";
import Programs from "./components/Pages/Programs";
import Gallery from "./components/Pages/Gallery";
import Reviews from "./components/Pages/Reviews";
import Pricing from "./components/Pages/Pricing";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";

import "./App.css";

function App() {
  return (
    <>
      <div >
            <Navbar/>
        <section id="home">
          <Home />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="programs">
          <Programs />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="reviews">
          <Reviews />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
