import React, { useEffect, useState } from "react";
import { history } from "../../helpers/history";
import Input from "../common/Input";
import { mobileNumberValidator, pinValidator } from "../../helpers/validators";
import { authenticate, isUserLoggedIn } from "../../services/auth.service";
import loginImg from '../../assets/89510024.jpg';
import "./LoginComponent.css";

const LoginComponent = (props) => {
  const [mobile, setMobile] = useState({ value: '', error: false, message: '' });
  const [pin, setPin] = useState({ value: '', error: false, message: '' });
  const [error, setError] = useState({ error: false, message: '' });

  const redirecToSignup = () => {
    history.navigate("/signup");
  }

  useEffect(() => {
    if (isUserLoggedIn()) history.navigate("/home");
  }, []);

  const handleLogin = () => {
    const mobileNumberError = mobileNumberValidator(mobile.value);
    const pinError = pinValidator(pin.value);
    if (mobileNumberError.error || pinError.error) {
      setMobile({ ...mobile, ...mobileNumberError });
      setPin({ ...pin, ...pinError });
      return;
    }
    authenticate(mobile.value, pin.value).then((user) => {
      localStorage.setItem('user', JSON.stringify(user.data));
      history.navigate("/home");
    }).catch((error) => {
      setError({ error: true, message: error.response.data });
      setTimeout(() => {
        setError({ error: false, message: '' });
      }, 5000)
    });
  }

  return (
    <>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div class="Auth-form-title">
            <h2>Log In</h2>
          </div>
          <div className="Auth-form-content">

            {error.error ? <p style={{ color: "red" }}>{error.message}</p> : <></>}
            <Input
              type="text"
              label="Mobile Number"
              placeholder="Enter Mobile Number"
              item={mobile}
              onChange={(mobile) => setMobile({ value: mobile, error: false, message: '' })} />
            <Input
              type="password"
              label="Pin"
              placeholder="Enter Pin"
              item={pin}
              onChange={(pin) => setPin({ value: pin, error: false, message: '' })} />
            <div className="d-grid gap-2 mt-3">
              <button type="button" className="btn btn-primary" onClick={handleLogin} >Log In</button>
            </div>
            <div className="d-flex p-1">
              <div className="p-1">
                Not registered yet?{" "}
                <a className="link-primary" href="javascript:;" onClick={redirecToSignup}>
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginComponent;