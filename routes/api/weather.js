const express = require('express');
const router = express.Router();
const fetchRequest = require('../../lib/fetchRequest');

const Weather = require('../../lib/weather');
const User = require('../../db/users');

router.get('/:userId', function(request, response, next) {
	const userId = request.params.userId
	User.getUserData(userId)
		.then(data => {
			console.log(`user data: ${data.zip_code}`)
			if(data.zip_code != 0){
				Weather.getWeather(data.zip_code)
					.then(data => {
						console.log(`route weather data: ${data[1].conditions}`)
						response.send(data);
					})
					.catch(error => {
						console.log('routes/api/weather.js: ' + error);
					})
			}
			else{
				response.send(null)
			}
		})
		.catch(error => {
			console.log('routes/api/weather.js: ' + error);
		})
	
	
})

module.exports = router 