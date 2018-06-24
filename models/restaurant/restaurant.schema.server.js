var mongoose = require('mongoose');

var restaurantSchema = mongoose.Schema({
    owners: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OwnerModel'
    },
    name: String,
    address: String,
    city: String,
    phone: Number,
    price: Number
}, {collection: 'restaurant'});

module.exports = restaurantSchema;