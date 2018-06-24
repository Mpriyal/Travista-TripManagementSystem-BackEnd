module.exports = function (app) {
    app.get('/api/hotel', findAllHotels);
    app.get('/api/hotel/:hotelId', findHotelById);
    app.post('/api/hotel', createHotel);
    app.put('/api/hotel', updateHotel);

    var hotelModel = require('../models/hotel/hotel.model.server');

    function findHotelById(req, res) {
        var id = req.params['hotelId'];
        hotelModel.findHotelById(id)
            .then(function (hotel) {
                res.json(hotel);
            })
    }

    function createHotel(req, res) {
        var hotel = req.body;
        hotelModel.findHotelByPropertyName(hotel.property_name)
            .then(function (count) {
                if(count === 0){
                    hotelModel.createHotel(hotel)
                }
                else{
                    res.send({Status: "Property name is taken"});
                }
            });
    }
    function updateHotel(req, res) {
        var hotel = req.body;
        hotelModel.updateHotel(hotel);
        res.send(200);
    }

    function findAllHotels(req, res) {
        hotelModel.findAllHotels()
            .then(function (hotels) {
                res.send(hotels);
            })
    }
}
