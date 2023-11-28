const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type:Number,
    min: [4, "password size is less"],
    required: true
  },
  role: {
    type: String,
    enum: ['customer', 'banker'],
    required: true,
  },
  accid:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
},
});

const User = mongoose.model('User', userSchema);

module.exports = User;
