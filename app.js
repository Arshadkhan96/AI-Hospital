const express = require("express");
const cors = require("cors"); // ✅ Add this
const cookieParser = require("cookie-parser");

const app = express();
const authRoute = require("./routes/authRoutes");

require("dotenv").config(); // ✅ Also add this to load environment variables

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use("/api/auth", authRoute);

module.exports = app;
