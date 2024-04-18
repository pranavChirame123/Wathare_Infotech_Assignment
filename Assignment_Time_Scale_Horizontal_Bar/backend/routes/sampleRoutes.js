const express = require('express');
const router = express.Router();
const Sample = require('../models/sample'); // Import the Sample model

// Route to fetch all sample data
router.get('/', async (req, res) => {
  try {
    const samples = await Sample.find({}); // Fetch all documents from the Sample collection
    res.json(samples); // Send the fetched data as JSON response
  } catch (error) {
    console.error('Error fetching sample data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Export the router
module.exports = router;
