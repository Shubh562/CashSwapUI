import React, { useState } from "react";
import PropTypes from "prop-types";
import "./TransactionItem.css";
import { formatCurrency, formatDate, getTransformedStatusText } from "../../helpers/utils";

const TransactionItem = ({ key, transaction, openWithdrawDetails }) => {
  const { id, amount, createdAt, payerMobile, payeeMobile, payerName, payeeName } = transaction;
  const status = transaction.status.toLowerCase();

  return (
    <li className={`list-group-item rounded-3 mb-2 ${status + "-status"}`}
      style={{ "border-block-color": "blue!important" }}
      onClick={openWithdrawDetails}>
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <div className="fw-bold">From: {payerName}</div>
          <div className="text-muted">Mb. No. {payerMobile}</div>
        </div>
        <div>
          <div className={`badge rounded-pill badge-success ${status + "-status-badge"}`}>
            {formatCurrency(amount)}
          </div>
          <div className="text-muted mb-0">{formatDate(createdAt)}</div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-muted">Status:  <span className={`${status + "-status-text"}`}>{getTransformedStatusText(status)}</span></div>
        
      </div>
    </li>
  );
};

export default TransactionItem;
