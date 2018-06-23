var mongoose = require('mongoose');

var carSchema = mongoose.Schema({
    description: String,
    address: String,
    vehicle_info: {
        transmission: String,
        fuel: String,
        air_conditioning: String,
        category: String,
        type: String
    },
    price: {
        type: String,
        amount: String,
        currency: String
    }
}, {collection: 'car'});

module.exports = carSchema;