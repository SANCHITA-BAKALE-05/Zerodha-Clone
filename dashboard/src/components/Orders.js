import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";

const Orders = () => {
  const generalContext = useContext(GeneralContext);
  const [orders, setOrders] = useState([]);
  const [editingOrder, setEditingOrder] = useState(null);
  const [newQty, setNewQty] = useState("");
  const [newPrice, setNewPrice] = useState("");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    axios
      .get("http://localhost:3002/allOrders")
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h3 className="title">Orders ({orders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Stock</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Mode</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>
                <td>{order.mode}</td>

                <td>
                  <button
                    onClick={()=>
                    generalContext.openEditWindow(order)
                    }
                    >
                    Edit
                  </button>

                  <button
    onClick={() => {
      axios
        .delete(
          `http://localhost:3002/deleteOrder/${order._id}`
        )
        .then((res) => {
          alert(res.data.message);

          fetchOrders();
        });
    }}
  >
    Delete
  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editingOrder && (
        <div style={{ marginTop: "20px" }}>
          <h3>Edit Order</h3>

          <input
            type="number"
            value={newQty}
            onChange={(e) => setNewQty(e.target.value)}
            placeholder="Quantity"
          />

          <input
            type="number"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            placeholder="Price"
          />

          <button
            onClick={() => {
              axios
                .put(
                  `http://localhost:3002/updateOrder/${editingOrder._id}`,
                  {
                    qty: newQty,
                    price: newPrice,
                  }
                )
                .then(() => {
                  alert("Order Updated");

                  setEditingOrder(null);

                  fetchOrders();
                });
            }}
          >
            Save
          </button>
        </div>
      )}
    </>
  );
};

export default Orders;