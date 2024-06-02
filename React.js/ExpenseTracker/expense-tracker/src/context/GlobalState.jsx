import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
// Inital state
const InitialState = {
  transactions: [],
};
// A function to create a context, which allows you to share state across multiple components without passing props manually.
export const GlobalContext = createContext(InitialState);

// GlobalProvider - A component that will wrap around other components to provide them access to the global state.
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, InitialState);
  // Actions
  function deleteTransaction(id) {
    // The dispatch function sends an action object to the reducer to update the state.
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  }

  function addTransaction(transaction) {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  }

  return (
    // This component makes the state and actions available to any child components that need them.
    <GlobalContext.Provider
      value={{ transactions: state.transactions, deleteTransaction, addTransaction }}>
      {children}
    </GlobalContext.Provider>
    // The value prop of the provider is an object containing the current state (transactions) and any actions (like deleteTransaction) you want to provide to the children components.
  );
};
