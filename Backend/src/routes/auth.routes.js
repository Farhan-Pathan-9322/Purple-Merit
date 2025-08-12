const router = require('express').Router();
const { login, logout } = require('../controllers/auth.controller');

router.post('/login', login);
router.post('/logout', logout);

module.exports = router;
