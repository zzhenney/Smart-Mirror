import requests
import pprint
#Valid routes are 1-10, 11-14 and 19-20.
file = open('tools/bart_routes.txt', 'w')
for x in range(1,15) + range(19,21):
	#print x

	response = requests.get('http://api.bart.gov/api/route.aspx?cmd=routeinfo&route='+ str(x) +'&json=y&key=MW9S-E7SL-26DU-VV8V')
	data = response.json()
	#print data
	stations = []

	for station in data['root']['routes']['route']['config']['station']:
		#print station
		stations.append(station.encode('ascii', 'ignore'))
	print "Route " + data['root']['routes']['route']['number']
	routeId = data['root']['routes']['route']['number']
	destination = data['root']['routes']['route']['destination']
	print stations
	

	file.write('{ id: ' + "\"" + routeId + "\"" + ', destination: ' + "\"" + destination + "\""  +  ", stations: [")
	#for station in stations:
		#file.write(station)
	for x in range(len(stations)-1):
		file.write("\"" + stations[x] + "\"" + ", ")
	
	#if last tuple no comma
	if routeId == str(20):
		file.write("\"" + stations[len(stations)-1] + "\"" + "] } \n")
	else:
		file.write("\"" + stations[len(stations)-1] + "\"" + "] }, \n")
	#print data['root']['routes']['route']['config']['station']
