import React from "react";
import { history } from "../../helpers/history";

const HomeComponent = (props) => {

  const redirectToWithdrawList = () => {
    history.navigate("/withdraw-list");
  }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" style={{ padding: '2rem 0', marginTop: '2rem', marginBottom: '2rem' }}>
        <div className="Auth-form-content">
          <div>
            <h3 style={{ color: "green" }}>Welcome to Cash Swap</h3>
          </div>
          <p>You can withdraw cash from atm without needing a card.</p>

          <p>To withdraw cash click on </p>

          <div className="d-grid gap-2 mt-3">
            <button type="button" className="btn btn-primary" onClick={redirectToWithdrawList} >Available Withdrawals</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default HomeComponent;