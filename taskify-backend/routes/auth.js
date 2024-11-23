const express = require('express');
const User = require('../models/User'); // Assuming User model exists for DB interaction
const bcrypt = require('bcryptjs'); // For password hashing
const router = express.Router();

// POST route for login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  console.log('Login request received:', { username, password }); // Log the incoming request data

  try {
    const user = await User.findOne({ username });
    if (!user) {
      console.log('User not found');
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log('Password mismatch');
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    console.log('Login successful');
    return res.status(200).json({ message: 'Login successful' });

  } catch (error) {
    console.error('Login error:', error);  // Log the error
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
