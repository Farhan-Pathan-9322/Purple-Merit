const Order = require('../models/Order.model');

async function getAll(req, res) {
  res.json(await Order.find().populate('assignedRouteId'));
}
async function create(req, res) {
  const order = new Order(req.body);
  await order.save();
  res.json(order);
}
async function update(req, res) {
  res.json(await Order.findByIdAndUpdate(req.params.id, req.body, { new: true }));
}
async function remove(req, res) {
  await Order.findByIdAndDelete(req.params.id);
  res.json({ success: true });
}

module.exports = { getAll, create, update, remove };
