require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const userRouter = require('./src/endpoints/user/router');

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
};

connectToDatabase();

// Middleware
app.use(express.json());

// Use the user router
app.use('/', userRouter);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));