import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="homepage">
      <aside className="title">
        <h1>Welcome {user ? user.name : "Food Lover"}!</h1>
      </aside>
      <div className="content">
        <div className="foodlist">
          <button>
            <Link to="/foods" style={{ textDecoration: "none" }}>
              Food List
            </Link>
          </button>
        </div>
        <div className="cart">
          <button>
            <Link to="/cart" style={{ textDecoration: "none" }}>
              Cart
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
