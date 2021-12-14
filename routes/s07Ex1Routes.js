const express = require('express');
const router = express.Router();

const s07Ex1 = require('../controllers/s07Ex1Controller');
const s07Ex1Middleware = require('../middlewares/s07Ex1Middleware');

router.get('/phones', s07Ex1.view);
router.post('/phone', s07Ex1Middleware.checkPhoneParams, s07Ex1.add);
router.delete('/phone/:id', s07Ex1.delete);
router.put('/phone/:id', s07Ex1.update);

module.exports = router;