import React, { useEffect, useState } from "react";
import WithdrawListComponent from "../../components/withdraw-list/WithdrawListComponent";
import { fetchWithdrawList } from "../../services/transaction.service copy";

const WithdrawList = () => {
  
  const [transactions, setTransactions] = useState(null);
  const getWithdrawList = () => {
    // return transactions;
    let user = JSON.parse(localStorage.getItem("user"));
    fetchWithdrawList(user.mobile).then(({data}) => {
      setTransactions(data);
    }).catch((error) => {
      console.error(error);
    });
  };
  useEffect(() => {
    console.log("refresh");
    getWithdrawList()
  }, []);

  return transactions ? <WithdrawListComponent transactions={transactions} /> : <></>;
};

export default WithdrawList;
