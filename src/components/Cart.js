import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { createOrder } from "../services/api";
import "../styles/Cart.css";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(items);
    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      10
    );
    setTotalPrice(total);
  }, []);

  const handleCheckout = async () => {
    if (!user) {
      alert("You need to be logged in to place an order.");
      return;
    }
    const orderData = {
      items: cartItems.map((item) => ({
        food: item._id,
        quantity: item.quantity,
      })),
      totalPrice,
    };
    try {
      const order = await createOrder(orderData, user.token);
      console.log("Order created:", order);
      setCartItems([]);
      setTotalPrice(0);
      localStorage.removeItem("cart");
      setOrderConfirmed(true);
    } catch (err) {
      console.error("Error creating order:", err);
    }
  };

  const handleDelete = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item._id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    const total = updatedCartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item._id}>
                <div>
                  {item.name} - {item.quantity} x ${item.price.toFixed(2)}
                </div>
                <button onClick={() => handleDelete(item._id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button onClick={handleCheckout}>Checkout</button>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
      {orderConfirmed && <p>Your order is on the way!</p>}
    </div>
  );
};

export default Cart;
