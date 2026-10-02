require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());

const JWT_SECRET = process.env.JWT_SECRET || "secretKey";

app.get("/", (req, res) => {
  res.send("API is running...");
});


//Register route
app.post("/api/register", async (req, res) => {
  const { email, password, username } = req.body;

  try {
    // 1. Hash the user's password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 2. Save into PostgreSQL using Prisma
    const user = await prisma.user.create({
      data: {
        email: email,
        username: username ,
        passwordHash: hashedPassword,
      },
    });

    res.json({ message: "User registered successfully", userId: user.id });
  } catch (error) {
    res.status(400).json({ error: "Email or username already exists" });
  }
});


// Login route
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  try{
    //find user in the database
    const user = await prisma.user.findUnique({
      where: {email: email},
    });
    
    if(!user){
      return res.status(401).json({error: "User not found"});
    }
    
    //Check if the password matches the hashed password
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if(!isMatch){
      return res.status(401).json({error: "Wrong Password"});
    }

    //issue JWT with the user's info
    const token = jwt.sign({ userId: user.id, email: user.email}, JWT_SECRET,{ expiresIn: "1h",});

    res.json({ message: "Login successful", token });
  } catch(error){
    res.status(500).json({ error: "Login failed"});
  }
});

// Protected route
app.get("/api/profile", async (req, res) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ message: "No token" });

  const token = authHeader.startsWith("Bearer ")
    ? authHeader.slice(7)
    : authHeader;

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    // Fetch full user record from Postgres
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        username: true,
        email: true,
        bio: true,
        avatarUrl: true,
        createdAt: true,
      },
    });

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: `Welcome ${user.username}`, user });
  } catch {
    res.status(403).json({ message: "Invalid token" });
  }
});

// Get all posts (Feed)
app.get("/api/posts", async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        user: { select: { id: true, username: true, avatarUrl: true } },
        likes: true,
        comments: {
          include: { user: { select: { username: true } } },
        },
      },
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch feed" });
  }
});

app.listen(4000, () => console.log("Server running on http://localhost:4000"));
