var long = document.getElementById("longitud");
var lat = document.getElementById("latitud");
var err = document.getElementByID("errors");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    lat.innerHTML = position.coords.latitude;
    long.innerHTML = position.coords.longitude;
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            err.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            err.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            err.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            err.innerHTML = "An unknown error occurred."
            break;
    }
}

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.1923129, lng: -3.6174496},
    zoom: 6
  });
  var infoWindow = new google.maps.InfoWindow({map: map});