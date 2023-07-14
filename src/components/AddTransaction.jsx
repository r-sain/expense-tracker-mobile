import React, { useState, useContext, useEffect } from "react";

import "./addTransaction.css";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = (props) => {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(null);

  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000000),
      category,
      description,
      amount: category === "savings" ? amount : -Math.abs(amount),
      date,
    };

    setCategory("");
    setDescription("");
    setAmount("");
    setDate("");

    console.log(newTransaction);
    addTransaction(newTransaction);
  };

  return (
    <div className="addTrans">
      <div className="transHead">
        <div className="heading">
          <h3>Add Transaction</h3>
        </div>
      </div>
      <div className="transBody">
        <form className="form" onSubmit={handleSubmit}>
          {/* ****************Category**************** */}
          <select
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled hidden>
              Category
            </option>
            <option value="expense">Expense</option>
            <option value="invest">Investment</option>
            <option value="savings">Income</option>
          </select>
          {/* ****************Description**************** */}

          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {/* ****************Amount**************** */}
          <input
            required
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <span>
            <ReactDatePicker
              className="datePicker"
              placeholderText="Date"
              selected={date}
              onChange={(date) => setDate(date)}
              showTimeSelect
              dateFormat="Pp"
              strategy="fixed"
            />
          </span>
          <button type="submit" style={{ color: "white" }}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
