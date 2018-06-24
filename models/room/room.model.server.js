var mongoose = require('mongoose');
var roomSchema = require('./room.schema.server');
var roomModel = mongoose.model('RoomModel', roomSchema);

function findRoomById(roomId) {
    return roomModel.findById(roomId);
}

function findAllRooms() {
    return roomModel.find();
}

function findRoomsForHotel(hotelId) {
    return roomModel.find({hotelId: hotelId});
}

function createRoom(room) {
    return roomModel.create(room);
}

function updateRoom(newRoom) {
    roomModel.findById(newRoom._id, function (err, room) {
        room.pricePerDay = newRoom.pricePerDay;
        room.currency_code = newRoom.currency_code;
        room.room_type = newRoom.room_type;
        room.bed_type = newRoom.bed_type;
        room.number_of_beds = newRoom.number_of_beds;
        room.descriptions = newRoom.descriptions;
        room.save(function (err) {
            if (err) throw err;
        });
    });
}

function deleteRoom(roomId) {
    return roomModel.remove({_id: roomId})
}

var api = {
    createRoom: createRoom,
    updateRoom: updateRoom,
    deleteRoom: deleteRoom,
    findAllRooms: findAllRooms,
    findRoomById: findRoomById,
    findRoomsForHotel: findRoomsForHotel
};

module.exports = api;