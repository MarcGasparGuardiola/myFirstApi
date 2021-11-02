const express = require('express');
const router = express.Router();

const s06Ex1Controller = require('../controllers/s06Ex1Controller');
const s06Ex1Middleware = require('../middlewares/s06Ex1Middleware');

router.get('/aleatori',s06Ex1Middleware.checkGreaterThanOne, s06Ex1Controller.aleatori);

module.exports = router;