
const User = require('../models/User');
const Account = require('../models/Accounts');
var jwt = require('jsonwebtoken');

exports.loginUser = async (req, res) => {
    try {
  
      let newUser = await User.findOne({ ...req.body })
  
  
      if (!newUser) {
  
        newUser = await User.create(req.body);
  
        const accountNumber = Date.now() * 3118
        const user = newUser._id
        const account = await Account.create({ accountNumber, user })
  
        newUser.accid = account._id
        await newUser.save()
  
      }
  
  
      const authToken = jwt.sign({ id: newUser._id }, process.env.JWT_STRING)
  
      res.status(201).json({ authToken });
  
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  exports.getUser = async (req, res) => {
    try {
  
      const user = await User.findById(req.user).populate("accid");
  
      res.status(200).json(user);
  
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  exports.getAllUser = async (req, res) => {
    try {
  
      const banker = await User.findById(req.user)
      if (banker.role !== "banker")
        res.status(400).json({ error: 'invalid tokne' });
  
      const user = await User.find().populate("accid");
  
      res.status(200).json(user);
  
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }