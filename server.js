const express = require("express");

const app = express();

const PORT = 3000;

// Home Route
app.get("/", (req, res) => {
    res.send("🏠 Welcome to Hello Server");
});

// About Route
app.get("/about", (req, res) => {
    res.send("ℹ️ This is the About Page");
});

// Contact Route
app.get("/contact", (req, res) => {
    res.send("📞 Contact us at example@gmail.com");
});

// Services Route
app.get("/services", (req, res) => {
    res.send("🛠️ Our services include Web Development");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});