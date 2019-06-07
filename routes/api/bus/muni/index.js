const express = require('express');
const router = express.Router();
const fetchRequest = require('../../../../lib/bus/muni/fetchRequest');
const Muni = require('../../../../lib/bus/muni');
const User = require('../../../../db/users');
//const Muni = require('../../../../db/Muni');


router.get('/lines', function(request, response, next) {
	Muni.getLines()
	  .then(data => {
	  	response.send(data);
	  })
	  .catch(err => {
	  	response.send(err);
	  })
})

router.get('/stops/:line/:direction', function(request, response, next) {
	const line = request.params.line
	const direction = request.params.direction
	Muni.getStops(line, direction)
	  .then(data => {
	  	//console.log("\n\nDATA AT ROUTER");
	  	//console.log(data);
	  	response.send(data);
	  })
	  .catch(err => {
	  	response.send(err);
	  })
})

router.get('/dir/:line', function(request, response, next) {
	const line = request.params.line

	Muni.getDirections(line)
	  .then(data => {
	  	//console.log("\n\nDATA AT ROUTER");
	  	//console.log(data);
	  	response.send(data);
	  })
	  .catch(err => {
	  	response.send(err);
	  })
})



router.get('/times/:userId', function(request, response, next) {
	User.getUserData(request.params.userId)
		.then(data => {
			let line = data.muni_line;
			let stopTag = data.muni_stop;
			//console.log("user line " + line);
			//console.log("user stopId " + stopId);
			//const station = request.params.station;
			//const destination = request.params.destination;

			//MOVE THIS TO lib/bart
			let url = `http://webservices.nextbus.com/service/publicXMLFeed?command=predictions&a=sf-muni&r=${line}&s=${stopTag}`;
			//console.log('fetch url: ' + url);
			fetchRequest.frequest(url)
				.then(data => {
					Muni.estimatedTimes(data)
						.then(data => {
							response.send(data)
						})
					//response.send(Muni.estimatedTimes(data))
					/*
						.then(ret => {
							response.send(ret);
						})
						.catch(error => {
							console.log('routes/api/bart.js: ' + error);
						})
					*/
					//response.send(data);
				})
				.catch(error => {
					console.log('routes/api/bus/muni.js: /times/:userId' + error);
				})
		})
})

module.exports = router;