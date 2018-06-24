var mongoose = require('mongoose');
var hotelSchema = require('./hotel.schema.server');
var hotelModel = mongoose.model('HotelModel', hotelSchema);

function createHotel(hotel) {
    return hotelModel.create(hotel);
}

function updateHotel(hotel) {
    let u = hotelModel.updateOne({_id: hotel._id}, hotel);
    return u;
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