const express = require('express');
const router = express.Router();

const s06Ex2Controller = require('../controllers/s06Ex2Controller');
const s06Ex2Middleware = require('../middlewares/s06Ex2Middleware');

router.put('/safe', s06Ex2Middleware.checkStringInBody, s06Ex2Controller.operar);

module.exports = router;