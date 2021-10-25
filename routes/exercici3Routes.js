const express = require('express');
const router = express.Router();

const ex3Controller = require('../controllers/ex3Controller');

router.get('/factorial', ex3Controller.factorial);

module.exports = router;