import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./index.css";

const LoginForm = ({onLoginSuccess}) => {
  const [isSignup, setIsSignup] = useState(false);
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

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleSignupPassword = () => setShowSignupPassword(!showSignupPassword);
  const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const { fullName, username, email, password, confirmPassword } = signupData;

    if (!fullName || !username || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    localStorage.setItem(
      "user",
      JSON.stringify({ fullName, username, email, password })
    );

    alert("Signup successful! Please login.");
    setIsSignup(false);
    setSignupData({ fullName: "", username: "", email: "", password: "", confirmPassword: "" });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = loginData;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
      alert("Login successful!");
      onLoginSuccess();
      navigate("/");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div
      className="login-main-container"
      style={{ backgroundImage: `url("images/pexels-apasaric-325185.jpg")` }}
    >
      <div className={`login-card ${isSignup ? "rotate-card" : ""}`}>
        {/* Login Form */}
        <div className="card-face card-front login-style">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <input
                type="text"
                name="username"
                value={loginData.username}
                onChange={handleLoginChange}
                placeholder="Username"
                required
              />
            </div>
            <div className="input-group password-group">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                placeholder="Password"
                required
              />
              <span className="eye-icon" onClick={togglePassword}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <button type="submit" className="login-btn">Login</button>
          </form>
          <h5>or</h5>
          <p className="switch-signup">
            Don’t have an account?{" "}
            <span className="sign-name" onClick={() => setIsSignup(true)}>Sign Up</span>
          </p>
        </div>

        {/* Signup Form */}
        <div className="card-face card-back signup-style">
          <h1>Create Account</h1>
          <form onSubmit={handleSignup}>
            <div className="input-group">
              <input
                type="text"
                name="fullName"
                value={signupData.fullName}
                onChange={handleSignupChange}
                placeholder="Full Name"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="username"
                value={signupData.username}
                onChange={handleSignupChange}
                placeholder="Username"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                name="email"
                value={signupData.email}
                onChange={handleSignupChange}
                placeholder="Email"
                required
              />
            </div>
            <div className="input-group password-group">
              <input
                type={showSignupPassword ? "text" : "password"}
                name="password"
                value={signupData.password}
                onChange={handleSignupChange}
                placeholder="Password"
                required
              />
              <span className="eye-icon" onClick={toggleSignupPassword}>
                {showSignupPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="input-group password-group">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={signupData.confirmPassword}
                onChange={handleSignupChange}
                placeholder="Confirm Password"
                required
              />
              <span className="eye-icon" onClick={toggleConfirmPassword}>
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <button type="submit" className="signup-btn">Sign Up</button>
          </form>
          <p className="switch-signup">
            Already have an account?{" "}
            <span onClick={() => setIsSignup(false)}>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
