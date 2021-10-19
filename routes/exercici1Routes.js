const express = require('express');
const router = express.Router();

const ex1Controller = require('../controllers/ex1Controller');

router.get('/time', ex1Controller.getTime);
router.get('/date', ex1Controller.getDate);
router.get('/hour', ex1Controller.getHour);

module.exports = router;