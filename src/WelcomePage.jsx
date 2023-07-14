import React from "react";
import "./welcomepage.css";

function WelcomePage() {
  return (
    <div id="welcomepage">
      <div className="header">
        <span className="logo"> Hisaab</span>
      </div>

      <div className="welcome-body">
        <div className="welcomeHead">
          <span> Hi ! </span>
          <span> What can I call you?</span>
        </div>
        <input type="text" placeholder="your name" />
      </div>
    </div>
  );
}

export default WelcomePage;
