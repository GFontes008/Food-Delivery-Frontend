import React from 'react'
import { Link } from 'react-router-dom';
import List from '../assets/images/list.jpg';
import Pizza from '../assets/images/pizza.jpg';

const HomePage = () => {
  return (
    <div className='homepage'>
    
    <aside className="title">
        <h1>Wellcome!</h1>
        <p>to DELIVERY, where delicious meals are just a tap away. Discover our wide range of cuisines and 
          experience the joy of fast, reliable delivery.
          Craving something special? Try what we have to offer and indulge in the finest 
          flavors delivered right to your doorstep.
        </p>
      </aside>
          <div className='foodlist'>
          <Link to="/food">
            <img src={List} alt="" />
          </Link>
            <h5>Food List</h5>
            <p>Find what you want</p>
          </div>
          

          <div className='cart'>
            <Link to="/cart">
             <img src={Pizza} alt="" />
            </Link>
            <h5>Cart</h5>
            <p>Order for delivery</p>
          </div>
            
        
      
    </div>
  );
};

export default HomePage;
