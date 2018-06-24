var mongoose = require('mongoose');
var ownersSchema = require('./owners.schema.server');
var ownersModel = mongoose.model('OwnerModel', ownersSchema);

function createOwner(owner) {
    return ownersModel.create(owner);
}

function updateOwner(newOwner) {
    ownersModel.findById(newOwner._id, function (err, owner) {
        owner.username = newOwner.username;
        owner.lastName = newOwner.lastName;
        owner.firstName = newOwner.firstName;
        owner.email = newOwner.email;
        owner.address = newOwner.address;
        owner.phoneNumber = newOwner.phoneNumber;
        owner.typeOfBusiness = newOwner.typeOfBusiness;
        owner.businessName = newOwner.businessName;
        owner.business = newOwner.business;
        owner.save(function (err) {
            if (err) throw err;
        });
    });
}

function deleteOwner(ownerId) {
    return ownersModel.remove({_id: ownerId})
}

function findOwnerByCredentials(credentials) {
    return ownersModel.findOne(credentials, {username: 1});
}

function findOwnerById(ownerId) {
    return ownerModel.findById(ownerId);
}

function findOwnerByUsername(username) {
    return ownersModel.count({username: username});
}

function findAllOwners() {
    return ownersModel.find();
}

var api = {
    createOwner: createOwner,
    updateOwner: updateOwner,
    findAllOwners: findAllOwners,
    findOwnerById: findOwnerById,
    findOwnerByCredentials: findOwnerByCredentials,
    findOwnerByUsername: findOwnerByUsername,
    deleteOwner: deleteOwner
};

module.exports = api;