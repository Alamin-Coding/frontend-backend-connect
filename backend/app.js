const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const authRouter = require("./routes/auth.routes");
const cookieParser = require("cookie-parser");
const dbConnect = require("./config/db.config");
const cors = require("cors");

app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
	}),
);
app.use(cookieParser());
app.use(express.json());
app.use("/api/v1/auth", authRouter);

app.get("/", (req, res) => {
	res.send("Hello, World!");
});

dbConnect();

module.exports = app;
