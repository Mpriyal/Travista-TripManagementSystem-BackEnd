var mongoose = require('mongoose');

var ownersSchema = mongoose.Schema({
    username: {type: String, unique: true},
    password: String,
    firstName: String,
    dateOfBirth: Date,
    lastName: String,
    email: String,
    address: String,
    phoneNumber: String
}, {collection: 'owners'});

module.exports = ownersSchema;