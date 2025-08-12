const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  routeId: String,
  distanceKm: Number,
  trafficLevel: { type: String, enum: ['Low', 'Medium', 'High'] },
  baseTimeMinutes: Number
});

module.exports = mongoose.model('Route', routeSchema);
