import React, { useState } from "react";
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
import "./App.css";
import LoginForm from "./components/Login";
import { Modal, Toast, ToastContainer } from "react-bootstrap";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [formMode, setFormMode] = useState("login");
  const [showToast, setShowToast] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowToast(true); // 👈 trigger toast on logout
  };

  return (
    <>
      <Navbar
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        onShowLogin={() => {
          setFormMode("login");
          setShowLogin(true);
        }}
        onShowSignup={() => {
          setFormMode("signup");
          setShowLogin(true);
        }}
      />

      {/* 🔹 Login/Signup Modal */}
      <Modal
        show={showLogin}
        onHide={() => {
          setShowLogin(false);
          setFormMode("login");
        }}
        centered
        size="lg"
        contentClassName="custom-modal-content"
        dialogClassName="custom-modal-dialog"
        backdropClassName="custom-modal-backdrop"
      >
        <Modal.Body>
          <LoginForm
            initialMode={formMode}
            onLoginSuccess={(data) => {
              setIsLoggedIn(true);
              setShowLogin(false);
              setFormMode("login");
            }}
            onClose={() => {
              setShowLogin(false);
              setFormMode("login");
            }}
          />
        </Modal.Body>
      </Modal>

      {/* 🔹 Toast Notification */}
      <ToastContainer position="top-center" className="mt-3">
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
          bg="light"
        >
          <Toast.Body className="text-success fw-bold">
            ✅ You have been logged out successfully.
          </Toast.Body>
        </Toast>
      </ToastContainer>

      {/* 🔹 Main Sections */}
      <section id="home"><Home /></section>
      <section id="services"><Services /></section>
      <section id="programs"><Programs /></section>
      <section id="gallery"><Gallery /></section>
      <section id="reviews"><Reviews /></section>
      <section id="pricing"><Pricing /></section>
      <section id="about"><About /></section>
      <section id="contact"><Contact /></section>

      <Footer />
    </>
  );
}

export default App;
