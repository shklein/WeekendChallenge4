var express = require('express');
var router = express.Router();
var Pets = require('../models/pet');

router.get('/', function (req, res) {
  Pets.find({}, function (err, pets) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(pets);
  });
});

router.post('/', function (req, res) {
  var pet = new Pet(req.body);
  pet.save(function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(201);
  });
});



module.exports = router;
