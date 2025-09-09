import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import "./index.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSubmitError, setShowSubmitError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const onSubmitSuccess = ({ token, username, isAdmin, email }) => {
    Cookies.set("jwt_token", token, { expires: 30 }); // ✅ Fix
    localStorage.setItem("user", username || "");
    localStorage.setItem("userEmail", email);
    localStorage.setItem("isAdmin", isAdmin ? "true" : "false");
    navigate("/");
  };

  const onSubmitFailure = (msg) => {
    setShowSubmitError(true);
    setErrorMsg(msg);
  };

  const submitForm = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://bookmanage-backend.vercel.app/api/login', {
        username,
        password,
      });

      if (response.status === 200) {
        onSubmitSuccess(response.data);
      } else {
        onSubmitFailure("Invalid credentials");
      }
    } catch (error) {
      if (error.response) {
        const message = error.response.data?.error || "Invalid credentials";
        onSubmitFailure(message);
      } else {
        onSubmitFailure("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="login-form-container">
      <form className="form-container" onSubmit={submitForm}>
        <h2>Login</h2>

        <div className="input-container">
          <label className="input-label" htmlFor="username">USERNAME</label>
          <input
            type="text"
            id="username"
            className="username-input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="input-container">
          <label className="input-label" htmlFor="password">PASSWORD</label>
          <input
            type="password"
            id="password"
            className="password-input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-button">Login</button>

        {showSubmitError && <p className="error-message">*{errorMsg}</p>}

        <p className="forgot-password"><Link to="/forgotPassword">Forgot Password?</Link></p>
        <p className="or-text">or</p>
        <p className="no-account-text">You don't have an account?</p>
        <Link to="/signup"><button type="button" className="signup-button">Sign Up</button></Link>
      </form>
    </div>
  );
};

export default LoginForm;
