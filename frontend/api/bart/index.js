const fetch = require('../../../lib/fetchRequest');

const getStations = () => {
	return fetch.frequest('/api/bart/stations')
		.then(response => {
			return response
		})
}

const getLines = (station) => {
	return fetch.frequest(`/api/bart/routes/${station}`)
		.then(response => {
			return response
		})
}

const getDepartTimes = (userId) => {
	return fetch.frequest(`/api/bart/times/${userId}`)
		.then(response => {
			//need to manipulate and only return relevant json
			return response
		})
}

module.exports = { getStations, getLines, getDepartTimes };
