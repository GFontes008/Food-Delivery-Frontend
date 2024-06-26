import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "../src/components/Home";
import FoodList from "../src/components/FoodList";
import Cart from "../src/components/Cart";
import Orders from "../src/components/Orders";
import OrderDetails from "../src/components/OrderDetails";
import Header from "../src/components/Header";
import Register from "../src/components/Register";
import Login from "../src/components/Login";
import "../src/App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/foods" element={<FoodList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/order/:orderId" element={<OrderDetails />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
