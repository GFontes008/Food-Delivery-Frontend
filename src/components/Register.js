import React, { useState } from "react";
import { register } from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await register(formData);
      console.log(`User registered successfully: ${formData.email}`);
      alert("User registered successfully!");
      navigate("/login");
    } catch (err) {
      console.error(
        "Registration failed:",
        err.response ? err.response.data : err.message
      );
      setError(
        err.response && err.response.data
          ? err.response.data.msg
          : "Registration failed. Please try again."
      );
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={onChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={onChange}
          placeholder="Address"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={onChange}
          placeholder="Password"
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
