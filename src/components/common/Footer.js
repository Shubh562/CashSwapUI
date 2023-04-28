import React, { useState } from "react";

const Footer = (props) => {
  return (
    <footer className="footer mt-auto py-2 text-center text-white" style={{ "background-color": "#0a4275", marginBottom: "0" }}>
      <div className="container p-1 pb-0">

        <section className="">
          <p className="d-flex justify-content-center align-items-center">
            <span className="me-3">Contact Us: </span>
            <span className="me-9">cashswap.support@abc.com</span>
            {/* <button type="button" className="btn btn-outline-light btn-rounded">
              Sign up!
            </button> */}
          </p>
        </section>

      </div>

      <div className="text-center p-3" style={{ "background-color": "rgba(0, 0, 0, 0.2)" }}>
        © 2023 Copyright:
        <a className="text-white" href="http://localhost:3000/">CashSwap.abc.xyz</a>
      </div>
    </footer>);
}

export default Footer;