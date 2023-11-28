const express = require('express');
const router = express.Router();
const loginValidation = require('../utils/loginValidation');
const getUserId = require("../utils/getUserId");
const { loginUser, getUser, getAllUser } = require('../controllers/user');

router.post('/', loginValidation, loginUser);

router.get('/', getUserId, getUser );

router.get('/all', getUserId, getAllUser );

module.exports = router;
