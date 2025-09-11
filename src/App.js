import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Pages/Home";
import Services from "./components/Pages/Services";
import Programs from "./components/Pages/Programs";
import Gallery from "./components/Pages/Gallery";
import Reviews from "./components/Pages/Reviews";
import Pricing from "./components/Pages/Pricing";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import LoginForm from "./components/Login";
import "./App.css";
import ProtectedRoute from "./components/ProtectedPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      {isLoggedIn && <Navbar onLogout={handleLogout} />}
      <Routes>
        {/* If logged in → go to "/", else → show login */}
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/" />
            ) : (
              <LoginForm onLoginSuccess={() => setIsLoggedIn(true)} />
            )
          }
        />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <>
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
                <Footer />
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
