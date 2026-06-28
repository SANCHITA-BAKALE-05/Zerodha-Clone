const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  console.log("Auth middleware called");

  console.log("Cookies:", req.cookies);

  const token = req.cookies.token;
  console.log("Token:", token);

  try {
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Please login first",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded:", decoded);

    req.user = decoded;
    next();
  } catch (err) {
    console.log("JWT Error:", err.message);

    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};

module.exports = auth;