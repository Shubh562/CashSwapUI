import React, { useState } from "react";
import { history } from "../../helpers/history";
import Input from "../common/Input";
import { emailValidator, mobileNumberValidator, nameValidator, pinValidator } from "../../helpers/validators";
import { signup } from "../../services/auth.service";

const SignupComponent = (props) => {
  const [mobile, setMobile] = useState({ value: '', error: false, message: '' });
  const [firstName, setFirstName] = useState({ value: '', error: false, message: '' });
  const [lastName, setLastName] = useState({ value: '', error: false, message: '' });
  const [emailId, setEmailId] = useState({ value: '', error: false, message: '' });
  const [pin, setPin] = useState({ value: '', error: false, message: '' });
  const [confirmPin, setConfirmPin] = useState({ value: '', error: false, message: '' });
  const [error, setError] = useState({ error: false, message: '' });

  const redirectToSignupSuccess = () => {
    history.navigate("/signup-success");
  }
  const handleSignup = () => {
    const mobileError = mobileNumberValidator(mobile.value);
    const firstNameError = nameValidator(firstName.value, "First name");
    const lastNameError = nameValidator(lastName.value, "Last name");
    const emailIdError = emailValidator(emailId.value);
    const pinError = pinValidator(pin.value);
    var confirmPinError = pinValidator(confirmPin.value);

    if (!(pinError.error || confirmPinError.error) && pin.value !== confirmPin.value) {
      confirmPinError = { error: true, message: "Pin does not match." };
    }
    if (mobileError.error || firstNameError.error || lastNameError.error || emailIdError.error || pinError.error || confirmPinError.error) {
      setMobile({ ...mobile, ...mobileError });
      setFirstName({ ...firstName, ...firstNameError });
      setLastName({ ...lastName, ...lastNameError });
      setEmailId({ ...emailId, ...emailIdError });
      setPin({ ...pin, ...pinError });
      setConfirmPin({ ...confirmPin, ...confirmPinError });
      return;
    }
    signup(firstName.value, lastName.value, mobile.value, emailId.value, pin.value).then((data) => {
      console.log(data);
      history.navigate("/login");
    }).catch((error) => {
      setError({ error: true, message: error.response.data });
      setTimeout(() => {
        setError({ error: false, message: '' });
      }, 5000)
    });
  }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div class="Auth-form-title">
          <h2>Sign Up</h2>
        </div>
        <div className="Auth-form-content">
          {/* <h3 className="Auth-form-title">Sign In</h3> */}
          {error.error ? <p>{error.message}</p> : <></>}
          <Input
            type="text"
            label="Mobile Number"
            placeholder="Enter Mobile Number"
            item={mobile}
            onChange={(mobile) => setMobile({ value: mobile, error: false, message: '' })} />
          <Input
            type="text"
            label="First Name"
            placeholder="Enter First Name"
            item={firstName}
            onChange={(firstName) => setFirstName({ value: firstName, error: false, message: '' })} />
          <Input
            type="text"
            label="Last Name"
            placeholder="Enter Last Name"
            item={lastName}
            onChange={(lastName) => setLastName({ value: lastName, error: false, message: '' })} />
          <Input
            type="email"
            label="Email Address"
            placeholder="Enter Email Address"
            item={emailId}
            onChange={(emailId) => setEmailId({ value: emailId, error: false, message: '' })} />
          <Input
            type="password"
            label="Pin"
            placeholder="Enter Pin"
            item={pin}
            onChange={(pin) => setPin({ value: pin, error: false, message: '' })} />
          <Input
            type="password"
            label="Confirm Pin"
            placeholder="Enter Pin Again"
            item={confirmPin}
            onChange={(confirmPin) => setConfirmPin({ value: confirmPin, error: false, message: '' })} />
          <div className="d-grid gap-2 mt-3">
            <button type="button" className="btn btn-primary" onClick={handleSignup}>
              Sign Up
            </button>
          </div>
          <div className="d-flex p-1">
            <div className="p-1">
              Already registered?{" "}
              <a className="link-primary" href="javascript:;" onClick={redirectToSignupSuccess}>
                Log In
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignupComponent;