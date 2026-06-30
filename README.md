# Zerodha Clone

Zerodha Clone is a full-stack stock trading web application inspired by the Zerodha trading platform. It allows users to securely manage their investments by buying and selling stocks, viewing holdings and positions, and managing orders through an intuitive dashboard.

The project is built using the MERN Stack (MongoDB, Express.js, React.js, Node.js) and implements JWT Authentication for secure user access.

---

## ✨ Features

- 🔐 Secure User Authentication (JWT)
- 👤 Login & Logout
- 📊 Dashboard Overview
- 📈 View Holdings
- 💼 View Positions
- 🛒 Buy Stocks
- 💸 Sell Stocks
- ✏️ Edit Existing Orders
- 🗑️ Delete Orders
- 📡 RESTful API Integration
- 🍪 Cookie-based Authentication
- 📱 Responsive User Interface

---

## 🛠️ Tech Stack

| Layer                     | Technology                                                                                         |
|---------------------------|----------------------------------------------------------------------------------------------------|
| Frontend                  |  React.js, JavaScript, HTML5, CSS3, Axios |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT (JSON Web Token), Cookie Parser |
| API & Middleware | Express, CORS |
| Development Tools| VS Code, Git, GitHub |
| Deployment | Render |

---

## 📂 Project Structure

```bash
ZERODHA/
│
├── backend/
│   ├── middleware/
│   │   └── auth.js
│   ├── model/
│   │   ├── HoldingsModel.js
│   │   ├── OrdersModel.js
│   │   ├── PositionsModel.js
│   │   └── UserModel.js
│   ├── node_modules/
│   ├── schemas/
│   │   ├── HoldingsSchema.js
│   │   ├── OrdersSchema.js
│   │   └── PositionsSchema.js
│   ├── .env
│   ├── .gitignore
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
│   └── seed.js
│
├── dashboard/
│   ├── node_modules/
│   ├── public/
│   │   ├── images/
│   │   │   ├── pulse.png
│   │   │   └── varsity.png
│   │   ├── index.html
│   │   ├── logo.png
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   ├── Apps.css
│   │   │   ├── Apps.js
│   │   │   ├── BuyActionWindow.css
│   │   │   ├── BuyActionWindow.js
│   │   │   ├── Dashboard.js
│   │   │   ├── DoughnoutChart.js
│   │   │   ├── EditActionWindow.js
│   │   │   ├── Funds.js
│   │   │   ├── GeneralContext.js
│   │   │   ├── Holdings.js
│   │   │   ├── Home.js
│   │   │   ├── Menu.js
│   │   │   ├── Orders.js
│   │   │   ├── Positions.js
│   │   │   ├── SellActionWindow.js
│   │   │   ├── Summary.js
│   │   │   ├── TopBar.js
│   │   │   ├── VerticalGraph.js
│   │   │   └── WatchList.js
│   │   ├── data/
│   │   │   └── data.js
│   │   ├── index.css
│   │   └── index.js
│   ├── .gitignore
│   ├── package-lock.json
│   └── package.json
│
└── frontend/
    ├── node_modules/
    ├── public/
    │   ├── font-awesome-4.7.0/
    │   ├── media/
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    ├── src/
    │   ├── landing_page/
    │   │   ├── about/
    │   │   │   ├── AboutPage.js
    │   │   │   ├── Hero.js
    │   │   │   └── Team.js
    │   │   ├── home/
    │   │   │   ├── Awards.js
    │   │   │   ├── Education.js
    │   │   │   ├── Hero.js
    │   │   │   ├── HomePage.js
    │   │   │   ├── Pricing.js
    │   │   │   └── Stats.js
    │   │   ├── login/
    │   │   │   └── Login.js
    │   │   ├── pricing/
    │   │   │   ├── Brokerage.js
    │   │   │   ├── Hero.js
    │   │   │   └── PricingPage.js
    │   │   ├── products/
    │   │   │   ├── Hero.js
    │   │   │   ├── LeftSection.js
    │   │   │   ├── ProductsPage.js
    │   │   │   ├── RightSection.js
    │   │   │   └── Universe.js
    │   │   ├── signup/
    │   │   │   ├── Signup.js
    │   │   │   └── SupportPage.js
    │   │   └── support/
    │   │       ├── CreateTicket.js
    │   │       ├── Hero.js
    │   │       └── SupportPage.js
    │   ├── Footer.js
    │   ├── Navbar.js
    │   ├── NotFound.js
    │   ├── OpenAccount.js
    │   ├── index.css
    │   └── index.js
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md

```

---

## 🚀 Live Demo

🔗 **Live Website:**
(Add your deployed project link here)

---

## 🧩 Getting Started

Follow these steps to run Zerodha Clone locally on your system.

---

## ✅ Prerequisites

Make sure you have the following installed:

- **Node.js**
- **npm**
- **MongoDB**
  - Local MongoDB **OR**
  - MongoDB Atlas
- **Git**

Check versions:
```bash
node -v
npm -v
```
---

## ⚙️ Installation
1️⃣ **Clone the repository**
```bash
git clone https://github.com/SANCHITA-BAKALE-05/Zerodha-Clone.git
```

2️⃣ **Navigate to the project directory**
```bash
cd Zerodha-Clone
```

3️⃣ **Install Backend Dependencies**
```bash
cd backend
npm install
```

4️⃣ **Install Frontend Dependencies**
```bash
cd ../frontend
npm install
```

5️⃣ **Create a ".env" file inside the backend folder**
```bash
PORT=3002
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

⚠️ Do not commit ```.env``` to GitHub.

6️⃣ **Start the Backend Server**
```bash
cd backend
npm start
```
or
```bash
node app.js
```

7️⃣ **Start the Frontend**
```bash
cd frontend
npm start
```

8️⃣ **Open in Browser**

Frontend:
```bash
http://localhost:3001
```
Backend API:
```bash
http://localhost:3002
```

---

## 🔐 Authorization Rules

- **Only authenticated users can:**
  
  - View their dashboard
  - Buy stocks
  - Sell stocks
  - Edit orders
  - Delete orders

- **JWT tokens are used to:**
  
  - Verify user identity
  - Protect API routes
  - Maintain secure sessions

---

📌 API Endpoints

| Method | Endpoint | Description |
|---------------------------|-----------------------------|-----------------------------------------------------------------------|
| POST | "/login" | User Login |
| POST | "/logout"| User Logout |
| GET | "/allHoldings" | Get Holdings |
| GET | "/allPositions" | Get Positions |
| POST | "/newOrder" | Buy/Sell Stock |
| PUT | "/editOrder/:id" | Edit Order |
| DELETE | "/deleteOrder/:id" | Delete Order |

---

## 📌 Future Enhancements

- 📈 Live Stock Market Data
- ⭐ Watchlist Feature
- 🔍 Stock Search
- 📊 Interactive Charts
- 💹 Portfolio Analytics
- 🌙 Dark Mode
- 👤 User Profile Management
- 📱 Improved Mobile Experience

---

## 👩‍💻 Author

Developed by **Sanchita Bakale**

🔗 [LinkedIn](https://www.linkedin.com/in/sanchita-bakale/)
