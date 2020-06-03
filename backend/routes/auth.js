var bcrypt = require("bcrypt-nodejs");
var express = require("express");
var router = express.Router();

var User = require("../models/user");

router.post("/login", function (req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  User.find({ username })
    .then((user) => {
      if (user.length === 0) {
        res.send({ success: false });
      } else {
        bcrypt.compare(password, user[0].password, function (err, _res) {
          res.send({ success: _res });
        });
      }
    })
    .catch((err) => console.log(err));
});

router.post("/register", function (req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  User.find({ username })
    .then(function (result) {
      if (result.length > 0) {
        return false;
      }

      const user = new User({
        username,
      });

      bcrypt.hash(password, null, null, function (err, hash) {
        user.password = hash;
      });

      return user.save();
    })
    .then(() => res.status(200).send({ success: true }))
    .catch((err) => console.log(err));
});

module.exports = router;
