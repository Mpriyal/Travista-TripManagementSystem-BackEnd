var mongoose = require('mongoose');
var carSchema = require('./car.schema.server');
var carModel = mongoose.model('CarModel', carSchema);

function findCarById(carId) {
    return carModel.findById(carId);
}

function createCar(car) {
    return carModel.create(car);
}

function deleteCar(carId) {
    return carModel.remove({_id: carId})
}

function updateCar(newCar) {
    carModel.findById(newCar._id, function (err, car) {
        car.address = newCar.address;
        car.transmission = newCar.transmission;
        car.fuel = newCar.fuel;
        car.air_conditioning = newCar.air_conditioning;
        car.category = newCar.category;
        car.type = newCar.type;
        car.rate = newCar.rate;
        car.start_date = newCar.start_date;
        car.end_date = newCar.end_date;
        car.save(function (err) {
            if (err) throw err;
        });
    });
}
function findCarByOwnerId(ownerId) {
    return carModel.find({owners: ownerId});
}

function findAllCars() {
    return carModel.find();
}

var api = {
    createCar: createCar,
    updateCar: updateCar,
    deleteCar: deleteCar,
    findAllCars: findAllCars,
    findCarById: findCarById,
    findCarByOwnerId: findCarByOwnerId
};

module.exports = api;