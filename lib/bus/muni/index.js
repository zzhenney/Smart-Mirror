const fetch = require('./fetchRequest');
const db = require('../../../db/muni');
const parseXML = require('xml2js').parseString;


const getStops = (routeTag, directionTag) => {
	console.log("route tag: " + routeTag)
	const url = `http://webservices.nextbus.com/service/publicXMLFeed?command=routeConfig&a=sf-muni&r=${routeTag}`
	return fetch.frequest(url)
	  .then(data => {
	  	return new Promise((resolve, reject) => {
	  		//console.log(data)
	  		let xml = data;
	  		let stopsArray = []
	  		let directStop = []
	  		return parseXML(xml, function(err, result) {
		  		//console.log(JSON.stringify(result))
		  		//result = JSON.stringify(result)
		  		//console.log(result.body.route[0].stop[0].$)
		  		let stops = result.body.route[0].stop
		  		//console.log(stops[0].$.tag + " : " + stops[0].$.title)
		  		//console.log(result.body.route[0].stop[0].$.tag + " : " + result.body.route[0].stop[0].$.title)
		  		//let stopsArray = []
		  		//console.log(result.body.route[0].direction)
		  		//console.log(result.body.route[0].direction[0].stop)
		  		let directions = result.body.route[0].direction

		  		let directStops;

		  		directions.forEach(function(direction){
		  			if (direction.$.tag == directionTag) {
		  				//console.log(direction.$.tag)
		  				directStops = direction.stop
		  				//console.log(direction.stop)
		  			}
		  		})
		  		
		  		//console.log(directStops)

		  		directStops.forEach(function(stop){
		  			directStop.push(stop.$.tag)
		  		})

		  		stops.forEach(function(stop){
		  			if(directStop.includes(stop.$.tag)){
		  				stopsArray.push({id: stop.$.tag, title: stop.$.title})
		  			}
		  			//stopsArray.push({id: stop.$.tag, title: stop.$.title})
		  		})
		  		//result = stopsArray
		  		//console.log(stopsArray)
		  		resolve(stopsArray)
	  		})

	  	})
	  	
	  	//return stopsArray
	  	
	  })
	  
	  .catch(err => {
	  	return err;
	  })
}

const getDirections = (routeTag) => {
	const url = `http://webservices.nextbus.com/service/publicXMLFeed?command=routeConfig&a=sf-muni&r=${routeTag}`
	return fetch.frequest(url)
	  .then(data => {
	  	//console.log("data: " + data)
	  	return new Promise((resolve, reject) => {
	  		let xml = data;
	  		let stopsArray = []
	  		return parseXML(xml, function(err, result) {
		  		//console.log(JSON.stringify(result))
		  		//result = JSON.stringify(result)
		  		//console.log(result.body.route[0].stop[0].$)
		  		let stops = result.body.route[0].direction
		  		//console.log(stops[0].$.tag + " : " + stops[0].$.title)
		  		//console.log(result.body.route[0].stop[0].$.tag + " : " + result.body.route[0].stop[0].$.title)
		  		//let stopsArray = []
		  		
		  		stops.forEach(function(stop){
		  			stopsArray.push({id: stop.$.tag, title: stop.$.title})
		  		})
		  		//result = stopsArray
		  		//console.log(stopsArray)
		  		resolve(stopsArray)
	  		})

	  	})
	  	
	  	//return stopsArray
	  	
	  })
	  
	  .catch(err => {
	  	return err;
	  })

}

const getLines = () => {
	return db.getLines()
	  .then(data => {
	  	//console.log(data)
	  	return data
	  })

	  .catch(err => {
	  	return err;
	  })
}

const estimatedTimes = (data) => {
	//console.log(data.root.station)

	return new Promise((resolve, reject) => {
	  		let xml = data;
	  		//let estTimesArray = []
	  		return parseXML(xml, function(err, result) {
		  		//console.log(JSON.stringify(result))
		  		//result = JSON.stringify(result)
		  		let predictions = result.body.predictions[0]
		  		let stopTitle = predictions.$.stopTitle
		  		let routeTitle = predictions.$.routeTitle
		  		//console.log(predictions)
		  		//console.log(predictions.direction[0].prediction[0].$.minutes)
		  		let prediction1 = predictions.direction[0].prediction[0].$.minutes
		  		let prediction2 = predictions.direction[0].prediction[1].$.minutes
		  		//let stops = result.body.route[0].stop
		  		//console.log(stops[0].$.tag + " : " + stops[0].$.title)
		  		//console.log(result.body.route[0].stop[0].$.tag + " : " + result.body.route[0].stop[0].$.title)
		  		//let stopsArray = []
		  		let estTimesArray = {routeTitle: routeTitle, stopTitle: stopTitle, minutes: [prediction1, prediction2]}

		  		/*
		  		stops.forEach(function(stop){
		  			estTimeArray.push({id: stop.$.stopId, title: stop.$.title})
		  		})
		  		*/
		  		//result = stopsArray
		  		console.log(estTimesArray)
		  		resolve(estTimesArray)
	  		})

	})
	.catch(err => {
		console.log(`lib/bus/muni/index 149: ${err}`)
		return null
	})

}

module.exports = { getStops, getLines, estimatedTimes, getDirections };








