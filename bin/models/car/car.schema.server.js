var mongoose = require('mongoose');

var carSchema = mongoose.Schema({
    name: String,
    model: String,
    age: Number,
    price: String
}, {collection: 'car'});

module.exports = carSchema;