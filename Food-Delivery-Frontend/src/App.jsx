import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFoundPage';
import FoodList from './pages/FoodListPage';
import Cart from './pages/CartPage';
import Login from './components/Login';
import Register from './components/Register';


const App =() => {
  

  return (
    <Router> 

      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='*' element={<NotFound />} />
        <Route path='food' element={<FoodList />} />
        <Route path='cart' element={<Cart />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>

      <br />
      <Footer />
    </Router>
  );
};

export default App;
