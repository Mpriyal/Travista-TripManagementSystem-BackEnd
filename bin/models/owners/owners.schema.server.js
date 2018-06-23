var mongoose = require('mongoose');

var hotelOwnerSchema = mongoose.Schema({
    username: {type: String, unique: true},
    password: String,
    firstName: String,
    dateOfBirth: Date,
    lastName: String,
    email: String,
    address: String,
    phoneNumber: String,
    typeOfBusiness: {
        type: String,
        enum: ['HOTEL', 'RESTAURANT', 'CAR'],
        default: 'HOTEL'
    },
    businessName: String
}, {collection: 'owners'});

module.exports = hotelOwnerSchema;