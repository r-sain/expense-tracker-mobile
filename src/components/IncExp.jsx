import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "./incExp.css";
import { BiDownArrowAlt, BiUpArrowAlt, BiRupee } from "react-icons/bi";

const IncExp = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const arrOfNum = amounts.map((str) => {
    return Number(str);
  });
  const income = arrOfNum
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    arrOfNum
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc += item), 0) * -1;

  return (
    <div>
      <div className="inc-exp-container">
        <div className="moneyPlus">
          <h4>
            <BiDownArrowAlt color="green" />
            Income
          </h4>
          <p>
            <BiRupee />
            {income}
          </p>
        </div>
        <div className="moneyMinus">
          <h4>
            <BiUpArrowAlt color="red" />
            Expense
          </h4>
          <p>
            <BiRupee />
            {expense}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IncExp;
