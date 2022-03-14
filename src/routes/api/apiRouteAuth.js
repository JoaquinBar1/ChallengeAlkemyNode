const express = require('express');
const authController = require('../../controllers/api/apiControllerAuth');
const router = express.Router();

const authTokenController = require('../../controllers/api/apiControllerAuth')


router.get('/list', authController.list);
router.post('/login', authTokenController.login)
router.post('/register', authTokenController.register);

module.exports = router;