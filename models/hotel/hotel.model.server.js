var mongoose = require('mongoose');
var hotelSchema = require('./hotel.schema.server');
var hotelModel = mongoose.model('HotelModel', hotelSchema);

function createHotel(hotel) {
    return hotelModel.create(hotel);
}

function updateHotel(newHotel) {
    hotelModel.findById(newHotel._id, function (err, hotel) {
        hotel.ownerId = newHotel.ownerId;
        hotel.name = newHotel.name;
        hotel.location.latitude = newHotel.location.latitude;
        hotel.location.longitude = newHotel.location.longitude;
        hotel.address = newHotel.address;
        hotel.phone = newHotel.phone;
        hotel.customers = newHotel.customers;
        hotel.rate = newHotel.rate;
        hotel.save(function (err) {
            if (err) throw err;
        });
    });
}

function deleteHotel(hotelId) {
    return hotelModel.remove({_id: hotelId})
}

function findAllHotels() {
    return hotelModel.find();
}

function findHotelById(hotelId) {
    return hotelModel.findById(hotelId);
}

module.exports = {
    createHotel: createHotel,
    updateHotel: updateHotel,
    deleteHotel: deleteHotel,
    findAllHotels: findAllHotels,
    findHotelById: findHotelById
};