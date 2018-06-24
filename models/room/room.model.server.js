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

function updateRoom(room) {
    let u = roomModel.updateOne({_id: room._id}, room);
    return u;
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