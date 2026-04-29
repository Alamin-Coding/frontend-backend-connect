const {
  registration,
  verify,
  getAllUsers,
  login,
  createCustomer,
  getAllCustomers,
} = require("../controllers/auth.controllers");

const express = require("express");
const roleValidationMiddleware = require("../middleware/roleValidation.middleware");

const authRouter = express.Router();
// /api/v1/auth/register
authRouter.post("/register", registration);
authRouter.post("/login", login);
// verify email route
authRouter.get("/users", getAllUsers);
authRouter.get("/verify/:id", verify);
authRouter.post("/create-customer", roleValidationMiddleware, createCustomer);

// get all customers
authRouter.get("/customers", roleValidationMiddleware, getAllCustomers);

// customer editing 

// customer deleting



module.exports = authRouter;
