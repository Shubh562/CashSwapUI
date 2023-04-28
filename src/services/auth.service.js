import { history } from '../helpers/history';
import { getCall, postCall } from './api.service';

export const isUserLoggedIn = () => {
  return true && localStorage.getItem('user')
}
export const logout = () => {
  console.log("logout");
  localStorage.removeItem('user');
  history.navigate('/login')
}

export const authenticate = (mobile, pin) => {
  const payload = {
    "mobile": mobile,
    "pin": pin
  }
  return postCall("authenticate", payload);
}

export const signup = (firstName, lastName, mobile, emailId, pin) => {
  const payload = {
    "mobile": mobile,
    "pin": pin,
    "firstName": firstName,
    "lastName": lastName,
    "email": emailId
  }
  return postCall("signup", payload);
}