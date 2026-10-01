const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});



// Register route
app.post("/api/register", async (req, res) => {
  const { email, password } = req.body;
  const bcrypt = require("bcryptjs");
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("New user registered:", req.body.email);
  console.log("Hashed password:", hashedPassword);
  // hash password, save user
  res.json({ message: "User registered successfully" });
});

// Login route
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  // check user, issue JWT
  res.json({ message: "Login successful", token: "abc123" });
});

// Protected route
app.get("/api/profile", (req, res) => {
  // verify token
  res.json({ message: "Welcome to your profile" });
});
app.listen(4000, () => console.log("Server running on http://localhost:4000"));
