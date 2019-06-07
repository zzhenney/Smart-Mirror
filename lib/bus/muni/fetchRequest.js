const fetch = require("node-fetch");

const requestData = {
	method: 'GET',
	headers: {
		'Content-Type':'text/xml'
	}
}

const checkResponseCode = response => {
	if(response.ok){	
		return response.text();
	}			
	Promise.reject(new Error("Response not ok"));
};

const frequest = async (url) => {
	return await fetch(url, requestData).then(checkResponseCode);

};

const setRequestData = (headers) => {
	//requestData.method = method
	requestData.headers = headers
}


module.exports = { frequest, setRequestData}