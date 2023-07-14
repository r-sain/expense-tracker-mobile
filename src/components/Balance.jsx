import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import IncExp from "./IncExp";
import "./balance.css";
import { BiRupee } from "react-icons/bi";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transactions) => transactions.amount);
  const arrOfNum = amounts.map((str) => {
    return Number(str);
  });
  const total = arrOfNum.reduce((a, b) => a + b, 0);
  let balanceAmt = "";

  if (total > 0) {
    balanceAmt = "positive";
  } else if (total < 0) {
    balanceAmt = "negative";
  } else {
    balanceAmt = "zero";
  }
  return (
    <div className="balanceCardComp">
      <div className="headBal">
        <h3>Total Balance</h3>
        <span className={`balanceAmt ${balanceAmt}`}>
          <BiRupee />
          {total}
        </span>
      </div>
      <div className="incExpBal">
        <IncExp />
      </div>
    </div>
  );
};

export default Balance;
