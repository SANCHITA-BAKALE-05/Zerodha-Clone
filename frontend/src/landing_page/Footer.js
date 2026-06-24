import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }} className="border-top">
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.svg" style={{ width: "50%" }} />
            <p className="mt-4 mb-4"style={{ fontSize: "14px" }}>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd.<br></br> All rights reserved.
            </p>
            <div className="d-flex gap-3">
              <a href="https://twitter.com" className="text-muted" target="_blank" rel="noopener noreferrer">
               <i className="fa fa-twitter"></i>
              </a>
              <a href="https://facebook.com" className="text-muted" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="https://instagram.com" className="text-muted" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" className="text-muted" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://t.me" className="text-muted" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-telegram"></i>
              </a>
            </div>
          </div>
          <div className="col">
            <p>Company</p>
            <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "2.4" }}>About</a>
            <br />
            <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "2.4" }}>Products</a>
            <br />
            <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "2.4" }}>Pricing</a>
            <br />
            <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "2.4" }}>Referral programme</a>
            <br />
            <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "2.4" }}>Careers</a>
            <br />
            <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "2.4" }}>Zerodha.tech</a>
            <br />
            <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "2.4" }}>Press & media</a>
            <br />
            <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "2.4" }}>Zerodha cares (CSR)</a>
            <br />
          </div>
          <div className="col">
            <p>Support</p>
            <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "2.4" }}>Contact</a>
            <br />
            <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "2.4" }}>Support portal</a>
            <br />
            <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "2.4" }}>Z-Connect blog</a>
            <br />
            <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "2.4" }}>List of charges</a>
            <br />
            <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "2.4" }}>Downloads & resources</a>
            <br />
          </div>
          <div className="col">
            <p>Account</p>
            <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "2.4" }}>Open an account</a>
            <br />
            <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "2.4" }}>Fund transfer</a>
            <br />
            <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "2.4" }}>60 day challenge</a>
            <br />
          </div>
        </div>
        <div className="mt-4 mb-3 text-muted" style={{ fontSize: "13px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
        <div className="pt-1 pb-3">
          <div className="d-flex flex-wrap justify-content-center gap-3 text-muted" style={{ fontSize: "13px" }}>
            <a href="" className="text-muted" style={{ textDecoration: "none" }}>NSE</a>
            <a href="" className="text-muted" style={{ textDecoration: "none" }}>BSE</a>
            <a href="" className="text-muted" style={{ textDecoration: "none" }}>MCX</a>
            <a href="" className="text-muted" style={{ textDecoration: "none" }}>Terms & conditions</a>
            <a href="" className="text-muted" style={{ textDecoration: "none" }}>Policies & procedures</a>
            <a href="" className="text-muted" style={{ textDecoration: "none" }}>Privacy policy</a>
            <a href="" className="text-muted" style={{ textDecoration: "none" }}>Disclosure</a>
          </div>
        </div>  
      </div>
    </footer>
  );
}

export default Footer;
