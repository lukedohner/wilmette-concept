window.onload = function() {
init();
};
function init(){
	var map = L.map('mapid').setView([42.0788, -87.73021], 14);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    zoomControl:true,
    maxZoom: 18,
    minZoom: 13,
    id: 'mapbox.satellite',
    optimize:true,
    //id: 'mapbox.streets',
    //id: 'mapbox.light'
    accessToken: 'sk.eyJ1IjoibHVrZWRvaG5lciIsImEiOiJjajRnMnFtNHQwMTQzMzJwaTE4b2pxbzlsIn0.FhKUrokvRUth-xBZUtMcrw'
 }).addTo(map);

    var wilmetteBoarder = $.getJSON("js/85940917.geojson",function(data){
    // add GeoJSON layer to the map once the file is loaded
    L.geoJSON(data, {
    style: function (feature) {
        return {
            color: "#A1A1A1", 
            fillColor: '#2BF145',
            fillOpacity: 0.2,
            weight: 2,
            dashArray: '3',
        };
    }
    }).addTo(map);
    });
    var myWilmetteBoarder = L.layerGroup([wilmetteBoarder]);
 
setTimeout(function(){
    //Using setTime to put on a higher layer in Interactive Lealet layer
    var latlngs = [
    [42.07797, -87.74188],
    [42.07758, -87.73733],
    [42.07567, -87.7375],
    [42.07535, -87.73493],
    [42.07402, -87.7351],
    [42.07414, -87.73991],
    [42.07797, -87.74188],];
    var communitypark = L.polygon(latlngs, {
    color: 'green',
    fillColor: '#2BF145',
    fillOpacity: 0.3
    }
        ).addTo(map);
    communitypark.bindPopup("Come to Community Park <br>(Example of a polygon, neet-o!)");
    //console.log("communpark");
    //
}, 1000);
	//map.zoomControl.disable();
    // map.dragging.disable();
    var southWest = L.latLng(42.06255, -87.78179),
    northEast = L.latLng(42.09198, -87.67399);
    var bounds = L.latLngBounds(southWest, northEast);
    map.setMaxBounds(bounds);
    map.on('drag', function() {
    map.panInsideBounds(bounds, { animate: false });
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
    ).addTo(map);
    ////////
// var museumIcon = L.icon({
    // iconUrl: "img/logo50.png",
    // shadowUrl: "img/logo50_shadow.png",
//     iconSize:     [60, 34], // size of the icon
//     shadowSize:   [60, 34], // size of the shadow
//     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//     shadowAnchor: [21, 93],  // the same for the shadow
   
//     popupAnchor:  [0, -90] // point from which the popup should open relative to the iconAnchor
// });
// var whsMarker = L.marker([42.0758849,-87.7250815], {icon: museumIcon}).addTo(map);
// whsMarker.bindPopup("Wilmette Historical Museum");

//modal creation
    // create bahaiIcon icon
    var whmIcon = L.icon({
    iconUrl: "img/whmIcon.png",
    shadowUrl: "img/whmIcon_shadow.png",
    iconSize:     [60, 34], // size of the icon
    shadowSize:   [60, 34], // size of the shadow
    iconAnchor:   [1, 1], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 0],  // the same for the shadow
        popupAnchor: [0,-15],
        });
    // create marker object, pass custom icon as option, pass content and options to popup, add to map
    var popoverwin = L.marker([42.07535, -87.72259],{icon: whmIcon,title:"Click to Wilmette Historical Museum." }).addTo(map);
    //////modal over lay//////////
    popoverwin.on('click',function(){
    var win =  L.control.window(map,{title:'Wilmette Historical Museum',width:"100%", maxWidth:"400px",modal: true, position:'topLeft'})
    .content("The Wilmette Historical Museum was established by the Village of Wilmette in 1951. <img src='img/whm.jpg' alt='whm' width='100%'/><br><a href='http://www.wilmettehistory.org/' target='_blank'>Wilmette Historical Museum</a> 609 Ridge Road, Wilmette, IL 60091" )
    .prompt({callback:function(){console.log('This is called after OK click!');}
    })
    .show();
    });
//end modal creation


//modal creation
    // create bahaiIcon icon
    var bahaiIcon = L.icon({
        iconUrl: 'img/bahai_icon.png',
        iconSize: [40, 40],
        shadowUrl: "img/circleIcon_shadow.png",
        shadowSize:   [40, 40], // size of the shadow
        iconAnchor:   [2, 4], // point of the icon which will correspond to marker's location
        shadowAnchor: [0, 0],  // the same for the shadow
        popupAnchor: [0,-15],
        });
    // create marker object, pass custom icon as option, pass content and options to popup, add to map
    var bahaiWin = L.marker([42.074439,-87.6864557],{icon: bahaiIcon,title:"Click to show window." }).addTo(map);
    //////modal over lay//////////
    bahaiWin.on('click',function(){
    var win =  L.control.window(map,{title:'Baháí House of Worship', width:"100%", maxWidth:"400px", modal: true, position:'topLeft'})
    .content("The cornerstone for the Bahá'í House of Worship in Wilmette, Illinois. National Register of Historic Places.<img src='img/bahai.png' alt='bahai temple' width='100%'/><br> <a href='bahaitemple.org' target='_blank'>Bahai USA</a> 100 Linden Ave, Wilmette, IL 60091" )
    .prompt({callback:function(){console.log('This is called after OK click!');}
    })
    .show();
    });
