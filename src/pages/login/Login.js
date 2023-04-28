import React, { useState } from "react";
import LoginComponent from "../../components/login/LoginComponent";
import "./Login.css";

const Login = (props) => {
  return (
    <>
      <div className="card app-info-card" >
        <div className="card-body">
          <h6 className="card-title text-center mb-3">About App</h6>
          <p>This app enables a user, who does not have an ABC bank account, to withdraw
            the money, sent by ABC bank account user, from ATM without the need of a card.</p>
        </div>
      </div>
      <LoginComponent />
    </>
  );
}

export default Login;