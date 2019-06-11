const api = require('./api/weather/');


const renderWeather = () => {
	const userId = document.getElementById('user-id').value;
	api.getWeather(userId)
		.then(data => {
			console.log(`fetched weather data: ${data[1].conditions}`)
			const node = document.getElementById('temp');
	  		node.innerHTML = (data[0].temp);
	  		const node2 = document.getElementById('conditions');
	  		node2.innerHTML = (data[1].conditions);
		})
}

//update every hour
const updateWeather = () => {
	setInterval(function(){renderWeather()}, 3600000);
}


if(window.location.href.indexOf('/mirror') > -1) {
	renderWeather();
	updateWeather();
	
}