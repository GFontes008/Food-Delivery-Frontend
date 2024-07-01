import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getOrder, getOrderComments, addComment } from "../services/api";
import { AuthContext } from "../context/AuthContext";
import "../styles/OrderDetails.css";

const OrderDetails = () => {
  const { orderId } = useParams();
  const { user } = useContext(AuthContext);
  const [order, setOrder] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const orderData = await getOrder(orderId, user.token);
        setOrder(orderData);
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    };

    const fetchComments = async () => {
      try {
        const commentsData = await getOrderComments(orderId);
        setComments(commentsData);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchOrderDetails();
    fetchComments();
  }, [orderId, user.token]);

  const handleAddComment = async () => {
    if (!commentText.trim()) return;
    try {
      const commentData = { orderId, text: commentText };
      const newComment = await addComment(commentData, user.token);
      setComments([...comments, { ...newComment, user: { name: user.name } }]);
      setCommentText("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  if (!order) return <p>Loading...</p>;

  return (
    <div className="order-details-container">
      <h2>Order Details for #{order._id}</h2>
      <ul>
        {order.items.map((item) => (
          <li key={item.food._id}>
            {item.food.name} - {item.quantity} x ${item.food.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <h4>Total Price: ${order.totalPrice.toFixed(2)}</h4>

      <h3>Comments</h3>
      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment._id} className="comment">
            <strong>{comment.user.name}:</strong> {comment.text}
          </div>
        ))}
      </div>
      {user && (
        <div className="comment-form">
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Add a comment"
          />
          <button onClick={handleAddComment}>Add Comment</button>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
