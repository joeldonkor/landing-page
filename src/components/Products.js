

import React, { useContext, useEffect } from 'react';
import { LuShoppingBag } from 'react-icons/lu';  
import { AiOutlineSend } from 'react-icons/ai';
import { CiLinkedin } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { CartContext } from '../components/CartContext';
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import './Products.css';

function Products() {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: 'Black', price: 1599, image: './product1.png' },
    { id: 2, name: 'Red & Black', price: 1799, image: './product2.png' },
    { id: 3, name: 'Gold & Black', price: 1899, image: './product3.png' },
    { id: 4, name: 'Blue', price: 1699, image: './product4.png' },
    { id: 5, name: 'Cream & Black', price: 1999, image: './product5.png' },
  ];

  useEffect(() => {
    const observers = [];

    // Function to observe elements
    const observeElements = (className) => {
      const elements = document.querySelectorAll(`.${className}`);
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); 
          }
        });
      }, { threshold: 0.1 });

      elements.forEach(el => observer.observe(el));
      observers.push(observer);
    };

    // Observe elements with animation classes
    observeElements('products-container');
    observeElements('products-card');
    observeElements('footer-section');
    observeElements('section-title');

    
    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  return (
    <>
      <section className='products' id='products'>
        <h2 className="section-title">
          Choose <br /> Your Style
        </h2>

        <div className="products-container">
          {products.map((product) => (
            <article key={product.id} className="products-card">
              <div className="products-content">
                <img src={product.image} alt={product.name} className="products-img" />
                <h3 className="products-title1">{product.name}</h3>
                <span className="products-price">GHC{product.price}</span>
                <button className="products-button2" onClick={() => addToCart(product)}>
                  <i className="button-icon2"><LuShoppingBag /></i>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      
      <footer className="footer-section">
        <div className="footer-container">
          <a href="#" className="footer-logo">
            <img src="./head3.jpg" alt="" className="logo"/>
          </a>

          <div className="footer-content">
            <h3 className="footer-title">Products</h3>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">Headphones</a>
              </li>
              <li>
                <a href="#" className="footer-link">Earphones</a>
              </li>
              <li>
                <a href="#" className="footer-link">Earbuds</a>
              </li>
              <li>
                <a href="#" className="footer-link">Accessories</a>
              </li>
            </ul>
          </div>

          <div className="footer-content">
            <h3 className="footer-title">Support</h3>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">Product help</a>
              </li>
              <li>
                <a href="#" className="footer-link">Register</a>
              </li>
              <li>
                <a href="#" className="footer-link">Updates</a>
              </li>
              <li>
                <a href="#" className="footer-link">Provisions</a>
              </li>
            </ul>
          </div>

          <div className="footer-content">
            <form action="" className="footer-form">
              <input type="email" placeholder="Email Subscription" className="footer-input" />
              <button className="button--flex">
                <i className="button-icon"><AiOutlineSend /></i>
              </button>
            </form>

            <div className="footer-social">
              <a href="https://www.linkedin.com/in/joel-sam-donkor-16a49a2b6" target="_blank" className="footer-social-link">
                <i className="footer-social-icon"><CiLinkedin /></i>
              </a>
              <a href="https://instagram.com/_bagna?utm_medium=copy_link" target="_blank" className="footer-social-link">
                <i className="footer-social-icon"><FaInstagram /></i>
              </a>
              <a href="https://x.com/joel_sam006" target="_blank" className="footer-social-link">
                <i className="footer-social-icon"><RiTwitterXFill /></i>
              </a>
            </div>
          </div>
        </div>

        <p className="footer-copy">
          <a href="https://www.linkedin.com/in/joel-sam-donkor-16a49a2b6" target="_blank" className="footer-copy-link">
            Built by JOEL.
          </a>
        </p>
        <a href="#" className="show-scroll" id="scroll-up">
            <i className="scrollup-icon"><FaRegArrowAltCircleUp /></i>
        </a>
      </footer>
    </>
  );
}

export default Products;



