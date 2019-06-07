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


if(window.location.href.indexOf('mirror') > -1) {
	setDateTime();
	updateDateTime();	
}


