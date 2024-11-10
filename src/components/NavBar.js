import React, { useEffect, useState, useContext } from 'react';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { MdShoppingCart } from 'react-icons/md';  // Shopping cart icon
import './NavBar.css';
import Cart from './Cart'; // Import the Cart component
import { CartContext } from '../components/CartContext'; // Import CartContext

function NavBar({ darkMode, setDarkMode }) {
  const [slideIn, setSlideIn] = useState(false);
  const [showCart, setShowCart] = useState(false); // State to toggle cart visibility
  const { cart, totalClicks } = useContext(CartContext); // Access cart and total clicks from CartContext

  useEffect(() => {
    setSlideIn(true);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleCart = () => {
    setShowCart(!showCart); // Toggle cart visibility
  };

  return (
    <div className={`navbar ${darkMode ? 'dark-mode' : ''} ${slideIn ? 'slide-in' : ''}`}>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="link" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="link" href="#specs">Specs</a>
        </li>
        <li className="nav-item">
          <a className="link" href="#case">Case</a>
        </li>
        <li className="nav-item">
          <a className="link" href="#products">Products</a>
        </li>
      </ul>

      <button className={`theme-toggle ${darkMode ? 'dark-mode' : ''}`} onClick={toggleDarkMode}>
        {darkMode ? <MdOutlineLightMode className="light" /> : <MdDarkMode />}
        <span className="ball"></span>
      </button>

      {/* Cart Icon */}
      <div className="cart-icon" onClick={toggleCart}>
        <MdShoppingCart />
        <span className="cart-count">{totalClicks}</span> {/* Show total clicks */}
      </div>

      {/* Conditional rendering of Cart Dropdown */}
      {showCart && <Cart />}

      <img src="/head3.jpg" className="image-head" alt="Header" />
    </div>
  );
}

export default NavBar;
