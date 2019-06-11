if(process.env.NODE_ENV === 'development') {
	require("dotenv").config();
}

require("dotenv").config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const flash = require('connect-flash');
const passport = require('./auth/passport');
const session = require('./auth/session');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const bartRouter = require('./routes/api/bart');
const mirrorRouter = require('./routes/mirror');
const muniRouter = require('./routes/api/bus/muni');
const weatherRouter = require('./routes/api/weather');

//auth routes
const registrationRouter = require('./routes/registration');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(flash());
//express-session
app.use(session);
//passport
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/registration', registrationRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/mirror', mirrorRouter);
app.use('/api/bart', bartRouter);
app.use('/api/bus/muni', muniRouter);
app.use('/api/weather', weatherRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
