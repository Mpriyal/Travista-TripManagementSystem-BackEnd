var mongoose = require('mongoose');
var carSchema = require('./car.schema.server');
var carModel = mongoose.model('CarModel', carSchema);

function findCarById(carId) {
    return carModel.findById(carId);
}

function createCar(car) {
    return carModel.create(car);
}

function updateCar(newCar) {
    carModel.findById(newCar._id, function (err, car) {
        car.description = newCar.description;
        car.address = newCar.address;
       car.vehicle_info.transmission = newCar.vehicle_info.transmission;
        car.vehicle_info.fuel = newCar.vehicle_info.fuel;
        car.vehicle_info.air_conditioning = newCar.vehicle_info.air_conditioning;
        car.vehicle_info.category = newCar.vehicle_info.category;
        car.vehicle_info.type = newCar.vehicle_info.type;
        car.price.type = newCar.price.type;
        car.price.amount = newCar.price.amount;
        car.price.currency = newCar.price.currency;
        car.save(function (err) {
            if (err) throw err;
        });
    });
}

// function findCarByName(name) {
//     return carModel.count({property_name: name});
// }

function findAllCars() {
    return carModel.find();
}

var api = {
    createCar: createCar,
    updateCar: updateCar,
    findAllCars: findAllCars,
    findCarById: findCarById
};

module.exports = api;