const mongoose = require('mongoose');

// Define the schema for sample data
const sampleSchema = new mongoose.Schema({
  ts: { type: Date, required: true }, // Timestamp
  machine_status: { type: Number, required: true }, // Machine status (0 or 1)
  vibration: { type: Number, required: true } // Vibration value
});

// Create a Mongoose model based on the schema
const Sample = mongoose.model('Sample', sampleSchema);

// Export the model
module.exports = Sample;
