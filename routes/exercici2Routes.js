const express = require('express');
const router = express.Router();

const ex2Controller = require('../controllers/ex2Controller');

router.get('/mult2', ex2Controller.mult2);
router.get('/mult3', ex2Controller.mult3);
router.get('/mult4', ex2Controller.mult4);
router.get('/mult5', ex2Controller.mult5);


module.exports = router;