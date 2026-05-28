const express = require("express");

const app = express();

const PORT = 3000;

// Home Route
app.get("/", (req, res) => {
<<<<<<< HEAD
    res.send("📚 Welcome to Route Master Bookstore");
});

// Books Route
app.get("/books", (req, res) => {
    const books = [
        {
            id: 1,
            title: "Harry Potter",
            author: "J.K. Rowling"
        },
        {
            id: 2,
            title: "Atomic Habits",
            author: "James Clear"
        },
        {
            id: 3,
            title: "The Alchemist",
            author: "Paulo Coelho"
        }
    ];

    res.json(books);
});

// Authors Route
app.get("/authors", (req, res) => {
    const authors = [
        "J.K. Rowling",
        "James Clear",
        "Paulo Coelho"
    ];

    res.json(authors);
});

// Single Book Route
app.get("/books/:id", (req, res) => {

    const bookId = req.params.id;

    res.send(`📖 Details for Book ID: ${bookId}`);
=======
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
>>>>>>> 6cbb6f14586c2f3fe10c27622818163315cbc5ac
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});