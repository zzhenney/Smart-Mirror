import requests
import pprint
from xml.etree import ElementTree
#Valid routes are 1-10, 11-14 and 19-20.
file = open('muni_routes.txt', 'w')

response = requests.get('http://webservices.nextbus.com/service/publicXMLFeed?command=routeList&a=sf-muni')
#print response.content
root = ElementTree.fromstring(response.content)
#root = tree.getroot()
#print root

routes = []

for route in root.iter('route'):
	file.write('{ id: ' + "\"" + route.attrib['tag'] + "\"" + ', name: ' + "\"" + route.attrib['title'] +"\"" + " },\n")
	print(route.attrib['tag'], route.attrib['title'])


'''
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
'''