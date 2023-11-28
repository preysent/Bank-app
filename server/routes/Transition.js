const express = require('express');
const router = express.Router();
const getUserId = require('../utils/getUserId');
const { transform } = require('../controllers/transition');

router.post('/', getUserId, transform);



module.exports = router;
