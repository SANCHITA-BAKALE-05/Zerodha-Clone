import React, { useState, useContext } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const EditActionWindow = ({ order }) => {
  const generalContext = useContext(GeneralContext);
  console.log(generalContext);

  const [qty, setQty] = useState(order.qty);
  const [price, setPrice] = useState(order.price);

  const handleSave = () => {
    axios
      .put(`http://localhost:3002/updateOrder/${order._id}`, {
        qty,
        price,
      }, {
        withCredentials: true,
      }
      )

      .then(() => {
        alert("Order Updated");

        generalContext.closeEditWindow();

        window.location.reload();
      });
  };

  return (
    <div className="container">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>

            <input
              type="number"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>

            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <div>
          <button className="btn btn-blue" onClick={handleSave}>
            Save
          </button>

          <button
            className="btn btn-grey"
            onClick={() => generalContext.closeEditWindow()}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditActionWindow;
