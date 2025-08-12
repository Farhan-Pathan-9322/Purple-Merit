const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderId: String,
  valueRs: Number,
  assignedRouteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Route' },
  deliveryTimestamp: Date,
  status: { type: String, enum: ['pending', 'on_time', 'late'], default: 'pending' }
});

module.exports = mongoose.model('Order', orderSchema);
