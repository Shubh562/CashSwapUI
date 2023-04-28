import React, { useState } from "react";
import { history } from "../../helpers/history";

const Navbar = (props) => {
  const hideBack = () => {
    if (props.curPath.includes("/login")) {
      return "hide";
    }
  }
  const hideLogout = () => {
    if (props.curPath.includes("/login") || props.curPath.includes("/signup")) {
      return "hide";
    }
  }
  return (
    <nav className="navbar navbar-light bg-light navbar-fixed-top" >
      <div className="container-fluid" >
        <button className={`back-button ${hideBack()}`} type="button" onClick={props.back}>
          <span className="back-icon"></span>
        </button>
        <a className="navbar-brand" href="javascript:;" >Cash Swap</a>
        <button className={`logout-button ${hideLogout()}`} type="button" onClick={props.logout}>
          <span className="logout-icon"></span>
        </button>
      </div>
    </nav >);
}

export default Navbar;