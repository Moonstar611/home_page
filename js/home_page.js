/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(52, 0),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    var googleMap = new google.maps.Map(document.getElementById("map"), mapOptions);
    var infoWindow = new google.maps.InfoWindow({map: googleMap});
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            infoWindow.setPosition(pos);
            infoWindow.setContent('You Are Here');
            googleMap.setCenter(pos);
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(pos.lat, pos.lng),
            });
            marker.setMap(googleMap);
        }, function (err) {
            window.alert(err.message);
            handleLocationError(true, infoWindow, googleMap.getCenter());
        });
    } else {
        handleLocationError(false, infoWindow, googleMap.getCenter());
    }
}

function handleLocationError(hasGeoLocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(hasGeoLocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.');
}

