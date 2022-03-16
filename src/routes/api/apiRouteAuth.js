const express = require('express');
const router = express.Router();

const authController = require('../../controllers/api/apiControllerAuth');
const token = require('../../../middleware/jwt')


router.get('/list', authController.list);
router.post('/login', token, authController.login)
router.post('/register', authController.register);

module.exports = router;