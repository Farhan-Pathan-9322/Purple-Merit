const Route = require('../models/Route.model');

async function getAll(req, res) {
  res.json(await Route.find());
}
async function create(req, res) {
  const route = new Route(req.body);
  await route.save();
  res.json(route);
}
async function update(req, res) {
  res.json(await Route.findByIdAndUpdate(req.params.id, req.body, { new: true }));
}
async function remove(req, res) {
  await Route.findByIdAndDelete(req.params.id);
  res.json({ success: true });
}

module.exports = { getAll, create, update, remove };
