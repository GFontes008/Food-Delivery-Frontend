import React, { useState, useEffect } from "react";
import { getFoods } from "../services/api";
import "../styles/FoodList.css";

const FoodList = ({ onAddToCart }) => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const foodsData = await getFoods();
        setFoods(foodsData);
      } catch (error) {
        console.error("Error fetching foods:", error);
      }
    };

    fetchFoods();
  }, []);

  return (
    <div className="food-list">
      <h2>Food List</h2>
      <div className="foodlist-container">
        {foods.map((food) => (
          <div key={food._id} className="food-item">
            <h3>{food.name}</h3>
            <p>{food.description}</p>
            <p className="price">${food.price.toFixed(2)}</p>
            <button onClick={() => onAddToCart(food)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
