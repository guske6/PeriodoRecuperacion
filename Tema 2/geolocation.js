var long = document.getElementById("longitud");
var lat = document.getElementById("latitud");
var err = document.getElementById("errors");

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
    initMap(position.coords.latitude, position.coords.longitude);

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

function initMap(lati, longi) {
  var map = new google.maps.Map(document.getElementById('mapa'), {
    center: {lat: lati, lng: longi},
    zoom: 15
  });
  var infoWindow = new google.maps.InfoWindow({map: map});
  var marker = new google.maps.Marker({map: map, position:{
        lat: lati,
        lng: longi},
        title: 'Estas aqui',
        animation: google.maps.Animation.DROP,});
    marker.addListener('click', toggleBounce);
    
function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
    
}


