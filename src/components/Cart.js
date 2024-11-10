import React, { useContext, useState, useEffect, useRef } from 'react';
import { CartContext } from './CartContext';
import { MdOutlineClear } from "react-icons/md";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { FaPlus, FaMinus } from "react-icons/fa";
import './Cart.css';

function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const [view, setView] = useState('cart'); // State to manage the view ('cart' or 'payout')
  const [isOpen, setIsOpen] = useState(true); // Ensure the default state is boolean, not string
  const cartRef = useRef(null); // Create a reference for the cart div

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Function to handle switching to payout interface
  const handleCheckout = () => {
    setView('payout'); // Switch to payout interface
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Handle payment logic here, like integrating with a payment gateway
    console.log('Payment submitted');
  };

  const BackPage = () => {
    setView('cart'); // Switch back to cart interface
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the click is outside the cartRef element, close the cart
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [cartRef]);

  return (
    <div className="cart" ref={cartRef} style={{ display: isOpen ? 'block' : 'none' }}>
      
      {view === 'cart' ? (
        <>
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p className="cart-empty">Your cart is empty</p>
          ) : (
            <>
              <ul>
                {cart.map((item) => (
                  <li key={item.id} className="cart-item">
                    <div className="cart-item-info">
                      <img src={item.image} alt={item.name} className="cart-img" />
                      <div className="cart-item-details">
                        <span className="cart-item-name">{item.name}<br /></span>
                        <div className='cart-item-display'>
                          <span className="cart-item-price">GHC{item.price}</span>
                          <div className="cart-item-quantity">
                            <button className='minus' onClick={() => decreaseQuantity(item.id)}><FaMinus /></button>
                            <input
                              className='quantity'
                              type='number'
                              value={item.quantity}
                              
                            />
                            <button className='plus' onClick={() => increaseQuantity(item.id)}><FaPlus /></button>
                            <button className="cart-remove-btn" onClick={() => removeFromCart(item.id)}>
                              <MdOutlineClear />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="cart-buttons">
                <div className="checkouts">
                  <span className='cart-total'>Total</span>
                  <div className='final'>
                    <div className='cart-price'>GHC{totalPrice}</div>
                    <button className="cart-checkout-btn" onClick={handleCheckout}>
                      Checkout <FaArrowRight className='arrow' />
                    </button>
                  </div>
                  
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          {/* Back button and payout form */}
          <FaArrowLeft className='arrow-left' onClick={BackPage} />
          <div className="payout-container">
            <h2>Pay with Visa</h2>
            <form onSubmit={handlePaymentSubmit}>
              <label htmlFor="cardholder-name">Cardholder Name</label>
              <input type="text" id="cardholder-name" placeholder="Joel Sam" required />

              <label htmlFor="card-number">Card Number</label>
              <div className="input-with-icon">
                <input type="text" id="card-number" placeholder="1111 2222 3333 4444" required />
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" />
              </div>

              <label htmlFor="expiry-date">Expiry Date</label>
              <input type="text" id="expiry-date" placeholder="MM/YY" required />

              <input type="submit" value="Pay Now" />
            </form>

            <p className="security-note">Your payment is secure and encrypted.</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
