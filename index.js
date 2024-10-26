require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const app = express();

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err);
  }
};

connectToDatabase();

// Middleware
app.use(express.json());

// Simple route
app.get('/', (req, res) => {
  res.send('Cognition Compass API');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));