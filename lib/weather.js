const fetch = require('./fetchRequest');

const getWeather = (zipCode) => {
	const routes = [];
	const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=ed90be901e5b63bbd135e087a60a618e`;
	return fetch.frequest(url)
	  .then(data => {
	  	//console.log(`weather data: ${data}`)
	  	const temp = data.main.temp;
		const conditions = data.weather[0].main
		console.log(`conditions: ${conditions}`)
		const dataArray = [];
		dataArray.push({temp: temp})
		dataArray.push({conditions: conditions})
	    return dataArray
	  })

}

module.exports = { getWeather }