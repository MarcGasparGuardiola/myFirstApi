const express = require('express');
const router = express.Router();

const s08Controller = require('../controllers/s08Controller');

const joiMiddleware = require('../middlewares/joiMiddleware')
const userSchemas = require('../models/joi/userSchemas');


router.get('/list', userController.list);
router.get('/profile/:userid?', userController.profile);

router.post('/create', joiMiddleware.validate(userSchemas.createUserSchema, 'body'),userController.create);

module.exports = router;