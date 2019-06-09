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

if(window.location.href.indexOf('/mirror') > -1) {
    getMuniTimes();
    updateMuni();
    
}
else{
    attachEventListener('muniCheck', 'click', populateLines);
    attachEventListener('select-line', 'change', populateDirections);
    attachEventListener('select-direction', 'change', populateStops)
}