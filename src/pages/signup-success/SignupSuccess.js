import React from "react";
import "./SignupSuccess.css";
import { history } from "../../helpers/history";

const SignupSuccess = (props) => {
  const redirectToLogin = () => {
    history.navigate("/login");
  }
  return (
    <>
      <div className="card app-info-card" style={{ marginTop: '20%' }}>
        <div className="card-body">
          <h6 className="card-title text-center mb-3">Thank you for registering with us!</h6>
          <p>To withdraw the money, sent by ABC bank account user, proceed with <a className="link-primary" href="javascript:;" onClick={redirectToLogin}>log in</a>.</p>
        </div>
      </div>
    </>
  );
}

export default SignupSuccess;