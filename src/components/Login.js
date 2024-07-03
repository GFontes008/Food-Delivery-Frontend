import React, { useContext, useState } from "react";
import { login } from "../services/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";
import motobike from "../assets/images/motobike.jpg";

const LoginPage = () => {
  const { login: authLogin } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const { token } = await login(formData);
      authLogin(token);
      navigate("/");
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-logo">
          <img src={motobike} alt="Your Company Logo" />
          <h1>Food Delivery</h1>
        </div>
      </div>
      <div className="login-right">
        <div className="login-form">
          <h2>Members Log in</h2>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={onChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={onChange}
                required
              />
            </div>
            <div className="form-options">
              <label>
                <input type="checkbox" name="remember" /> Remember Me
              </label>
              <a href="/forgot-password">Forgot your password?</a>
            </div>
            <button type="submit" className="login-button">
              Log In
            </button>
          </form>
          <div className="register-link">
            Don't have an account? <Link to="/register">Register here</Link> {}
          </div>
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
