module.exports = function (app) {

    app.get('/api/hotel', findAllHotels);
    app.get('/api/hotel/:hotelId', findHotelById);
    app.get('/api/car/owner/:ownerId', findHotelByOwnerId);
    app.post('/api/hotel', createHotel);
    app.get('/api/hotel/city/:city', findHotelByCity);
    app.put('/api/hotel/:hotelId', updateHotel);
    app.delete('/api/hotel/:hotelId', deleteHotel);

    var hotelModel = require('../models/hotel/hotel.model.server');

    function createHotel(req, res) {
        var ownerId = req.params['ownerId'];
        var hotel = req.body;
        hotelModel.createHotel(hotel,ownerId)
            .then(function (hotel) {
                res.json(hotel);
            })
    }
    function findHotelByOwnerId(req, res) {
        var id = req.params['ownerId'];
        hotelModel.findHotelByOwnerId(id)
            .then(function (car) {
                res.json(car);
            })
    }
    function updateHotel(req, res) {
        var hotel = req.body;
        hotelModel.updateHotel(hotel);
        res.send(200);
    }

    function deleteHotel(req, res) {
        var hotelId = req.params['hotelId'];
        hotelModel.deleteHotel(hotelId)
            .then(function (hotels) {
                res.json(hotels);
            })
    }

    function findAllHotels(req, res) {
        hotelModel.findAllHotels()
            .then(function (hotels) {
                res.send(hotels);
            })
    }

    function findHotelById(req, res) {
        var id = req.params['hotelId'];
        hotelModel.findHotelById(id)
            .then(function (hotel) {
                res.json(hotel);
            })
    }

    function findHotelByCity(req, res) {
        var city = req.params['city'];
        hotelModel.findHotelByCity(city)
            .then(function (hotel) {
                res.json(hotel);
            })
    }
};