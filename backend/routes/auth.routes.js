const { registration, verify } = require("../controllers/auth.controllers");

const express = require("express")

const authRouter = express.Router();
// /api/v1/auth/register
authRouter.post('/register', registration)
// verify email route
authRouter.get('/verify/:id', verify)



module.exports = authRouter;