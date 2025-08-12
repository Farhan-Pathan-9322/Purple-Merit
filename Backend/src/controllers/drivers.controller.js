const Driver = require('../models/Driver.model');

async function getAll(req, res) {
  res.json(await Driver.find());
}
async function create(req, res) {
  const driver = new Driver(req.body);
  await driver.save();
  res.json(driver);
}
async function update(req, res) {
  res.json(await Driver.findByIdAndUpdate(req.params.id, req.body, { new: true }));
}
async function remove(req, res) {
  await Driver.findByIdAndDelete(req.params.id);
  res.json({ success: true });
}

module.exports = { getAll, create, update, remove };
