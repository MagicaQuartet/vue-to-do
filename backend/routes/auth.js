var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.post('/login', function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  
  User.find({ username, password })
  .then((user) => res.send(user.length ? 'OK' : 'FAILED'))
  .catch((err) => console.log(err))
});

router.post('/register', function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  const user = new User({
    username,
    password
  });
  
  user.save()
  .then(() => res.send('Saved successfully:', user.username))
  .catch((err) => console.log(err));
});

module.exports = router;
