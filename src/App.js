import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./components/Home";
import FoodList from "./components/FoodList";
import Cart from "./components/Cart";
import Orders from "./components/Orders";
import OrderDetails from "./components/OrderDetails";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Login from "./components/Login";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";
import NotFoundPage from "./components/NotFoundPage";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/foods" element={<FoodList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/order/:orderId" element={<OrderDetails />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
