var mongoose = require('mongoose');

var roomSchema = mongoose.Schema({

    pricePerDay: Number,
    currency_code: String,
    room_type: String,
    bed_type: String,
    number_of_beds: Number,
    descriptions: [String]
}, {collection: 'room'});

module.exports = roomSchema;