import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import Cookies from "js-cookie";
import "./index.css";

const API_BASE = "https://pet-dog-backend.vercel.app";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const LoginForm = ({ onLoginSuccess, onClose, initialMode = "login" }) => {
  const [isSignup, setIsSignup] = useState(initialMode === "signup");
  const [showPassword, setShowPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [signupData, setSignupData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsSignup(initialMode === "signup");
  }, [initialMode]);

  // ----------- Toggle Passwords ----------
  const togglePassword = () => setShowPassword((p) => !p);
  const toggleSignupPassword = () => setShowSignupPassword((p) => !p);
  const toggleConfirmPassword = () => setShowConfirmPassword((p) => !p);

  // ----------- Input Handlers ----------
  const handleSignupChange = (e) =>
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value.trimStart(),
    });

  const handleLoginChange = (e) =>
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value.trimStart(),
    });

  // ----------- Signup ----------
  const handleSignup = async (e) => {
    e.preventDefault();
    const { fullName, username, email, password, confirmPassword } = signupData;

    if (!fullName || !username || !email || !password || !confirmPassword) {
      setErrors({ signupGeneral: "⚠️ Please fill all fields." });
      return;
    }
    if (!passwordRegex.test(password)) {
      setErrors({
        signupGeneral:
          "⚠️ Password must be 8+ chars, include uppercase, lowercase, number, and special char.",
      });
      return;
    }
    if (password !== confirmPassword) {
      setErrors({ signupGeneral: "⚠️ Passwords do not match." });
      return;
    }

    try {
      setLoading(true);
      setErrors({});
      const { data } = await axios.post(`${API_BASE}/api/signup`, {
        fullName,
        username,
        email,
        password,
      });

      if (data.token) {
        Cookies.set("token", data.token, {
          expires: 7,
          secure: true,
          sameSite: "strict",
        });
      }

      alert("✅ Signup successful! Please login.");
      setSignupData({
        fullName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setIsSignup(false);
    } catch (err) {
      setErrors({
        signupGeneral: err.response?.data?.error || "❌ Signup failed",
      });
    } finally {
      setLoading(false);
    }
  };

  // ----------- Login ----------
  const handleLogin = async (e) => {
    e.preventDefault();
    const { username, password } = loginData;

    let newErrors = {};
    if (!username) newErrors.username = "⚠️ Username is required.";
    if (!password) newErrors.password = "⚠️ Password is required.";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);
      setErrors({});
      const { data } = await axios.post(`${API_BASE}/api/login`, {
        username,
        password,
      });

      Cookies.set("token", data.token, {
        expires: 7,
        secure: true,
        sameSite: "strict",
      });

      alert("✅ Login successful!");
      onLoginSuccess?.(data);
      onClose?.(); // close modal after success
    } catch (err) {
      setErrors({
        loginGeneral:
          err.response?.data?.message || "❌ Invalid credentials.",
      });
    } finally {
      setLoading(false);
    }
  };

  // ----------- UI ----------
  return (
    <div className={`login-card ${isSignup ? "rotate-card" : ""}`}>
      {/* Close Button */}
      <button type="button" className="close-btn" onClick={onClose}>
        <IoMdClose size={22} />
      </button>

      {/* Login Form */}
      <div className="card-face card-front login-style">
        <h1>Welcome Back</h1>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="text"
              name="username"
              value={loginData.username}
              onChange={handleLoginChange}
              placeholder="Username"
            />
            {errors.username && <p className="error-msg">{errors.username}</p>}
          </div>
          <div className="input-group password-group">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
              placeholder="Password"
            />
            <span className="eye-icon" onClick={togglePassword}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
            {errors.password && <p className="error-msg">{errors.password}</p>}
          </div>
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
          {errors.loginGeneral && (
            <p className="error-msg">{errors.loginGeneral}</p>
          )}
        </form>
        <p className="switch-signup">
          Don’t have an account?{" "}
          <span onClick={() => setIsSignup(true)}>Sign Up</span>
        </p>
      </div>

      {/* Signup Form */}
      <div className="card-face card-back-log signup-style">
        <h1>Create Account</h1>
        <form onSubmit={handleSignup}>
          <div className="input-group">
            <input
              type="text"
              name="fullName"
              value={signupData.fullName}
              onChange={handleSignupChange}
              placeholder="Full Name"
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="username"
              value={signupData.username}
              onChange={handleSignupChange}
              placeholder="Username"
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              value={signupData.email}
              onChange={handleSignupChange}
              placeholder="Email"
            />
          </div>
          <div className="input-group password-group">
            <input
              type={showSignupPassword ? "text" : "password"}
              name="password"
              value={signupData.password}
              onChange={handleSignupChange}
              placeholder="Password"
            />
            <span className="eye-icon" onClick={toggleSignupPassword}>
              {showSignupPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <div className="input-group password-group">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={signupData.confirmPassword}
              onChange={handleSignupChange}
              placeholder="Confirm Password"
            />
            <span className="eye-icon" onClick={toggleConfirmPassword}>
              {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <button type="submit" className="signup-btn" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </button>
          {errors.signupGeneral && (
            <p className="error-msg">{errors.signupGeneral}</p>
          )}
        </form>
        <p className="switch-signup">
          Already have an account?{" "}
          <span onClick={() => setIsSignup(false)}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
