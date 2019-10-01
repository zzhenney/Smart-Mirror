(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"../../../lib/fetchRequest":9}],2:[function(require,module,exports){
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
},{"../../../../lib/bus/muni/fetchRequest":8}],3:[function(require,module,exports){
const fetch = require('../../../lib/fetchRequest');

const getWeather = (userId) => {
	return fetch.frequest(`/api/weather/${userId}`)
		.then(response => {
			return response
		})
}

module.exports = { getWeather }

},{"../../../lib/fetchRequest":9}],4:[function(require,module,exports){
const api = require('./api/bart/');

console.log("bart front end js file found");

const populateStations = () => {
	api.getStations()
		.then(response => {
			const parentNode = document.getElementById('select-start-station');
			//parentNode.innerHTML = 'Select Start Station';
			parentNode.disabled = false;
			response.forEach(function(id){
				let station = document.createElement('option');
				station.innerHTML = id.station_name;
				station.value = id.station_abbr;
				parentNode.appendChild(station);
			})
		})
}

const populateLines = () => {
	let station = getStation();
	//console.log(station);
	api.getLines(station)
		.then(response => {
			console.log("response: " + response);
			const parentNode = document.getElementById('select-train');
			let options = parentNode.childNodes
			//console.log("\n\n\n Options")
			//console.log(options)
			if(options.length > 1){
				clearDropDown(parentNode, options)						
			}
			//parentNode.innerHTML = '';
			parentNode.disabled = false;
			response.forEach(function(id){
				let station = document.createElement('option');
				station.innerHTML = id.destination;
				station.value = id.abbreviation;
				//console.log("append station: " + station);
				parentNode.appendChild(station);
			})
		})
}

const getStation = () => {
	
	let stations = document.getElementById('select-start-station');
	let selectedStation = stations.options[stations.selectedIndex].value;
	console.log(selectedStation)
	
	return selectedStation.toUpperCase();
}



const attachEventListener = (elementId, event, func)  => {
	document.getElementById(elementId).addEventListener(event, func);
	//console.log(`event listener ${event} added with func ${func}`);
}

const clearDropDown = (parentNode, options) => {
	for (var i = options.length - 1; i >= 0; i--) {
		parentNode.removeChild(options[i])
	}
	let defaultOption = document.createElement('option');
	defaultOption.innerHTML = "Select Line";
	parentNode.appendChild(defaultOption)
}



const getBartTimes = () => {
	const userId = document.getElementById('user-id').value;
	api.getDepartTimes(userId)
	  .then(data => {
	  	console.log("getDepartTimes: " + data.destination);
	  	const node = document.getElementById('bartTimes');
	  	node.innerHTML = (`${data.start}  to  ${data.destination} : ${data.time[0]}, ${data.time[1]} min`);
	  })
}

const updateBart = () => {
	setInterval(function(){getBartTimes()}, 30000);
}

const checkBartOption = () => {
	let checkbox = document.getElementById('bartCheck')
	if(checkbox.checked == true){
		populateStations()
	}
	else{
		disableDropDowns(Array('select-start-station', 'select-train'))
	}
}

const disableDropDowns = (elements) => {
	elements.forEach(function(val, index) {
		parentNode = document.getElementById(val)
		options = parentNode.childNodes
		clearDropDown(parentNode, options)
		parentNode.disabled = true;
	})
}


//location = mirror dashboard
if(window.location.href.indexOf('/mirror') > -1) {
	getBartTimes();
	updateBart();
	
}
//location = settings page
else{
	attachEventListener('bartCheck', 'click', checkBartOption);
	attachEventListener('select-start-station', 'change', populateLines);
}




},{"./api/bart/":1}],5:[function(require,module,exports){
const api = require('./api/bus/muni');

console.log("bus front end js file found");

const populateLines = () => {
    api.getLines()
        .then(response => {
            const parentNode = document.getElementById('select-line');
            //parentNode.innerHTML = 'Select Start Station';
            //console.log(response)
            response = JSON.parse(response)
            parentNode.disabled = false;
            response.forEach(function(id){
                let station = document.createElement('option');
                station.innerHTML = id.name;
                station.value = id.id;
                parentNode.appendChild(station);
            })
        })
}

const populateDirections = () => {
    let route = getRoute();
    api.getDirections(route)
        .then(response => {  
            console.log("response: " + response)       
            response = JSON.parse(response)
            const parentNode = document.getElementById('select-direction');
            let options = parentNode.childNodes
            //console.log("\n\n\n Options")
            //console.log(options)
            if(options.length > 1){
                clearDropDown(parentNode, options)                      
            }
            parentNode.disabled = false;
            response.forEach(function(id){
                console.log(id)
                let stop = document.createElement('option');
                stop.innerHTML = id.title;
                stop.value = id.id;
                parentNode.appendChild(stop);
            })
        })
}

const populateStops = () => {
    let line = getRoute();
    let direction = getDirection();
    console.log("line: " + line + "  direction: " + direction);
    api.getStops(line, direction)
        .then(response => {         
            response = JSON.parse(response)
            const parentNode = document.getElementById('select-stop');
            let options = parentNode.childNodes
            //console.log("\n\n\n Options")
            //console.log(options)
            if(options.length > 1){
                clearDropDown(parentNode, options)                      
            }
            parentNode.disabled = false;
            response.forEach(function(id){
                //console.log(id)
                let stop = document.createElement('option');
                stop.innerHTML = id.title;
                stop.value = id.id;
                parentNode.appendChild(stop);
            })
        })
}

const getRoute = () => {
    let line = document.getElementById('select-line');
    let selectedLine = line.options[line.selectedIndex].value;
    console.log("select-line: " + selectedLine)

    
    return selectedLine;
}

const getDirection = () => {
    let direction = document.getElementById('select-direction');
    let selectedDirecetion = direction.options[direction.selectedIndex].value;
    return selectedDirecetion;
}


const attachEventListener = (elementId, event, func)  => {
    document.getElementById(elementId).addEventListener(event, func);
    //console.log(`event listener ${event} added with func ${func}`);
}


const clearDropDown = (parentNode, options) => {
    for (var i = options.length - 1; i >= 0; i--) {
        parentNode.removeChild(options[i])
    }
    let defaultOption = document.createElement('option');
    defaultOption.innerHTML = "Select Line";
    parentNode.appendChild(defaultOption)
}



const getMuniTimes = () => {
    const userId = document.getElementById('user-id').value;
    api.getDepartTimes(userId)
      .then(data => {
        console.log("muni data: " + data)
        data = JSON.parse(data)
        console.log("Muni Depart Times: " + data);

        const node = document.getElementById('muniTimes');
        node.innerHTML = (`${data.routeTitle}  at  ${data.stopTitle} : ${data.minutes[0]}, ${data.minutes[1]} min`);
      })
}

const updateMuni = () => {
    setInterval(function(){getMuniTimes()}, 30000);
}

//move this to helper module. code repeated in bart
const checkMuniOption = () => {
    let checkbox = document.getElementById('muniCheck')
    if(checkbox.checked == true){
        populateLines()
    }
    else{
        disableDropDowns(Array('select-line', 'select-direction', 'select-stop'))
    }
}

const disableDropDowns = (elements) => {
    elements.forEach(function(val, index) {
        parentNode = document.getElementById(val)
        options = parentNode.childNodes
        clearDropDown(parentNode, options)
        parentNode.disabled = true;
    })
}



console.log(`href location: mirror - ${window.location.href.indexOf('/mirror')}`)

if(window.location.href.indexOf('/mirror') > -1) {
    getMuniTimes();
    updateMuni();
    
}
else{
    attachEventListener('muniCheck', 'click', checkMuniOption);
    attachEventListener('select-line', 'change', populateDirections);
    attachEventListener('select-direction', 'change', populateStops)
}
},{"./api/bus/muni":2}],6:[function(require,module,exports){
console.log('date time front js loaded')

const updateTime = () => {
	var optionsTime = {hour: 'numeric', minute: 'numeric'};
	var t = new Date();
	var m = t.toLocaleString('en-US', optionsTime);
	document.getElementById("time").innerHTML = m;
}

const updateDay = () => {
	var optionsDay = {weekday: 'long'};
	var d = new Date();
	var n = d.toLocaleString('en-US', optionsDay);
	
	document.getElementById("day").innerHTML = n;
	
}
		
		
const updateMonth = () => {
	var optionsMonth = {month: 'long', day: 'numeric'};
	var date = new Date();
	var month = date.toLocaleString('en-US', optionsMonth);	
	document.getElementById("month").innerHTML = month;
	
}	




const updateDateTime = () => {
	setInterval(function(){updateTime()}, 100);
	setInterval(function(){updateDay()}, 60000);
	setInterval(function(){updateMonth()}, 60000);
}

const setDateTime = () => {
	updateTime();
	updateDay();
	updateMonth();
}


if(window.location.href.indexOf('/mirror') > -1) {
	setDateTime();
	updateDateTime();	
}



},{}],7:[function(require,module,exports){
const api = require('./api/weather/');


const renderWeather = () => {
	const userId = document.getElementById('user-id').value;
	api.getWeather(userId)
		.then(data => {
			console.log(`fetched weather data: ${data[1].conditions}`)
			const node = document.getElementById('temp');
	  		node.innerHTML = (data[0].temp);
	  		const node2 = document.getElementById('conditions');
	  		node2.innerHTML = (data[1].conditions);
		})
}

//update every hour
const updateWeather = () => {
	setInterval(function(){renderWeather()}, 3600000);
}


if(window.location.href.indexOf('/mirror') > -1) {
	renderWeather();
	updateWeather();
	
}
},{"./api/weather/":3}],8:[function(require,module,exports){
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
},{"node-fetch":10}],9:[function(require,module,exports){
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
},{"node-fetch":10}],10:[function(require,module,exports){
(function (global){
"use strict";

// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
exports.default = global.fetch.bind(global);

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[5,4,6,7]);
