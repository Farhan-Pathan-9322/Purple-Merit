const Driver = require('../models/Driver.model');
const Route = require('../models/Route.model');
const Order = require('../models/Order.model');

const runSimulation = require('../utils/simulationEngine');

async function latest(req, res) {
  try {
    const drivers = await Driver.find();
    const routes = await Route.find();
    const orders = await Order.find();

    const result = runSimulation(orders, drivers, routes);
    res.json(result);
  } catch (error) {
    console.error("Error in latest simulation:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { latest };
