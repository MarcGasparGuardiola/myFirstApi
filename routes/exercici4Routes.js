const express = require('express');
const router = express.Router();

const ex4Controller = require('../controllers/ex4Controller');

router.post('/operar/:op', ex4Controller.operar);

module.exports = router;