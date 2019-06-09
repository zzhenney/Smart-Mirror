const Bart = require('../db/bart');
const fetch = require('./fetchRequest');

const transferStations = ['19TH', 'BALB', 'BAYF', 'COLS', 'MCAR', 'SBRN'];

const getStationRoutes = (startStation) => {
	const routes = [];
	const url = `http://api.bart.gov/api/etd.aspx?cmd=etd&orig=${startStation}&key=${process.env.BART_API_KEY}&json=y`;
	return fetch.frequest(url)
	  .then(data => {
	  	const dest = data.root.station;
		const estTimes = dest[0].etd;
		const estTimesArray = [];
		for (var i = estTimes.length - 1; i >= 0; i--) {
			estTimesArray.push({destination: estTimes[i].destination, abbreviation: estTimes[i].abbreviation });
			
		}

	    return estTimesArray
	  })

}


const removeDuplicateStations = (stations, startStation) => {
	stationSet = new Set(stations);
	stationSet.delete(startStation);
	return JSON.stringify(Array.from(stationSet));
}


const listStations = () => {
	return Bart.listStations()
		.then(data => {
			return data;
		})
};

const estimatedTimes = (start, destination, data) => {
	const dest = data.root.station;
	const estTimes = dest[0].etd;
	let estTimesArray = {};
	for (var i = estTimes.length - 1; i >= 0; i--) {
		if(estTimes[i].abbreviation == destination){
			estTimesArray = {start: start, destination: destination, 
								time: [estTimes[i].estimate[0].minutes, estTimes[i].estimate[1].minutes]};

		}
	}
	console.log(estTimesArray);
	
	return estTimesArray;
}

module.exports = { listStations, getStationRoutes, estimatedTimes }




