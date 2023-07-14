import React, { useEffect, useState } from "react";
import Balance from "./components/Balance";
import TransactionList from "./components/TransactionList";
import "./homepage.css";
import { MdClear } from "react-icons/md";

const HomePage = () => {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [showForm, setShowForm] = useState(name === "");

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    setShowForm(false);
  };

  const handleRemoveName = () => {
    localStorage.removeItem("name");
    setName("");
    setShowForm(true);
  };
  return (
    <div className="homePage">
      <div className="username">
        {showForm ? (
          <div className="userform">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                placeholder="Whats your name?"
                onChange={handleInputChange}
              />
              <button type="submit">Confirm</button>
            </form>
          </div>
        ) : (
          <>
            <p>
              Hi! {name}{" "}
              <span onClick={handleRemoveName}>
                <MdClear size={10} color="#a86f6f" />
              </span>
            </p>
          </>
        )}
      </div>

      <div className="balancecard">
        <Balance />
      </div>

      <div className="expenseList">
        <TransactionList />
      </div>
    </div>
  );
};

export default HomePage;
