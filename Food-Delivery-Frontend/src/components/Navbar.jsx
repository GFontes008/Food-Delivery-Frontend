import React from 'react'
import { Link } from 'react-router-dom';
import { RiAccountPinCircleLine } from "react-icons/ri";

const Navbar = () => {

  return (
    <div className='navbar'>
      <nav>
      <ul>
        <li>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        </li>
        <li>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact Us </Link>
        </li>
      </ul>
      <div className='icon'>
        <Link to='/login' >
         <RiAccountPinCircleLine />
        </Link>
      </div>

      </nav>
    </div>
  );
};

export default Navbar;
