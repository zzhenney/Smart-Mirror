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



