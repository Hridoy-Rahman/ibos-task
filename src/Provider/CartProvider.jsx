import React, { createContext, useState, useContext, useEffect } from "react";
import { useAuth } from "../Provider/AuthProvider"; 

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const { user } = useAuth(); 
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (user && user.id) {
      // Load cart items from localStorage for the specific user
      const storedCartItems = localStorage.getItem(`cartItems_${user.id}`);
      setCartItems(storedCartItems ? JSON.parse(storedCartItems) : []);
    } else {
      // Clear cart items if user is not logged in or user ID is not available
      setCartItems([]);
    }
  }, [user]); 

  useEffect(() => {
    if (user && user.id) {
      // Save cart items to localStorage for the specific user
      localStorage.setItem(`cartItems_${user.id}`, JSON.stringify(cartItems));
    }
  }, [cartItems, user]); // Save cart items when cartItems or user changes

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const updateCartItemQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateCartItemQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
