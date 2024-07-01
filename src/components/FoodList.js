import React, { useState, useEffect, useContext } from "react";
import { getFoods } from "../services/api";
import { AuthContext } from "../context/AuthContext";
import "../styles/FoodList.css";

const FoodList = () => {
  const [foods, setFoods] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchFoods = async () => {
      const foodData = await getFoods();
      setFoods(foodData);
    };
    fetchFoods();
  }, []);

  const handleAddToCart = (food) => {
    if (user) {
      let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      const itemIndex = cartItems.findIndex((item) => item._id === food._id);

      if (itemIndex > -1) {
        cartItems[itemIndex].quantity += 1;
      } else {
        cartItems.push({ ...food, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(cartItems));
      console.log("Added to cart:", cartItems);
    } else {
      alert("You need to be logged in to add items to the cart.");
    }
  };

  return (
    <div className="food-list-container">
      <h2>Available Foods</h2>
      <div className="food-list">
        {foods.map((food) => (
          <div key={food._id} className="food-item">
            <img src={food.imageUrl} alt={food.name} />
            <h3>{food.name}</h3>
            <p>{food.description}</p>
            <p>${food.price.toFixed(2)}</p>
            <button onClick={() => handleAddToCart(food)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
