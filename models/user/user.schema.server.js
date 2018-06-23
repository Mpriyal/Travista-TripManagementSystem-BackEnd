var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: {type: String, unique: true},
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  address: String,
  phoneNumber: String,
  role: String
}, {collection: 'user'});

module.exports = userSchema;