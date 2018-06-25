var express = require('express')
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const idleTimeoutSeconds = 30*60*1000;
// mongoose.connect('mongodb://heroku_25rt1ndf:oq7m9k01j53va5sg677eo9qpib@ds117061.mlab.com:17061/heroku_25rt1ndf');
mongoose.connect('mongodb://localhost/travel-manager');

var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin",
    "http://localhost:3000");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

var session = require('express-session')
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'any string',
  cookie: {
        maxAge: idleTimeoutSeconds * 1000,
    },
  rolling: true
}));


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/message/:theMessage', function (req, res) {
  var theMessage = req.params['theMessage'];
  res.send(theMessage);
})

app.get('/api/session/set/:name/:value',
  setSession);
app.get('/api/session/get/:name',
  getSession);

function setSession(req, res) {
  var name = req.params['name'];
  var value = req.params['value'];
  req.session[name] = value;
  res.send(req.session);
}

function getSession(req, res) {
  var name = req.params['name'];
  var value = req.session[name];
  res.send(value);
}

require('./services/customer.service.server')(app);
require('./services/car.service.server')(app);
require('./services/hotel.service.server')(app);
require('./services/restaurant.service.server')(app);
require('./services/room.service.server')(app);
require('./services/owner.service.server')(app);
require('./services/coupon.service.server')(app);

var hotelService = require('./services/hotel.service.server');
hotelService(app);

app.listen(process.env.PORT || 4000);