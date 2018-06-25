module.exports = function (app) {
    app.get('/api/car', findAllCars);
    app.get('/api/car/:carId', findCarById);
    app.post('/api/car', createCar);
    app.put('/api/car/:carId', updateCar);
    app.delete('/api/car/:carId', deleteCar);


    var carModel = require('../models/car/car.model.server');

    function findCarById(req, res) {
        var id = req.params['carId'];
        carModel.findCarById(id)
            .then(function (car) {
                res.json(car);
            })
    }

    function deleteCar(req, res) {
        var carId = req.params['carId'];
        carModel.deleteCar(carId)
            .then(function (cars) {
                res.json(cars);
            })
    }

    function createCar(req, res) {
        var car = req.body;
        carModel.createCar(car)
            .then(function (car) {
                res.json(car);
            })
    }

    function updateCar(req, res) {
        var car = req.body;
        carModel.updateCar(car);
        res.send(200);
    }

    function findAllCars(req, res) {
        carModel.findAllCars()
            .then(function (cars) {
                res.send(cars);
            })
    }
}
