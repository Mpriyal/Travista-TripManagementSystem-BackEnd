module.exports = function (app) {
  app.get('/api/customer', findAllCustomers);
  app.get('/api/customer/:customerId', findCustomerById);
  app.post('/api/customer', createCustomer);
  app.get('/api/profile', profile);
  app.post('/api/logout', logout);
  app.post('/api/login', login);
  app.put('/api/customer/:customerId', updateCustomer);
  app.delete('/api/customer/:customerId', deleteCustomer);

  var customerModel = require('../models/customer/customer.model.server');

    function createCustomer(req, res) {
        var customer = req.body;
        customerModel.findCustomerByUsername(customer.username)
            .then(function (count) {
                if(count === 0){
                    customerModel.createCustomer(customer)
                        .then(function (customer) {
                            req.session['currentUser'] = customer;
                            res.send(customer);
                        })
                }
                else{
                    res.send({Status: "Username Taken"});
                }
            });
    }

    function updateCustomer(req, res) {
        var customer = req.body;
        customerModel.updateCustomer(customer);
        res.send(200);
    }

    function deleteCustomer(req, res) {
        var customerId = req.params['customerId'];
        customerModel.deleteCustomer(customerId)
            .then(function (customers) {
                res.json(customers);
            })
    }

    function findAllCustomers(req, res) {
        customerModel.findAllCustomers()
            .then(function (customers) {
                res.send(customers);
            })
    }

    function findCustomerById(req, res) {
        var id = req.params['customerId'];
        customerModel.findCustomerById(id)
            .then(function (customer) {
                res.json(customer);
            })
    }

  function login(req, res) {
    var credentials = req.body;
    customerModel
      .findCustomerByCredentials(credentials)
      .then(function(customer) {
        req.session['currentUser'] = customer;
        res.json(customer);
      })
  }

  function logout(req, res) {
    req.session.destroy();
    res.send(200);
  }

  function profile(req, res) {
    var customer = req.session['currentUser'];
    if (customer == null){
        res.sendStatus(403);
    }
    else {
        customerModel.findCustomerById(customer._id)
            .then(function (customer) {
            res.json(customer);
        })
    }
  }
}
