import React from "react";
import "./Apps.css";

function Apps() {
  const apps = [
    {
      name: "Kite Web",
      desc: "Powerful trading platform with advanced charts and live market data.",
      img: "https://kite.zerodha.com/static/images/kite-logo.svg",
    },
    {
      name: "Kite Mobile",
      desc: "Trade and track your investments from anywhere on your mobile.",
      img: "https://kite.zerodha.com/static/images/kite-logo.svg",
    },
    {
      name: "Console",
      desc: "View your portfolio, P&L reports, holdings and tax statements.",
      img: "https://zerodha.com/static/images/console.svg",
    },
    {
      name: "Coin",
      desc: "Invest in Direct Mutual Funds with zero commission.",
      img: "https://zerodha.com/static/images/coin.svg",
    },
    {
      name: "Varsity",
      desc: "Learn stock market investing with free educational modules.",
      img: "/images/varsity.png",
    },
    {
      name: "Pulse",
      desc: "Stay updated with the latest financial and market news.",
      img: "/images/pulse.png",
    },
  ];

  return (
    <div className="apps-container">
      <h2>Our Apps</h2>
      <p className="apps-subtitle">
        Explore the Zerodha ecosystem of investing and trading applications.
      </p>

      <div className="apps-grid">
        {apps.map((app, index) => (
          <div className="app-card" key={index}>
            <img src={app.img} alt={app.name} />
            <h4>{app.name}</h4>
            <p>{app.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Apps;