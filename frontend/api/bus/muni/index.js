const fetch = require('../../../../lib/bus/muni/fetchRequest');

const getStops = (line, direction) => {
	console.log("fetch line: " + `/api/bus/muni/stops/${line}`)
	//let headers = {'Content-Type':'application/json'}
	//fetch.setRequestData(headers)
	return fetch.frequest(`/api/bus/muni/stops/${line}/${direction}`)
		.then(response => {
			console.log(response)
			return response
		})
}

const getLines = () => {
	return fetch.frequest(`/api/bus/muni/lines`)
		.then(response => {
			return response
		})
}

const getDirections = (route) => {
	return fetch.frequest(`/api/bus/muni/dir/${route}`)
		.then(response => {
			console.log(response)
			return response
		})
}

const getDepartTimes = (userId) => {
	return fetch.frequest(`/api/bus/muni/times/${userId}`)
		.then(response => {
			//need to manipulate and only return relevant json
			//console.log('fetch response')
			//console.log(response)
			return response
		})
}

module.exports = { getStops, getLines, getDepartTimes, getDirections };