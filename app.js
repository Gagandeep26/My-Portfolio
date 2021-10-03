
/*
File name:app.js
Student name: Gagandeep kaur
Student id: 301144458
Date: 03-10-2021
*/

//installed 3rd party packages
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');    //express -e

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // rendering all pages

  app.get('/', function(req, res) {
    res.render('views/index');
  });

  app.get('/about',function (req, res)  {
    res.render('views/about');
  });

  app.get('/resume', function(req, res)  {
    res.render('views/resume');
  });

  app.get('/project',function (req, res)  {
    res.render('views/project');
  });

  app.get('/services', function(req, res)  {
    res.render('views/services');
  });

  app.get('/contact',function (req, res)  {
    res.render('views/contact');
  });

  app.get('/error',function (req, res)  {
    res.render('views/error');
  
});
});
module.exports = app;
