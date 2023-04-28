import React from "react";
import TransactionItem from "./TransactionItem";
import { history } from "../../helpers/history";

const WithdrawListComponent = ({ transactions }) => {
  const openWithdrawDetails = (ticketId) => {
    history.navigate('/withdraw-details', { state: { "ticketId": ticketId } });
  }
  return (
    <div className="card details-card">
      <div className="card-body details-card-body">
        <h3 className="card-title text-center mb-3">Available Withdrawals</h3>
        <div className="details-list-group">
          <ul className="list-group list-group-light">
            {transactions.map((transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} openWithdrawDetails={() => openWithdrawDetails(transaction.id)} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WithdrawListComponent;