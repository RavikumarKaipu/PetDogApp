import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./index.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsTyping(e.target.value.length > 0);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const switchToSignup = () => {
    setIsSignup(true);
    setTimeout(() => setIsSignup(false), 800);
  };

  return (
    <div
      className="login-main-container"
      style={{ backgroundImage: `url("images/petExperience.png")` }}
    >
      <div className={`login-card ${isSignup ? "rotate-card" : ""}`}>
        {/* Dog image container */}
        <div className="dog-container">
          <img
            src="/images/dog-face.png" // <-- put your transparent dog PNG here
            alt="Dog"
            className="dog-img"
          />
          {/* eyelids overlay for animation */}
          <div className={`dog-eye left-eye ${isTyping ? "closed" : ""} ${showPassword ? "peek" : ""}`}></div>
          <div className={`dog-eye right-eye ${isTyping ? "closed" : ""}`}></div>
        </div>

        <div className="login-container">
          <h1>{isSignup ? "Sign Up" : "Login"}</h1>

          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-group password-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <span className="eye-icon" onClick={togglePassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button className="login-btn">{isSignup ? "Sign Up" : "Login"}</button>

          {!isSignup && (
            <p className="switch-signup">
              Don't have an account? <span onClick={switchToSignup}>Sign Up</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
