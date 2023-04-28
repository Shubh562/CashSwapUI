import { getCall, postCall } from './api.service';

export const fetchWithdrawList = (mobile, isPayer = false) => {
  const payload = {};
  if (isPayer) payload.payerMobile = mobile;
  else payload.payeeMobile = mobile;
  return postCall("transaction/withdrawList", payload);
}

export const fetchWithdrawDetails = (ticketId) => {
  const payload = {
    "ticketId": ticketId
  }
  return postCall("transaction/withdrawDetails", payload);
}