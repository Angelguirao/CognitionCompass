const express = require('express');
const router = express.Router();
const User = require('../../common/dbModels/schemas/user');

// Get all users
router.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// Get a user by ID
router.get('/users/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
});

// Create a new user
router.post('/users', async (req, res) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
});

// Update a user
router.put('/users/:id', async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedUser);
});

// Delete a user
router.delete('/users/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).end();
});

module.exports = router;
