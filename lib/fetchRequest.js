const fetch = require("node-fetch");

const requestData = {
	method: 'GET',
	headers: {
		'Content-Type':'application/json'
	}
}

const checkResponseCode = response => {
	if(response.ok){	
		return response.json();
	}			
	Promise.reject(new Error("Response not ok"));
};

const frequest = async (url) => {
	return await fetch(url, requestData).then(checkResponseCode);

};

module.exports = { frequest }