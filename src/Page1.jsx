import React from "react";

import { BiUser, BiPlus, BiBarChartAlt, BiHome } from "react-icons/bi";
import { GlobalProvider } from "./context/GlobalState";
import AddTransaction from "./components/AddTransaction";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./page1.css";

const Page1 = () => {
  return (
    <React.StrictMode>
      <GlobalProvider>
        <Router>
          <div className="App">
            <div className="container">
              <div className="header">
                <span className="logo"> Hisaab</span>
              </div>
              {/* ********************************************************* */}
              <div
                className="body"
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <Routes>
                  <Route path="/add" element={<AddTransaction />} />
                  <Route path="/" element={<HomePage />} />
                </Routes>
              </div>
              {/* ************************************************************ */}
              <div className="footer">
                <div className="home">
                  <Link to="/" style={{ color: "white" }}>
                    <BiHome />
                  </Link>
                </div>
                <div className="add">
                  <Link to="/add" style={{ color: "white" }}>
                    <BiPlus />
                  </Link>
                </div>
                <div className="graph">
                  <BiBarChartAlt />
                </div>
                <div className="profile">
                  <BiUser />
                </div>
              </div>
            </div>
          </div>
        </Router>
      </GlobalProvider>
    </React.StrictMode>
  );
};

export default Page1;

//make date grouping
//show the date on item
//month on top of items of the month
//grapghs to show trends
