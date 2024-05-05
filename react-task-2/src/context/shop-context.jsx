import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);

//getDefaultCart - declares a function that generates the initial state for the shopping cart. For each product in the PRODUCTS array, a key is created in the cart object with an initial value of 0, which means that products of this type are not yet in the cart.
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setcartItems] = useState(getDefaultCart());
  // addToCart - allows you to add products to the shopping cart. This function takes the item ID 'ItemId' and updates the status of the cartItems, increasing the number of selected items by one.
  const addToCart = (itemId) => {
    setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const contextValue = { cartItems, addToCart, removeFromCart };
  //console.log(cartItems);
  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