//end modal creation
//historicHome
//modal creation
    // create bahaiIcon icon
    var historicHomeIcon = L.icon({
        iconUrl: 'img/historicHome_icon.png',
        iconSize: [40, 40],
        shadowUrl: "img/circleIcon_shadow.png",
        shadowSize:   [40, 40], // size of the shadow
        iconAnchor:   [2, 4], // point of the icon which will correspond to marker's location
        shadowAnchor: [0, 0],  // the same for the shadow
        popupAnchor: [0,-15],
        });
    // create marker object, pass custom icon as option, pass content and options to popup, add to map
    var historicHomeWin = L.marker([42.08265, -87.70268],{icon: historicHomeIcon,title:"Click to show window." }).addTo(map);
    //////modal over lay//////////
    historicHomeWin.on('click',function(){
    var win =  L.control.window(map,{title:'Asahel Gage House',width:"100%", modal: true, position:'topLeft'})
    .content("Stroll around part of east Wilmette to see some of the remaining examples of 1870s homes.<br><img src='img/historicHome.jpg' alt='bahai temple' width='100%'/><br><a href='http://www.wilmettehistory.org/' target='_blank'>Wilmette History Museum</a> 609 Ridge Road, Wilmette, IL 60091" )
    .prompt({callback:function(){console.log('This is called after OK click!');}
    })
    .show();
    });
//end modal creation

//modal creation
    // create westmoreland Country Club icon
    var westmoreIcon = L.icon({
        iconUrl: 'img/westmore_icon.png',
        iconSize: [40, 40],
        shadowUrl: "img/circleIcon_shadow.png",
        shadowSize:   [40, 40], // size of the shadow
        iconAnchor:   [2, 4], // point of the icon which will correspond to marker's location
        shadowAnchor: [0, 0],  // the same for the shadow
        popupAnchor: [0,-15],
        });
    // create marker object, pass custom icon as option, pass content and options to popup, add to map
    var westmoreWin = L.marker([42.06777, -87.73639],{icon: westmoreIcon,title:"Click to show window." }).addTo(map);
    //////modal over lay//////////
    westmoreWin.on('click',function(){
    var win =  L.control.window(map,{title:'Westmoreland Country Club',width:"100%", maxWidth:"400px",modal: true, buttonOK: 'test',position:'topLeft'})
    .content("Llorem ipsum dolor sit amet,consectetur adipiscing elit. Consectetur adipiscing elit.<img src='img/westmore.jpg' alt='westmore country club' width='100%'/><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<a href='http://www.westmorelandcc.org//' target='_blank'>Westmoreland CC</a> 2601 Old Glenview Road Wilmette, Illinois 60091" )
    .prompt({callback:function(){console.log('This is called after OK click!');}
    })
    .show();
    });
//end modal creation
//modal creation
    // Waters Meet Woods icon
    var watersmeetIcon = L.icon({
        iconUrl: 'img/myMarker_icon.png',
        iconSize: [25, 41],
        popupAnchor: [0,-15],
        });
    // create marker object, pass custom icon as option, pass content and options to popup, add to map
    var watersmeetWin = L.marker([42.08472, -87.76926],{icon: watersmeetIcon,title:"Click to show window." }).addTo(map);
    //////modal over lay//////////
    watersmeetWin.on('click',function(){
    var win =  L.control.window(map,{title:'Watersmeet Woods',width:"100%", maxWidth:"400px",modal: true, position:'topLeft'})
    .content("Lorem ipsum dolor sit amet,consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.<img src='img/watersmeet.jpg' alt='westmore country club' width='100%'/><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<a href='http://www.wilmettehistory.org/' target='_blank'>wilmettehistory</a> West Wilmette" )
    .prompt({callback:function(){console.log('This is called after OK click!');}
    })
    .show();
    });
//end modal creation



// var geojsonFeature = {
//     "type": "Feature",
//     "properties": {
//          "iconUrl": "img/historicHome_icon.png",
//         "name": "Coors Field",
//         "amenity": "Baseball Stadium",
//         "popupContent": "Green Bay Road!"
//     },
//     "geometry": {
//         "type": "Point",
//         "coordinates": [42.07459, -87.70738]

//     }
// };
// L.geoJSON(geojsonFeature, {
//     onEachFeature: onEachFeature
// }).addTo(map);
// var myLayer = L.geoJSON().addTo(map);

var popup = L.popup();
function onMapClick(e) {
    popup
    .setLatLng(e.latlng)
    .setContent("Map " + e.latlng.toString())
    .openOn(map);
    }
    map.on('click', onMapClick);


function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}


setTimeout(function(){
    //
    var circle = L.circle([42.07956, -87.7587], {
    color: 'green',
    fillColor: '#2BF145',
    fillOpacity: 0.3,
    radius: 100,
    "z-Index":"300"
    }).addTo(map);
    circle.bindPopup("I94 and Lake Av.<br> (Example of a circle vector)");
    //
}, 1500);

}
