import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./components/Home";
import FoodList from "./components/FoodList";
import Cart from "./components/Cart";
import Orders from "./components/Orders";
import Register from "./components/Register";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import OrderDetails from "./components/OrderDetails";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (food) => {
    const existingItem = cartItems.find((item) => item._id === food._id);
    let updatedCartItems;
    if (existingItem) {
      updatedCartItems = cartItems.map((item) =>
        item._id === food._id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCartItems = [...cartItems, { ...food, quantity: 1 }];
    }
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/foods"
            element={<FoodList onAddToCart={handleAddToCart} />}
          />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/order/:orderId" element={<OrderDetails />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
