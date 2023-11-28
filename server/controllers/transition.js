
const User = require('../models/User');
const Account = require('../models/Accounts');

exports.transform = async (req, res) => {
    try {
  
      const body = req.body
      const id = req.user
      const account = await Account.findOne({ user: id })
  
      const amount = body.amount
  
      if (amount < 0) { res.status(400).json({ error: "invalid amount" }) }
  
      if (body.action === 'withdraw') {
        if (account.balance >= amount) {
          account.balance -= Number(amount);
          account.transactions.push({ type: "withdraw", amount: amount });
        } else {
          return res.status(400).json({ error: 'Insufficient funds' });
        }
      }
  
  
      else if (body.action === 'deposit') {
        account.balance += Number(amount);
        account.transactions.push({ type: "deposit", amount: amount });
      } else {
        return res.status(400).json({ error: 'Invalid action' });
      }
  
      await account.save();
  
      res.status(201).json(account);
  
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }