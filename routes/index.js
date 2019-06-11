var express = require('express');
var router = express.Router();
const User = require('../db/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.isAuthenticated()){
    res.render('index', {userid: `${req.session.passport.user}` });
  }
  else{
  	res.redirect('/login');
  }
  
});

router.post('/createMirror', function(req, res, next){
	if(req.isAuthenticated()){
		console.log("\n\nCREATING MIRRROR -------------------->>>>>>>>>>>><<<<<<<<---------------------\n\n")
		const user = req.session.passport.user;
		console.log(`user type of: ${typeof user}`)
		console.log(`User: ${user}`);
		console.log(`UserID ${req.session.passport.user_id}`)
		console.log(`bart start: ${req.body.bartStart === "undefined"}`)
		const bartStart = (req.body.bartStart ? req.body.bartStart.toUpperCase() : "");
		const bartEnd = req.body.bartEnd;
		const muniLine = req.body.muniLine
		const muniStop = req.body.muniStop
		const zipCode = (req.body.zipCode == '' ? 0 : req.body.zipCode)


		//console.log('user: ' + user);
		//console.log("req bstart: " +req.body.bartStart.toUpperCase());
		//console.log("req bend: " +req.body.bartEnd);
		
		User.saveUserData(bartStart, bartEnd, muniLine, muniStop, zipCode, user)
			.then(userId => {
				console.log("user ID: " + userId);
				res.redirect(`/mirror/${userId}`)
			})
			.catch(err => {
				console.log("Route Error User.saveUserData: " + err);
				res.redirect('/');
			})
		
	}
	else{
		res.redirect('/login');
	}
})

module.exports = router;
