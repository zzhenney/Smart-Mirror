const db = require('./index');

exports.listStations = () => {
	return db.any("SELECT * FROM bart_stations")
		.then(data => {
			return data;
		})
		.catch(error => {
			console.log("db/bart.js: " + error);
		})
};

exports.getStationRoutes = (station) => {
	return db.any("SELECT * FROM bart_routes WHERE $1=ANY(stations);", [station])
		.then(data => {
			//console.log(data);
			return data;
			//return data[i].id;
		})
}

exports.getRoute = (routeId) => {
	return db.one("SELECT * FROM bart_routes WHERE id=$1;", [routeId])
		.then(data => {
			return data;
		})
}

