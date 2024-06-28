import React from 'react';
import motobike from '../assets/images/motobike.jpg';

const LoginPage = () => {
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
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="form-options">
              <label>
                <input type="checkbox" name="remember" /> Remember Me
              </label>
              <a href="/forgot-password">Forgot your password?</a>
            </div>
            <button type="submit" className="login-button">Log In</button>
          </form>
          <div className="register-link">
            Don't have an account? <a href="/register">Register here</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
