const fetch = require('../../../lib/fetchRequest');

const getWeather = (userId) => {
	return fetch.frequest(`/api/weather/${userId}`)
		.then(response => {
			return response
		})
}

module.exports = { getWeather }
