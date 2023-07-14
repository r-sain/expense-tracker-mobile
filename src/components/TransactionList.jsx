import React, { useContext, useState } from "react";
import AddTransaction from "./AddTransaction";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";
import "./transactionList.css";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="transList">
      <div className="transListHead">
        <h3>Your Transactions</h3>
      </div>
      <div className="transListBody">
        {transactions.length === 0 ? (
          <div className="emptyTrans">Add Transactions</div>
        ) : (
          <ul className="list">
            {transactions.map((transaction) => (
              <Transaction key={transaction.id} transaction={transaction} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TransactionList;
