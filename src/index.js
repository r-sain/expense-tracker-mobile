import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Page1 from "./Page1";
import WelcomePage from "./WelcomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <WelcomePage /> */}
    <Page1 />
  </React.StrictMode>
);
