var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.post('/login', function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  
  User.find({ username, password })
  .then((user) => res.send({ success: user.length > 0 }))
  .catch((err) => console.log(err))
});

router.post('/register', function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  User.find({ username })
  .then(function(result) {
    if (result.length) {
      return false;
    }
    
    const user = new User({
      username,
      password
    });
      
    return user.save().then(() => true);
  })
  .then((success) => res.status(200).send({ success }))
  .catch((err) => console.log(err));
});

module.exports = router;
