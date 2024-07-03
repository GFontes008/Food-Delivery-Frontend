# Food Delivery Application

## Overview

The Food Delivery Application is a full-stack web application designed to facilitate food ordering and delivery services. This application allows users to browse food items, add them to a cart, place orders, and manage their account information. It also includes functionalities for restaurants to manage their menu items.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Frontend Components](#frontend-components)

## Technologies Used

- Backend: Node.js, Express, MongoDB, Mongoose
- Frontend: React, Axios, React Router DOM
- Authentication: JWT (JSON Web Tokens)
- Styling: CSS

## Folder Structure

### Backend

food-delivery-backend/
├── controllers/
│ ├── authController.js
│ ├── commentController.js
│ ├── contactController.js
│ ├── foodController.js
│ ├── orderController.js
│ └── restaurantController.js
├── middleware/
│ └── authMiddleware.js
├── config/
│ └── db.js
├── models/
│ ├── Comment.js
│ ├── Contact.js
│ ├── Food.js
│ ├── Order.js
│ ├── Restaurant.js
│ └── User.js
├── routes/
│ ├── auth.js
│ ├── comment.js
│ ├── contact.js
│ ├── food.js
│ ├── order.js
│ └── restaurant.js
├── .env
├── index.js
└── package.json

### Frontend

food-delivery-frontend/
├── public/
│ ├── index.html
│ └── manifest.json
├── src/
│ ├── services/
│ │ └── api.js
│ ├── assets/
│ │ └── images/
│ ├── context/
│ │ └── AuthContext.js
│ ├── components/
│ │ ├── Auth.js
│ │ ├── Cart.js
│ │ ├── ContactPage.js
│ │ ├── FoodList.js
│ │ ├── Footer.js
│ │ ├── Home.js
│ │ ├── Login.js
│ │ ├── NavBar.js
│ │ ├── NotFoundPage.js
│ │ ├── OrderDetails.js
│ │ ├── Orders.js
│ │ └── Register.js
│ ├── styles/
│ │ ├── Auth.css
│ │ ├── Cart.css
│ │ ├── ContactPage.css
│ │ ├── FoodList.css
│ │ ├── Footer.css
│ │ ├── Home.css
│ │ ├── NavBar.css
│ │ ├── OrderDetails.css
│ │ └── Orders.css
│ ├── App.js
│ ├── App.css
│ ├── index.js
│ ├── index.css
│ ├── \_redirects
│ └── package.json

## Installation

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js
- MongoDB
- npm (Node Package Manager)

### Backend Setup

1. Clone the repository:

git clone https://github.com/95Ay/Food-delivery-Backend
cd food-delivery-backend

    Install dependencies:

npm install

    Create a .env file in the root directory and add the following environment variables:

env

MONGO_URI=mongodb://localhost:27017/FoodDelivery
JWT_SECRET=your_jwt_secret

Frontend Setup

    Clone the repository:

git clone https://github.com/GFontes008/Food-Delivery-Frontend
cd food-delivery-frontend

    Install dependencies:

npm install

    Create a .env file in the root directory and add the following environment variable:

env

REACT_APP_API_URL=http://localhost:5000/api

Running the Application
Backend

Start the backend server:

npm start

The backend server will run on http://localhost:5000.
Frontend

Start the frontend development server:

npm start

---

Styling

The application is styled using CSS files located in the src/styles directory. Each component has its corresponding CSS file to manage its styles.

This README provides a detailed overview of the Food Delivery Application. Follow the instructions to set up and run the application locally. If you have any questions or issues, please feel free to open an issue or contact the project maintainers.
