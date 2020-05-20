var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.get('/:username', function(req, res) {
  User.find(
    { username: req.params.username },
    { todos: 1 }
  )
  .then((result) => res.status(200).send(result[0].todos));
});

router.post('/:username', function(req, res) {
  User.update(
    { username: req.params.username },
    { $push: { todos: req.body } }
  )
  .then(() => res.sendStatus(200));
});

router.post('/:username/:todoid', function(req, res) {
  const username = req.params.username;
  const todoId = req.params.todoid;
  
  const completed = req.body.completed;
  
  User.updateOne(
    {
      username,
      "todos.id": todoId,
    },
    {
      $set: { "todos.$.completed": completed }
    }
  )
  .then(() => res.sendStatus(200));
});

module.exports = router;
