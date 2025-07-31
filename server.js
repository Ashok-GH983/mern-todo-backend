require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const todos = require('./routes/todos');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB Atlas
connectDB();

// ✅ CORS Setup — Allow Netlify frontend to access backend
app.use(cors({
  origin: "*", // Change to your Netlify URL after frontend deployment
  methods: ["GET", "POST", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));

// Middleware
app.use(express.json());

// Routes
app.use('/api/todos', todos);

// Start server
app.listen(PORT, () => 
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
