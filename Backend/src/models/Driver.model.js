const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  name: String,
  currentShiftHours: Number,
  past7DaysHours: [Number],
  isActive: Boolean
});

module.exports = mongoose.model('Driver', driverSchema);
