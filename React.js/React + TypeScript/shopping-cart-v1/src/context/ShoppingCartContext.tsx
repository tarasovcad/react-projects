import React, { ReactNode, createContext, useContext } from 'react';

const ShoppingCartContext = createContext({});

export const usShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

type ShoppingCartProviderProps = {
  children: ReactNode;
};

export const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
  return <ShoppingCartContext.Provider value={{}}>{children}</ShoppingCartContext.Provider>;
};
