const express = require('express');
const session = require('express-session');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB } = require('./src/config/db');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, secure: false }
}));

// Routes
app.use('/api/auth', require('./src/routes/auth.routes'));
app.use('/api/drivers', require('./src/routes/drivers.routes'));
app.use('/api/routes', require('./src/routes/routes.routes'));
app.use('/api/orders', require('./src/routes/orders.routes'));
app.use('/api/simulations', require('./src/routes/simulation.routes'));  // Only once here

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
