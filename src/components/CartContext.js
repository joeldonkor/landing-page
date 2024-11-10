import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalClicks, setTotalClicks] = useState(0); // Track the total number of item clicks

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    setTotalClicks(totalClicks + 1); // Increment the total number of clicks
  };

  const increaseQuantity = (itemId) => {
    setCart(
      cart.map((item) =>
        item.id === itemId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
    setTotalClicks(totalClicks + 1); // Increment the total number of clicks
  };

  const decreaseQuantity = (itemId) => {
    setCart(
      cart.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (itemId) => {
    const itemToRemove = cart.find((item) => item.id === itemId);
    if (itemToRemove) {
      setTotalClicks(totalClicks - itemToRemove.quantity); // Decrease total clicks
    }
    
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);           // Clear the cart
    setTotalClicks(0);      // Reset the total clicks
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        totalClicks,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
