const express = require('express');
const router = express.Router();
const fetchRequest = require('../../lib/fetchRequest');

const Bart = require('../../lib/bart');
const User = require('../../db/users');

router.get('/stations', function(request, response, next) {
	Bart.listStations()
		.then(stations => {
			response.send(stations);
		})
		.catch(error => {
			console.log('routes/api/bart.js /stations: ' + error);
		})
})

router.get('/routes/:station', function(request, response, next) {
	//compute departure times via module method
	//attach depart times to response 
	const station = request.params.station;
	Bart.getStationRoutes(station)
		.then(destinations => {
			response.send(destinations);
		})
		.catch(error => {
			console.log('routes/api/bart.js: /routes/:station' + error);
		})
})

//return the depart times to user
router.get('/times/:userId', function(request, response, next) {
	User.getUserData(request.params.userId)
		.then(data => {
			let startStation = data.bart_start_station;
			let destination = data.bart_destination_station;
			//console.log("user start " + startStation);
			//console.log("user end " + destination);
			//const station = request.params.station;
			//const destination = request.params.destination;

			//MOVE THIS TO lib/bart
			let url = `http://api.bart.gov/api/etd.aspx?cmd=etd&orig=${startStation}&key=MW9S-E7SL-26DU-VV8V&json=y`;
			//console.log('fetch url: ' + url);
			fetchRequest.frequest(url)
				.then(data => {
					response.send(Bart.estimatedTimes(startStation, destination, data))
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
					console.log('routes/api/bart.js: /times/:userId' + error);
				})
		})
})

module.exports = router;