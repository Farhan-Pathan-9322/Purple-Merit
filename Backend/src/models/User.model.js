const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  passwordHash: String,
  role: { type: String, default: 'manager' }
});

module.exports = mongoose.model('User', userSchema);
