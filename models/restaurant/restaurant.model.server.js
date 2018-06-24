var mongoose = require('mongoose');
var restaurantSchema = require('./restaurant.schema.server');
var restaurantModel = mongoose.model('RestaurantModel', restaurantSchema);

function findRestaurantById(restaurantId) {
    return restaurantModel.findById(restaurantId);
}

function createRestaurant(restaurant) {
    return restaurantModel.create(restaurant);
}
function deleteRestaurant(restaurantId) {
    console.log(restaurantId + "#!@#!!@#!231")
    return restaurantModel.remove({_id: restaurantId})
}

function updateRestaurant(newRestaurant) {
    restaurantModel.findById(newRestaurant._id, function (err, restaurant) {
        restaurant.name = newRestaurant.name;
        restaurant.address = newRestaurant.address;
        restaurant.city = newRestaurant.city;
        restaurant.phone = newRestaurant.phone;
        restaurant.price = newRestaurant.price;
        restaurant.save(function (err) {
            if (err) throw err;
        });
    });
}

function findRestaurantByName(name) {
    return restaurantModel.count({name: name});
}

function findAllRestaurants() {
    return restaurantModel.find();
}

var api = {
    createRestaurant: createRestaurant,
    deleteRestaurant: deleteRestaurant,
    updateRestaurant: updateRestaurant,
    findAllRestaurants: findAllRestaurants,
    findRestaurantById: findRestaurantById,
    findRestaurantByName: findRestaurantByName,
};

module.exports = api;