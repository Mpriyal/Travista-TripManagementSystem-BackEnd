var mongoose = require('mongoose');

var customerSchema = mongoose.Schema({
    username: {type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    email: String,
    address: String,
    phoneNumber: String
}, {collection: 'customer'});

module.exports = customerSchema;


// hotel.location.latitude = newHotel.location.latitude;
        // hotel.location.longitude = newHotel.location.longitude;
        // hotel.address.line1 = newHotel.address.line1;
        // hotel.address.city = newHotel.address.city;
        // hotel.address.region = newHotel.address.region;
        // hotel.address.postal_code = newHotel.address.postal_code;
        // hotel.address.country = newHotel.address.country;
        // hotel.total_price.amount = newHotel.total_price.amount;
        // hotel.total_price.currency = newHotel.total_price.currency;
        // hotel.contacts.type = newHotel.contacts.type;
        // hotel.contacts.detail = newHotel.contacts.detail;
        // hotel.amenity = newHotel.amenity;
        // hotel.rooms.rates.start_date = newHotel.rooms.rates.start_date;
        // hotel.rooms.rates.end_date = newHotel.rooms.rates.end_date;
        // hotel.rooms.rates.currency_code = newHotel.rooms.rates.currency_code;
        // hotel.rooms.rates.price = newHotel.rooms.rates.price;