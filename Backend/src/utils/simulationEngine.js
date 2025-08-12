// src/utils/simulationEngine.js

/**
 * Run the simulation based on orders, drivers, and routes data.
 * 
 * @param {Array} orders - List of orders
 * @param {Array} drivers - List of drivers
 * @param {Array} routes - List of routes
 * @returns {Object} KPIs summary object
 */
function runSimulation(orders, drivers, routes) {
  let totalProfit = 0;
  let onTime = 0;
  let late = 0;
  let fuelCostBreakdown = {};

  orders.forEach(order => {
    const driver = drivers.find(d => d._id?.toString() === order.driverId?.toString());
    if (!driver) return; // skip if driver not found

    const route = routes.find(r => r._id?.toString() === order.routeId?.toString());
    if (!route) return; // skip if route not found

    // Example profit calculation
    totalProfit += order.profit || 0;

    // Example on time or late delivery count
    if (order.deliveredOnTime) onTime++;
    else late++;

    // Fuel cost breakdown example (assumes order.fuelType and order.fuelCost exist)
    if (order.fuelType && order.fuelCost) {
      if (!fuelCostBreakdown[order.fuelType]) {
        fuelCostBreakdown[order.fuelType] = 0;
      }
      fuelCostBreakdown[order.fuelType] += order.fuelCost;
    }
  });

  // Calculate efficiency score as percentage of on-time deliveries
  const totalDeliveries = onTime + late;
  const efficiencyScore = totalDeliveries > 0 ? (onTime / totalDeliveries) * 100 : 0;

  return {
    KPIs: {
      totalProfit,
      efficiencyScore: Math.round(efficiencyScore * 100) / 100, // round to 2 decimals
      onTime,
      late,
      fuelCostBreakdown
    }
  };
}

module.exports = runSimulation;
