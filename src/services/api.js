import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    console.error(
      "Error during registration:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, userData);
    return response.data;
  } catch (error) {
    console.error(
      "Error during login:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const getUser = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/auth/user`, {
      headers: {
        "x-auth-token": token,
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching user details:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const getFoods = async () => {
  try {
    const response = await axios.get(`${API_URL}/foods`);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching foods:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const createOrder = async (orderData, token) => {
  try {
    const response = await axios.post(`${API_URL}/orders`, orderData, {
      headers: {
        "x-auth-token": token,
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error creating order:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const getUserOrders = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/orders`, {
      headers: {
        "x-auth-token": token,
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching user orders:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const clearUserOrders = async (token) => {
  try {
    const response = await axios.delete(`${API_URL}/orders/clear`, {
      headers: {
        "x-auth-token": token,
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error clearing user orders:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const addComment = async (commentData, token) => {
  try {
    const response = await axios.post(`${API_URL}/comments`, commentData, {
      headers: {
        "x-auth-token": token,
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error adding comment:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const getOrderComments = async (orderId) => {
  try {
    const response = await axios.get(`${API_URL}/comments/${orderId}`);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching order comments:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const getComments = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/comments/${id}`);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching comments:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const getOrder = async (orderId, token) => {
  try {
    const response = await axios.get(`${API_URL}/orders/${orderId}`, {
      headers: {
        "x-auth-token": token,
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching order details:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const submitContactForm = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/contact`, formData);
    return response.data;
  } catch (error) {
    console.error(
      "Error submitting contact form:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
