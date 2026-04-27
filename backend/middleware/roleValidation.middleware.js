const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const roleValidationMiddleware = async (req, res, next) => {
  const url = req.url;
  const token = req.headers.authorization.split(" ")[1];

  const decodedToken = jwt.verify(token, process.env.ACCESS_SECRET);

  const user = await User.findOne({ _id: decodedToken.id });



  if (user.role === "admin") {
    next();
  } else {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }

};

module.exports = roleValidationMiddleware;
