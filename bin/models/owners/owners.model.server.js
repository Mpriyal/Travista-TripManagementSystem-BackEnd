var mongoose = require('mongoose');
var ownersSchema = require('./owners.schema.server');
var ownersModel = mongoose.model('OwnerModel', ownersSchema);

function findOwnerByCredentials(credentials) {
    return ownersModel.findOne(credentials, {username: 1});
}

function findOwnerById(ownerId) {
    return ownerModel.findById(ownerId);
}

function createOwner(owner) {
    return ownersModel.create(owner);
}

function updateOwner(newowner) {
    ownersModel.findById(newowner.ownerId, function (err, owner) {
        owner.username = newowner.username;
        owner.lastName = newowner.lastName;
        owner.firstName = newowner.firstName;
        owner.email = newowner.email;
        owner.address = newowner.address;
        owner.phoneNumber = newowner.phoneNumber;
        owner.save(function (err) {
            if (err) throw err;
        });
    });
}

function findCustomerByCustomername(username) {
    return ownersModel.count({username: username});
}

function findAllCustomers() {
    return ownersModel.find();
}

var api = {
    createOwner: createOwner,
    updateOwner: updateOwner,
    findAllCustomers: findAllCustomers,
    findOwnerById: findOwnerById,
    findOwnerByCredentials: findOwnerByCredentials,
    findCustomerByCustomername: findCustomerByCustomername,
};

module.exports = api;