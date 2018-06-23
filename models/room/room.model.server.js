var mongoose = require('mongoose');
var roomSchema = require('./room.schema.server');
var roomModel = mongoose.model('RoomModel', roomSchema);

function findRoomById(roomId) {
    return roomModel.findById(roomId);
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

// function findRoomByPropertyName(propertyName) {
//     return roomModel.count({property_name: propertyName});
// }

function findAllRooms() {
    return roomModel.find();
}

var api = {
    createRoom: createRoom,
    updateRoom: updateRoom,
    findAllRooms: findAllRooms,
    findRoomById: findRoomById
};

module.exports = api;