const mongoose = require('mongoose');
require('dotenv').config()

const mongoURI = process.env.DB_CONNECTION_STRING

const connectToMongoose = async() =>{
    await mongoose.connect(mongoURI);
    console.log("connected to mongo successfully")
}

module.exports = connectToMongoose;