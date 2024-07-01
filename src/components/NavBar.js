import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { AuthContext } from "../context/AuthContext";
import "../styles/NavBar.css";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/foods"
              style={{ color: "white", textDecoration: "none" }}
            >
              Foods
            </Link>
          </li>
          <li>
            <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
              Cart
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              style={{ color: "white", textDecoration: "none" }}
            >
              Orders
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{ color: "white", textDecoration: "none" }}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="auth-section">
          {user ? (
            <>
              <span>Welcome {user.name}</span>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="auth-icon">
                <RiAccountPinCircleLine />
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;