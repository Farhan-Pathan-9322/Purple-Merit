const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
dotenv.config();

const Driver = require('../src/models/Driver.model');
const Route = require('../src/models/Route.model');
const Order = require('../src/models/Order.model');
const User = require('../src/models/User.model');

(async () => {
  await mongoose.connect(process.env.MONGODB_URI);

  await User.deleteMany({});
  await Driver.deleteMany({});
  await Route.deleteMany({});
  await Order.deleteMany({});

  const passwordHash = await bcrypt.hash('admin123', 10);
  await User.create({ username: 'admin', passwordHash, role: 'manager' });

  const routes = await Route.insertMany([
    { routeId: 'R001', distanceKm: 20, trafficLevel: 'Low', baseTimeMinutes: 40 },
    { routeId: 'R002', distanceKm: 15, trafficLevel: 'High', baseTimeMinutes: 35 }
  ]);

  await Driver.insertMany([
    { name: 'Driver 1', currentShiftHours: 0, past7DaysHours: [8,7,6,5,8,9,7], isActive: true },
    { name: 'Driver 2', currentShiftHours: 0, past7DaysHours: [5,6,7,8,8,7,6], isActive: true }
  ]);

  await Order.insertMany([
    { orderId: 'O001', valueRs: 1200, assignedRouteId: routes[0]._id, deliveryTimestamp: new Date(), status: 'pending' },
    { orderId: 'O002', valueRs: 800, assignedRouteId: routes[1]._id, deliveryTimestamp: new Date(), status: 'pending' }
  ]);

  console.log('✅ Seed data inserted');
  mongoose.disconnect();
})();
