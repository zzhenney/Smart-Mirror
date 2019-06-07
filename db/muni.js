const db = require('./index');

exports.getLines = () => {
	return db.any("SELECT * FROM muni_routes")
		.then(data => {
			//console.log(data)
			return data;
		})
		.catch(error => {
			console.log("db/muni.js: " + error);
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


/*
exports.getStops = (line) => {
	return db.one("SELECT * FROM bart_routes WHERE id=$1;", [line])
		.then(data => {
			return data;
		})
}
*/
