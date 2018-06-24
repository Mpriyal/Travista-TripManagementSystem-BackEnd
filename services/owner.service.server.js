module.exports = function (app) {
    app.get('/api/owner', findAllOwners);
    app.get('/api/owner/:ownerId', findOwnerById);
    app.post('/api/owner', createOwner);
    app.get('/api/profile', profile);
    app.post('/api/logout', logout);
    app.post('/api/login', login);
    app.put('/api/owner', updateOwner);
    app.delete('/api/owner/:ownerId', deleteOwner);

    var ownerModel = require('../models/owner/owner.model.server');

    function createOwner(req, res) {
        var owner = req.body;
        ownerModel.findOwnerByUsername(owner.username)
            .then(function (count) {
                if (count === 0) {
                    ownerModel.createOwner(owner)
                        .then(function (owner) {
                            req.session['currentUser'] = owner;
                            res.send(owner);
                        })
                }
                else {
                    res.send({Status: "Username Taken"});
                }
            });
    }

    function updateOwner(req, res) {
        var owner = req.body;
        ownerModel.updateOwner(owner);
        res.send(200);
    }

    function deleteOwner(req, res) {
        var ownerId = req.params['ownerId'];
        ownerModel.deleteOwner(ownerId)
            .then(function (owners) {
                res.json(owners);
            })
    }

    function findOwnerById(req, res) {
        var id = req.params['ownerId'];
        ownerModel.findOwnerById(id)
            .then(function (owner) {
                res.json(owner);
            })
    }

    function findAllOwners(req, res) {
        ownerModel.findAllOwners()
            .then(function (owners) {
                res.send(owners);
            })
    }

    function login(req, res) {
        var credentials = req.body;
        ownerModel
            .findOwnerByCredentials(credentials)
            .then(function (owner) {
                req.session['currentUser'] = owner;
                res.json(owner);
            })
    }

    function logout(req, res) {
        req.session.destroy();
        res.send(200);
    }

    function profile(req, res) {
        var owner = req.session['currentUser'];
        if (owner == null) {
            res.sendStatus(403);
        }
        else {
            ownerModel.findOwnerById(owner._id)
                .then(function (owner) {
                    res.json(owner);
                })
        }
    }
}
