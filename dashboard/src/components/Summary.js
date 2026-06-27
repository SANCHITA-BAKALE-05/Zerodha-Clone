import React, { useEffect, useState } from "react";
import axios from "axios";

const Summary = () => {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allHoldings")
      .then((res) => {
        setHoldings(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const totalInvestment = holdings.reduce(
    (sum, stock) => sum + stock.avg * stock.qty,
    0
  );

  const currentValue = holdings.reduce(
    (sum, stock) => sum + stock.price * stock.qty,
    0
  );

  const pnl = currentValue - totalInvestment;

  const pnlPercent =
    totalInvestment > 0
      ? ((pnl / totalInvestment) * 100).toFixed(2)
      : 0;

  return (
    <>
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>{currentValue.toFixed(2)}</h3>
            <p>Current Value</p>
          </div>

          <hr />

          <div className="second">
            <p>
              Investment
              <span>{totalInvestment.toFixed(2)}</span>
            </p>

            <p>
              Holdings
              <span>{holdings.length}</span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({holdings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={pnl >= 0 ? "profit" : "loss"}>
              {pnl.toFixed(2)}{" "}
              <small>
                {pnl >= 0 ? "+" : ""}
                {pnlPercent}%
              </small>
            </h3>

            <p>P&amp;L</p>
          </div>

          <hr />

          <div className="second">
            <p>
              Current Value
              <span>{currentValue.toFixed(2)}</span>
            </p>

            <p>
              Investment
              <span>{totalInvestment.toFixed(2)}</span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
