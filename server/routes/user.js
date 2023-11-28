const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Account = require('../models/Accounts');
var jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    const accountNumber = Date.now()*3118
    const user = newUser._id

    await Account.create({accountNumber, user})

    const authToken = jwt.sign({id:newUser._id}, process.env.JWT_STRING)

    

    res.status(201).json({authToken});
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
