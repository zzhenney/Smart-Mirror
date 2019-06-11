const db = require('./index');

exports.saveUserData = (bartStartStation, bartDestStation, muniLine, muniStop, zipCode, userId) => {
	console.log(bartStartStation + " " +bartDestStation + " " + muniLine + " " + muniStop + " " + zipCode + " " + userId)
	return db.one('UPDATE users SET bart_start_station = $1, bart_destination_station = $2, muni_line = $3, muni_stop = $4, zip_code = $5 WHERE id = $6 RETURNING id', [bartStartStation, bartDestStation, muniLine, muniStop, zipCode, userId])
		.then(userId => {
			console.log('db 6 : user id: ' + userId.id);
			return userId.id;
		})
		.catch(err => {
			console.log('DB Error users.js saveUserData: ' + err);
		})
}

exports.getUserData = (userId) => {
	return db.one('SELECT * FROM users WHERE id=$1', [userId])
	  .then(data => {
	  	console.log("db getUserData: " + data);
	  	return data;
	  })
	  .catch(err => {
		console.log('DB Error users.js getUserData: ' + err);
	  })
}
