import React, { useState, useContext } from 'react';

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  return <AppContext.Provider value="hrllo">{children}</AppContext.Provider>;
};

//custom hook
export const UseGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
