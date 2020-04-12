const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Defining a user schema
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
date: {
    type: Date,
  defualt: Date.now
}
});




const User = mongoose.model('User', userSchema);
module.exports = User;