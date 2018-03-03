var map = L.map('map', {
  center: [35.10418, -106.62987],
  zoom: 10
});// ou map.setView([35.10418, -106.62987], 10);
//Affiche fond
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
//Affiche point
var myMarker = L.marker([35.10418, -106.62987], {title:"MyPoint", alt:"The Big I", draggable:true}).addTo(map);
//Polylines/Polygons/Rectangles/Circles
var polyline = L.polyline([[35.10418, -106.62987],[35.19738, -106.875]], {color: 'red',weight:8}).addTo(map);
//Popups
myMarker.bindPopup(`<a href="https://developer.mozilla.org/">MDN</a>`);
//loacation :   map.locate();
map.locate({setView: true, maxZoom: 16});
map.on('locationfound', event =>  console.log('succes geo', event));
map.on('locationerror', event =>  console.log('error geo', event));
//Events
map.on('click', _ => console.log('map cliqué'));
