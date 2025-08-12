const router = require('express').Router();
const ctrl = require('../controllers/simulation.controller');

router.get('/latest', ctrl.latest);

module.exports = router;
