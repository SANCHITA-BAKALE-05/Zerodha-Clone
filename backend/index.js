require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");

const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

// app.get("/addHoldings", async (req, res) => {
//   let tempHoldings = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];

//   tempHoldings.forEach((item) => {
//     let newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.day,
//       day: item.day,
//     });

//     newHolding.save();
//   });
//   res.send("Done!");
// });

// app.get("/addPositions", async (req, res) => {
//   let tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   tempPositions.forEach((item) => {
//     let newPosition = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });

//     newPosition.save();
//   });
//   res.send("Done!");
// });

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.get("/allOrders", async (req, res) => {
  const allOrders = await OrdersModel.find({});
  res.json(allOrders);
});

app.post("/newOrder", async (req, res) => {
  try {
    const name = req.body.name;
    const qty = Number(req.body.qty);
    const price = Number(req.body.price);
    const mode = req.body.mode;

    const order = new OrdersModel({
      name,
      qty,
      price,
      mode,
    });

    await order.save();

    if (mode === "BUY") {
      const holding = new HoldingsModel({
        name,
        qty,
        avg: price,
        price,
        net: "0%",
        day: "0%",
      });

      await holding.save();

      return res.json({
        success: true,
        message: "Buy order placed",
      });
    }

    const holdings = await HoldingsModel.find({ name });

    if (holdings.length === 0) {
      return res.status(400).json({
        success: false,
        message: "You don't own this stock.",
      });
    }

    const totalQty = holdings.reduce((sum, item) => sum + item.qty, 0);

    if (totalQty < qty) {
      return res.status(400).json({
        success: false,
        message: "Not enough quantity available.",
      });
    }

    let remainingQty = qty;

    for (const holding of holdings) {
      if (remainingQty === 0) break;

      if (holding.qty <= remainingQty) {
        remainingQty -= holding.qty;
        await HoldingsModel.deleteOne({ _id: holding._id });
      } else {
        holding.qty -= remainingQty;
        await holding.save();
        remainingQty = 0;
      }
    }

    return res.json({
      success: true,
      message: "Sell order placed",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

app.get("/allOrders", async (req, res) => {
  try {
    const orders = await OrdersModel.find({});
    res.json(orders);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

app.put("/updateOrder/:id", async (req, res) => {
  try {
    const { qty, price } = req.body;

    await OrdersModel.findByIdAndUpdate(req.params.id, {
      qty,
      price,
    });

    res.json({
      success: true,
      message: "Order updated successfully.",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

app.delete("/deleteOrder/:id", async (req, res) => {
  try {
    await OrdersModel.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Order deleted successfully",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

app.listen(PORT, async() => {
  console.log("App started!");
  try {
    console.log("URI =", uri);
    await mongoose.connect(uri);
    console.log("DB connected!");
  } catch (err) {
    console.error(err);
  }
});
