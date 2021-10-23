/*
File name:index.js
Student name: Gagandeep kaur
Student id: 301144458
Date: 03-10-2021
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home'});
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me'});
});

/* GET Projects page. */
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me'});
});

/* navigate to Services page. */
router.get('/serviceregister', function(req, res, next) { //routing to service page after service registeration button is clicked. 
  res.render('serviceregister', { title: 'Register'});
});

module.exports = router;