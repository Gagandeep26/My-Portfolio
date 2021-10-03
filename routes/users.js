/*
File name:users.js
Student name: Gagandeep kaur
Student id: 301144458
Date: 03-10-2021


*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
