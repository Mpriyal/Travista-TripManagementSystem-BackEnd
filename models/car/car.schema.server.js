var mongoose = require('mongoose');

var carSchema = mongoose.Schema({
    owners: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OwnerModel'
    },
    description: String,
    address: String,
    transmission: String,
    fuel: String,
    air_conditioning: String,
    category: String,
    type: String,
    rate: Number
    }, {collection: 'car'});

module.exports = carSchema;