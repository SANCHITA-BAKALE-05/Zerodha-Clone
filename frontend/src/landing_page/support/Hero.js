import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="pt-5 pb-5 " id="supportWrapper">
        <div className="col-1"></div>
        <div className="col-8">
          <h4>Support Portal</h4>
        </div>
        <div className="col-3">
          <a href="" className="d-block" style={{ textAlign: "left"}}>Track Tickets</a>
        </div>
      </div>
      <div className="row  m-3">
        <div className="col-1 m-5"></div>
        <div className="col-4 p-3 mb-5">
          <h1 className="fs-3 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input className="mb-4" placeholder="Eg. how do I activate F&O" />
          <br />
          <a href="" style={{ paddingRight: "30px" }}>Track account opening</a>
          <a href="" style={{ paddingRight: "30px" }}>Track segment activation</a>
          <a href="" style={{ paddingRight: "30px" }}>Intraday margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-1"></div>
        <div className="col-4 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li className="mt-3 mb-3">
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
        <div className="col-2"></div>
      </div>
    </section>
  );
}

export default Hero;
