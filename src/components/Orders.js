import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getUserOrders } from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles/Orders.css";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      if (user) {
        try {
          const ordersData = await getUserOrders(user.token);
          setOrders(ordersData);
        } catch (error) {
          console.error("Error fetching orders:", error);
          if (error.response && error.response.status === 401) {
            navigate("/login");
          }
        }
      }
    };

    fetchOrders();
  }, [user, navigate]);

  if (!user) {
    return <p>Please log in to check your orders.</p>;
  }

  return (
    <div className="orders-container">
      <h2>Your Orders</h2>
      {orders.length > 0 ? (
        <ul>
          {orders.map((order) => (
            <li key={order._id} onClick={() => navigate(`/order/${order._id}`)}>
              Order #{order._id} - Total: ${order.totalPrice.toFixed(2)}
            </li>
          ))}
        </ul>
      ) : (
        <p>You have no orders.</p>
      )}
    </div>
  );
};

export default Orders;
