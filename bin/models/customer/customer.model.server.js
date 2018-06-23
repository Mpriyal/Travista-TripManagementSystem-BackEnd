var mongoose = require('mongoose');
var customerSchema = require('./customer.schema.server');
var customerModel = mongoose.model('CustomerModel', customerSchema);

function findCustomerByCredentials(credentials) {
    return customerModel.findOne(credentials, {username: 1});
}

function findCustomerById(customerId) {
    return customerModel.findById(customerId);
}

function createCustomer(customer) {
    return customerModel.create(customer);
}

function updateCustomer(newcustomer) {
    customerModel.findById(newcustomer.customerId, function (err, customer) {
        customer.username = newcustomer.username;
        customer.lastName = newcustomer.lastName;
        customer.firstName = newcustomer.firstName;
        customer.
        customer.email = newcustomer.email;
        customer.address = newcustomer.address;
        customer.phoneNumber = newcustomer.phoneNumber;
        customer.save(function (err) {
            if (err) throw err;
        });
    });
}

function findCustomerByCustomername(username) {
    return customerModel.count({username: username});
}

function findAllCustomers() {
    return customerModel.find();
}

var api = {
    createCustomer: createCustomer,
    updateCustomer: updateCustomer,
    findAllCustomers: findAllCustomers,
    findCustomerById: findCustomerById,
    findCustomerByCredentials: findCustomerByCredentials,
    findCustomerByCustomername: findCustomerByCustomername,
};

module.exports = api;