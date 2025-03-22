import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5" id="Link" >
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4><i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</h4>
          <a style={{ textDecoration: "none" }} href="#">Getting started</a><br />
          <a style={{ textDecoration: "none" }} href="#">Online</a><br />
          <a style={{ textDecoration: "none" }} href="#">Offline</a><br />
          <a style={{ textDecoration: "none" }} href="#">Charges</a><br />
          <a style={{ textDecoration: "none" }} href="#">Company, Partnership and HUF</a><br />
          <a style={{ textDecoration: "none" }} href="#">Non Resident Indian (NRI)</a><br />
        </div>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4><i className="fa fa-user-circle" aria-hidden="true"></i> Your Account</h4>
          <a style={{ textDecoration: "none" }} href="#">Login credentials</a><br />
          <a style={{ textDecoration: "none" }} href="#">Your Profile</a><br />
          <a style={{ textDecoration: "none" }} href="#">Account modification and segment addition</a><br />
          <a style={{ textDecoration: "none" }} href="#">Nomination</a><br />
        </div>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4><i className="fa fa-line-chart" aria-hidden="true"></i> Trading and Markets</h4>
          <a style={{ textDecoration: "none" }} href="#">Trading FAQs</a><br />
          <a style={{ textDecoration: "none" }} href="#">Kite</a><br />
          <a style={{ textDecoration: "none" }} href="#">Margins</a><br />
          <a style={{ textDecoration: "none" }} href="#">Product and order types</a><br />
          <a style={{ textDecoration: "none" }} href="#">Corporate actions</a><br />
        </div>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4><i className="fa fa-credit-card" aria-hidden="true"></i> Funds</h4>
          <a style={{ textDecoration: "none" }} href="#">Fund withdrawal</a><br />
          <a style={{ textDecoration: "none" }} href="#">Adding funds</a><br />
          <a style={{ textDecoration: "none" }} href="#">Adding bank accounts</a><br />
          <a style={{ textDecoration: "none" }} href="#">eMandates</a><br />
        </div>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4><i className="fa fa-dashboard" aria-hidden="true"></i> Console</h4>
          <a style={{ textDecoration: "none" }} href="#">IPO</a><br />
          <a style={{ textDecoration: "none" }} href="#">Portfolio</a><br />
          <a style={{ textDecoration: "none" }} href="#">Funds statement</a><br />
          <a style={{ textDecoration: "none" }} href="#">Profile</a><br />
          <a style={{ textDecoration: "none" }} href="#">Reports</a><br />
          <a style={{ textDecoration: "none" }} href="#">Referral program</a><br />
        </div>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4><i className="fa fa-bitcoin" aria-hidden="true"></i> Coin</h4>
          <a style={{ textDecoration: "none" }} href="#">Understanding mutual funds and Coin</a><br />
          <a style={{ textDecoration: "none" }} href="#">Coin app</a><br />
          <a style={{ textDecoration: "none" }} href="#">Coin web</a><br />
          <a style={{ textDecoration: "none" }} href="#">Transactions and reports</a><br />
          <a style={{ textDecoration: "none" }} href="#">National Pension Scheme (NPS)</a><br />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
