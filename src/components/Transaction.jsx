import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { TbCurrencyRupee } from "react-icons/tb";
import { HiOutlineTrash } from "react-icons/hi";
import "./transaction.css";

function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.category === "savings" ? "+" : "-";

  return (
    <div>
      <li
        style={{ display: "flex", justifyContent: "space-between" }}
        className={
          transaction.category === "savings" ? "plusTrans" : "minusTrans"
        }
      >
        <span className="listLeft">
          {transaction.category.charAt(0).toUpperCase() +
            transaction.category.slice(1)}
        </span>
        <span className="listRight">
          {/* {transaction.description} */}
          <span
            className={
              transaction.category === "savings"
                ? "amountsPlus"
                : "amountsMinus"
            }
          >
            {/* {sign} */}
            <TbCurrencyRupee />
            {Math.abs(transaction.amount)}
          </span>

          <span
            onClick={() => deleteTransaction(transaction.id)}
            className="delete-btn"
          >
            {" "}
            <HiOutlineTrash size={20} color="#A62639" />
          </span>
        </span>
      </li>
    </div>
  );
}

export default Transaction;
