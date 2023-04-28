import React, { useEffect, useState } from "react";
import "./WithdrawDetailsComponent.css"
import { history } from "../../helpers/history";
import { fetchWithdrawDetails } from "../../services/transaction.service copy";
import { formatCurrency, formatDate, getTransformedStatusText } from "../../helpers/utils";

const WithdrawDetailsComponent = () => {
  const [transactionDetail, setTransactionDetail] = useState(null);

  const getWithdrawDetails = () => {
    console.log("on load");
    const ticketId = history.location.state.ticketId;
    // get ticket detials
    fetchWithdrawDetails(ticketId).then(({ data }) => {
      setTransactionDetail(data);
    }).catch((error) => {
      console.log(error);
    })
  };

  useEffect(() => {
    console.log("refresh");
    getWithdrawDetails();
  }, []);

  const openQrCodeScanner = (token) => {
    history.navigate("/qr-code-scanner", { state: { "token": transactionDetail.token } })
  }

  // useEffect(() => {}, [transactionDetail]);
  if (transactionDetail) {

    return (
      <div className="card details-card extend">
        <div className="title">Withdrawal Details</div>
        <div className="info">
          <div className="row">
            <div className="col-4">
              <span id="heading">Sender</span>
              <br />
            </div>
            <div className="col-8 pull-right">
              <span id="details">{transactionDetail.payerName}</span>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <span id="heading">Mobile No.</span>
              <br />
            </div>
            <div className="col-8 pull-right">
              <span id="details">{transactionDetail.payerMobile}</span>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <span id="heading">Amount</span>
              <br />
            </div>
            <div className="col-8 pull-right">
              <span id="details">{formatCurrency(transactionDetail.amount)}</span>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <span id="heading">Time of creation</span>
              <br />
            </div>
            <div className="col-8 align-self-center pull-right">
              <span id="details">{formatDate(transactionDetail.createdAt, true)}</span>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <span id="heading">Valid till</span>
              <br />
            </div>
            <div className="col-8 align-self-center pull-right">
              <span id="details">{formatDate(transactionDetail.validTill, true)}</span>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-4">
              <span id="heading">Status</span>
              <br />
            </div>
            <div className="col-8 align-self-center pull-right">
              <span id="details">{getTransformedStatusText(transactionDetail.status, true)}</span>
            </div>
          </div> */}
        </div>
        <div className="row">
          <div className="col-12">
            <span>
              <div className="progress-track">
                <ul id="progressbar">
                  <li className={`step0 ${ transactionDetail.statusId > 0 ? 'active' : ''} text-center`} id="step1">Received</li>
                  <li className={`step0 ${ transactionDetail.statusId > 1 ? 'active' : ''} text-center`} id="step2">QR Generated</li>
                  <li className={`step0 ${ transactionDetail.statusId > 2 ? 'active' : ''} text-center`} id="step3">QR Scanned</li>
                  <li className={`step0 ${ transactionDetail.statusId > 3 ? 'active' : ''} text-center`} id="step4">Cash Dispensed</li>
                </ul>
              </div>
            </span>
          </div>
        </div>
        <div className="token-details container-fluid">
          <div className="row">
            <div className="col-12">
              Please enter this token in ATM to generate QR code
            </div>
            <div className="span-6 token">
              <span id="price">{transactionDetail.token}</span>
            </div>
          </div>
        </div>
        <div className="qr-code-btn-ctnr container-fluid">
          <div className="row">
            <div className="col-12">
              Proceed To scan QR Code
            </div>
            <div className="span-6 token">
              <button type="button" className="btn btn-primary" onClick={() => openQrCodeScanner(transactionDetail.token)} >Scan QR-Code</button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    <p>Loading...</p>
  }
}

export default WithdrawDetailsComponent;