var mongoose = require('mongoose');

var hotelSchema = mongoose.Schema({
    latitude: Number,
    longitude: Number,
    name: String,
    
}, {collection: 'hotel'});

module.exports = hotelSchema;