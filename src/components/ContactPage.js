import React, { useState } from "react";
import { submitContactForm } from "../services/api";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import "../styles/ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await submitContactForm(formData);
      setMessage(response.message);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setMessage("Failed to send contact information. Please try again later.");
    }
  };

  return (
    <div className="container">
      <div className="contact-form">
        <h2>Reach out to us!</h2>
        <h5>
          Our customer care team is here to provide you with all the support you
          need. Whether you have a question or want to get in touch, just fill
          out the form below.
        </h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
        {message && <p>{message}</p>}
      </div>
      <div className="customer-care">
        <h2>Customer Care</h2>
        <h5>
          Our customer care team is available to answer your questions and
          provide support. Whether you need help with our products or just have
          a general inquiry, our friendly staff is here to give you the best
          service.
        </h5>
        <div className="team-member">
          <p>Zeina is our Customer Service Manager.</p>
          <div className="ways">
            <a href="mailto:zeina@delivery.com">
              <MdEmail />
            </a>
            <a href="tel:">
              <BsFillTelephoneFill />
            </a>
          </div>
        </div>
        <div className="team-member">
          <p>Ayoub is our Customer Service Representative.</p>
          <div className="ways">
            <a href="mailto:ayoub@delivery.com">
              <MdEmail />
            </a>
            <a href="tel:">
              <BsFillTelephoneFill />
            </a>
          </div>
        </div>
        <div className="team-member">
          <p>Guilherme is our Customer Service Representative.</p>
          <div className="ways">
            <a href="mailto:guilherme@delivery.com">
              <MdEmail />
            </a>
            <a href="tel:">
              <BsFillTelephoneFill />
            </a>
          </div>
        </div>
        <div className="ways">
          <p>Other ways to connect:</p>
          <a href="https://www.facebook.com">
            <FaFacebook />
          </a>
          <a href="https://twitter.com">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
