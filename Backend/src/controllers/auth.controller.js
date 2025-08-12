const bcrypt = require('bcrypt');
const User = require('../models/User.model');

async function login(req, res) {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(401).json({ error: true, message: 'Invalid credentials' });
  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return res.status(401).json({ error: true, message: 'Invalid credentials' });
  req.session.user = { id: user._id, username: user.username, role: user.role };
  res.json({ success: true });
}

function logout(req, res) {
  req.session.destroy(() => res.json({ success: true }));
}

module.exports = { login, logout };
