import React, { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  transactions: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }
  // Fetch local storage data
  useEffect(() => {
    const data = localStorage.getItem("hisaab");
    if (data) {
      const transactions = JSON.parse(data);
      initialState.transactions = transactions;
      dispatch({
        type: "SET_TRANSACTIONS",
        payload: transactions,
      });
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("hisaab", JSON.stringify(state.transactions));
  }, [state.transactions]);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
