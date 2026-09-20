const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();


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
app.get("/api/users", (req, res) => {

    const users = [
        {
            id: 1,
            name: "Souvik Sadhu"
        },
        {
            id: 2,
            name: "Rahul"
        },
        {
            id: 3,
            name: "Ankit"
        }
    ];

    res.json(users);

});

app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});
