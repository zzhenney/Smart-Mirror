const express = require('express');
const router = express.Router();
const Users = require('../db/users');
const passport = require('passport');

router.get('/:id', function(req, res, next) {
	if(req.isAuthenticated()){
		const id = req.params.id;
		res.render('mirror', { id });
		/*
		Users.getUserData(id)
		  .then(data => {
		    res.send(data);
		  })
		  .catch(err => {
		  	res.redirect('/');
		  })
		*/
		
		
	}
	else{
		res.redirect('/login');
	}
	
})

module.exports = router;