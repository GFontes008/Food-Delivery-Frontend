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
              <img src="/path/to/your/foodlist/image.jpg" alt="Food List" />
            </Link>
          </button>
        </div>
        <div className="cart" style={{ textDecoration: "none" }}>
          <button>
            <Link to="/cart">
              <img src="/path/to/your/cart/image.jpg" alt="Cart" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
