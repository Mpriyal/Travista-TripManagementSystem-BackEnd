module.exports = function (app) {
    app.get('/api/restaurant', findAllRestaurants);
    app.get('/api/restaurant/:restaurantId', findRestaurantById);
    app.post('/api/restaurant', createRestaurant);
    app.get('/api/restaurant/owner/:ownerId', findRestaurantByOwnerId);
    app.delete('/api/restaurant/:restaurantId', deleteRestaurant);
    app.put('/api/restaurant/:restaurantId', updateRestaurant);

    var restaurantModel = require('../models/restaurant/restaurant.model.server');

    function findRestaurantById(req, res) {
        var id = req.params['restaurantId'];
        restaurantModel.findRestaurantById(id)
            .then(function (restaurant) {
                res.json(restaurant);
            })
    }

    function findRestaurantByOwnerId(req, res) {
        var id = req.params['ownerId'];
        console.log(id);
        restaurantModel.findRestaurantByOwnerId(id)
            .then(function (restaurant) {
                console.log(restaurant);
                res.json(restaurant);
            })
    }
    function createRestaurant(req, res) {
        var restaurant = req.body;
                    restaurantModel.createRestaurant(restaurant)
                        .then(function (restaurant) {
                            req.session['currentRestaurant'] = restaurant;
                            res.send(restaurant);
                        })
    }
    function updateRestaurant(req, res) {
        var restaurant = req.body;
        restaurantModel.updateRestaurant(restaurant);
        res.send(200);
    }
    function deleteRestaurant(req, res) {
        var restaurantId = req.params['restaurantId'];
        console.log(restaurantId + "#!@#!!@#!231")
        restaurantModel.deleteRestaurant(restaurantId)
            .then(function (restaurants) {
                res.json(restaurants);
            })
    }
    function findAllRestaurants(req, res) {
        restaurantModel.findAllRestaurants()
            .then(function (restaurants) {
                res.send(restaurants);
            })
    }
}
