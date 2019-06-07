#use to scrape stations from bart website for db migrations
import urllib2
from bs4 import BeautifulSoup

target_page = "http://api.bart.gov/docs/overview/abbrev.aspx"
page = urllib2.urlopen(target_page)
soup = BeautifulSoup(page, 'html.parser')

station_box = soup.find('table')
station = station_box.text

#print station

file = open('tools/bart_stations.txt', 'w');

stations = []

for row in station_box.findAll("tr"):
	abbr = row.findAll('td')
	#station = row.find_next('td')
	#if len(cell) == 2:
	for a in abbr:
		stations.append(a.text.strip())
	#print row.text
#for station in stations:
	#print station


for i in range(2,len(stations)-1,2):
	if i != len(stations)-2:
		file.write("{ station_abbr: " + "\"" + stations[i] + "\"" + ", station_name: " + "\"" + stations[i+1] +"\" }, \n")
		continue
	file.write("{ station_abbr: " + "\"" + stations[i] + "\"" + ", station_name: " + "\"" + stations[i+1] +"\" } \n")

