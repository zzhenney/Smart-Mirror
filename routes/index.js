var express = require('express');
var router = express.Router();
const User = require('../db/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.isAuthenticated()){
    res.render('settings', {userid: `${req.session.passport.user}` });
  }
  else{
  	res.render('index');
  }
  
});


module.exports = router;
