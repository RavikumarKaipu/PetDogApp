import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import Cookies from "js-cookie";

import "./index.css";
import ForgotPassword from "../ForgotPassword";

const API_BASE = "https://pet-dog-backend.vercel.app"; 

const LoginForm = ({ onLoginSuccess, onClose, initialMode = "login" }) => {
  const [isSignup, setIsSignup] = useState(initialMode === "signup");
  const [forgotMode, setForgotMode] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [signupData, setSignupData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsSignup(initialMode === "signup");
    setForgotMode(false);
  }, [initialMode]);

  const handleLoginChange = (e) =>
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value.trimStart(),
    });

  const handleSignupChange = (e) =>
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value.trimStart(),
    });


  const handleLogin = async (e) => {
    e.preventDefault();
    const { username, password } = loginData;

    if (!username || !password) {
      setErrors({ loginGeneral: "⚠️ Both fields are required." });
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
      setForgotMode(false);
      onClose?.();
    } catch (err) {
      setErrors({
        loginGeneral: err.response?.data?.message || "❌ Invalid credentials.",
      });
    } finally {
      setLoading(false);
    }
  };


  const handleSignup = async (e) => {
    e.preventDefault();
    const { fullName, username, email, password, confirmPassword } = signupData;

    if (!fullName || !username || !email || !password || !confirmPassword) {
      setErrors({ signupGeneral: "⚠️ Please fill all fields." });
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
      setForgotMode(false);
    } catch (err) {
      setErrors({
        signupGeneral: err.response?.data?.error || "❌ Signup failed",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setForgotMode(false);
    setIsSignup(false);
    onClose?.();
  };

  return (
    <div className={`login-card ${isSignup ? "rotate-card" : ""}`}>
      {/* Close Button */}
      <button type="button" className="close-btn" onClick={handleClose}>
        <IoMdClose size={22} />
      </button>

      {/* If forgotMode → render full ForgotPassword flow */}
      {forgotMode ? (
        <ForgotPassword onBack={() => setForgotMode(false)} />
      ) : (
        <>
          {/* Login Face */}
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
              </div>
              <div className="input-group password-group">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  placeholder="Password"
                />
                <span
                  className="eye-icon"
                  onClick={() => setShowPassword((p) => !p)}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
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
            <p className="switch-forgot">
              <span onClick={() => setForgotMode(true)}>Forgot Password?</span>
            </p>
          </div>

          {/* Signup Face (flip) */}
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
              <div className="input-group">
                <input
                  type="password"
                  name="password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  placeholder="Password"
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  name="confirmPassword"
                  value={signupData.confirmPassword}
                  onChange={handleSignupChange}
                  placeholder="Confirm Password"
                />
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
        </>
      )}
    </div>
  );
};

export default LoginForm;
