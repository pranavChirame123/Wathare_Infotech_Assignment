// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/my_Database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Sample Schema
const sampleSchema = new mongoose.Schema({
  ts: Date,
  machine_status: Number,
  vibration: Number,
});

const SampleModel = mongoose.model('Sample', sampleSchema);

// Route to fetch all documents
app.get('/api/sampledata', async (req, res) => {
  try {
    const data = await SampleModel.find({});
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Serve React frontend (assuming it's built and located in the 'client/build' directory)
app.use(express.static('client/build'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
