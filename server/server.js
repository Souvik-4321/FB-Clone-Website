const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDatabase = require("./config/database");

const app = express();


// =========================
// Connect MongoDB
// =========================

connectDatabase();


// =========================
// Middleware
// =========================

app.use(cors());

app.use(express.json());


// =========================
// Home Route
// =========================

app.get("/", (req, res) => {

    res.send("FB Clone Backend is Running!");

});


// =========================
// Test API
// =========================

app.get("/api/test", (req, res) => {

    res.json({
        success: true,
        message: "FB Clone API is working!"
    });

});


// =========================
// Server
// =========================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});
