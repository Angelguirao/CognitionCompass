require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const userRouter = require('./src/endpoints/user/router');

// Database connection
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

// Connect to the database
connectToDatabase();

// Middleware
app.use(express.json());

// Base route
app.get('/', (req, res) => res.send('Hello from Serverless Express!'))

// Use the user router
app.use('/', userRouter);

// Export the app wrapped in serverless for AWS Lambda
module.exports.handler = serverless(app);
