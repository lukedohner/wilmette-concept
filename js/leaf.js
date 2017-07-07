window.onload = function() {
init();
};
//window.on("load", function() {
function init(){
	var mymap = L.map('mapid').setView([42.08255, -87.76222], 13);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    zoomControl:false,
    maxZoom: 13,
    minZoom: 13,
    id: 'mapbox.streets',
    //id: 'mapbox.light'
    accessToken: 'sk.eyJ1IjoibHVrZWRvaG5lciIsImEiOiJjajRnMnFtNHQwMTQzMzJwaTE4b2pxbzlsIn0.FhKUrokvRUth-xBZUtMcrw'
 }).addTo(mymap);
	var watersmeet = L.marker([42.0865, -87.77287]).addTo(mymap);




	var circle = L.circle([42.08982, -87.81836], {
    color: 'green',
    fillColor: '#2BF145',
    fillOpacity: 0.3,
    radius: 500
}).addTo(mymap);
	var indianhill = L.polygon([
    [42.09427, -87.73922],
    [42.09473, -87.7248],
    [42.08892, -87.72549],
    [42.08695, -87.73295],
    [42.08867, -87.74094]
    
]).addTo(mymap);

	watersmeet.bindPopup("<b>Hello world!</b><br>I am a popup.");
	circle.bindPopup("Pretty Gallery Park.");
	indianhill.bindPopup("Come to Indian Hill Golf Course");
    mymap.zoomControl.disable();
    // mymap.dragging.disable();
    var southWest = L.latLng(42.07567, -87.89783),
    northEast = L.latLng(42.07567, -87.65905);
    var bounds = L.latLngBounds(southWest, northEast);

    mymap.setMaxBounds(bounds);
    mymap.on('drag', function() {
    mymap.panInsideBounds(bounds, { animate: false });
    });
////////
    var polyline = L.polyline([
    [-41.286, 174.796],
    [-41.281, 174.786],
    [-41.279, 174.776],
    [-41.290, 174.775],
    [-41.292, 174.788]
    ],
     {
    color: 'red',
    weight: 10,
    opacity: 0.7,
    dashArray: '20,15',
    lineJoin: 'round'
            }
    ).addTo(mymap);
    ////////
var museumIcon = L.icon({
    iconUrl: "img/logo50.png",
    shadowUrl: "img/logo50_shadow.png",
    iconSize:     [60, 34], // size of the icon
    shadowSize:   [60, 34], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [21, 93],  // the same for the shadow
   
    popupAnchor:  [0, -90] // point from which the popup should open relative to the iconAnchor
});
var logo50 = L.marker([42.0758849, -87.7250815], {icon: museumIcon}).addTo(mymap);
logo50.bindPopup("Wilmette Historical Museum");

var popup = L.popup();
function onMapClick(e) {
    popup
    .setLatLng(e.latlng)
    .setContent("Map " + e.latlng.toString())
    .openOn(mymap);
    }
    mymap.on('click', onMapClick);
function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}

 // create custom icon
    var bahaiIcon = L.icon({
        iconUrl: 'img/bahai_icon.png',
        iconSize: [40, 40],
        popupAnchor: [0,-15],
                });
    // create popup contents
    var bahaiPopup = "bahai temple<br/><img src='bahai_icon' alt='bahai temple' width='700px'/>";
    //var bahaiPopup = "bahai temple<br/><img src='img/bahai.png' alt='bahai temple' width='700px'/>";
    // specify popup options 
    var bahaiOptions =
        {
        'maxWidth': '750',
        'className' : 'custom',
        'offset' : 'Point(7, 7)'
        };
    // create marker object, pass custom icon as option, pass content and options to popup, add to map
    L.marker([42.08816, -87.703], {icon: bahaiIcon, title:"Click to show window."}).bindPopup(bahaiPopup,bahaiOptions).addTo(mymap);

//////modle over lay//////////

    var popoverwin = L.marker([42.05771, -87.76274],{title:"Click to show window." }).addTo(mymap);

    popoverwin.on('click',function(){
    var win =  L.control.window(mymap,{title:'Hello world!',maxWidth:400,modal: true, position:'topLeft'})
    .content("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris .  molestie.<img src='img/bahai.png' alt='bahai temple' width='380px'/>")
    .prompt({callback:function(){console.log('This is called after OK click!');}
    })
    .show();
    });

// var winMtds = L.control.window(mymap)
//         .title('Heading!')
//         .content('First paragraph.')
//         .show();
/////
// geoJson example////////
var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-87.72978, 42.06816]

    }
};
L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
}).addTo(mymap);
var myLayer = L.geoJSON().addTo(mymap);
//myLayer.addData(geojsonFeature);
////External json file
////External json file

// var geojsonLayer = new L.GeoJSON.AJAX("/js/85940917.geojson");
// geojsonLayer.addTo(mymap);

var district_boundary = new L.geoJson();
 $.ajax({
dataType: "json",
url: "/js/85940917.geojson",
 success: function(data) {
     $(data.features).each(function(key, data) {
         district_boundary.addData(data);
     });
 }
}).error(function() {
     console.log("Error in json");
});


  // load GeoJSON from an external file
  $.getJSON("/js/85940917.geojson",function(data){
    // add GeoJSON layer to the map once the file is loaded
    L.geoJson(data).addTo(mymap);
  });
}
// district_boundary.addTo(mymap);
/////////////end//////////

//this is the end for now


