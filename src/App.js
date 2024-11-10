

import { CartProvider } from './components/CartContext';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Specs from './components/Specs';
import Case from './components/Case';
import Products from './components/Products';
// import Cart from './components/Cart';
import AOS from 'aos';

import './App.css';
import { useState, useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duration of the animation in ms
      offset: 100, // offset (in px) from the original trigger point
    });
  }, []);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : true;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <CartProvider>
      <div className={darkMode ? 'dark-mode' : ''}>
        <NavBar setDarkMode={setDarkMode} darkMode={darkMode} />
        <Home />
        <Specs />
        <Case />
        <Products />
        
      </div>
    </CartProvider>
  );
}

export default App;

