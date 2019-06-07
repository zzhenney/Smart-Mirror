var express = require('express');
var router = express.Router();
const User = require('../db/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.isAuthenticated()){
    res.render('index', { title: 'Dash Gen' });
  }
  else{
  	res.redirect('/login');
  }
  
});

router.post('/createMirror', function(req, res, next){
	if(req.isAuthenticated()){
		const user = req.session.passport.user;
		const bartStart = req.body.bartStart.toUpperCase();
		const bartEnd = req.body.bartEnd;
		const muniLine = req.body.muniLine
		const muniStop = req.body.muniStop
		const zipCode = req.body.zipCode

		//console.log('user: ' + user);
		//console.log("req bstart: " +req.body.bartStart.toUpperCase());
		//console.log("req bend: " +req.body.bartEnd);
		
		User.saveUserData(bartStart, bartEnd, muniLine, muniStop, zipCode, user)
			.then(userId => {
				//console.log(userId);
				res.redirect(`/mirror/${userId}`)
			})
			.catch(err => {
				console.log("Route Error: " + err);
			})
		
	}
	else{
		res.redirect('/login');
	}
})

module.exports = router;
