require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const todos = require('./routes/todos');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// ✅ Fix CORS for Netlify
app.use(cors({
  origin: "https://boisterous-sunshine-b30dc1.netlify.app",
  methods: ["GET", "POST", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

// Routes
app.use('/api/todos', todos);

// ✅ Add a root route to confirm server is running
app.get("/", (req, res) => {
  res.send("✅ Backend is running and connected to MongoDB!");
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
