function initMap() {
    var mapOptions = {
        center: new google.maps.LatLng(-34.599797, -58.372729),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        mapTypeId: 'roadmap'
    }
     var bounds = new google.maps.LatLngBounds();

var map = new google.maps.Map(document.getElementById("map"), mapOptions);

 var position = new google.maps.LatLng(-34.599797, -58.372729);
 bounds.extend(position);
 marker = new google.maps.Marker({
            position: position,
            map: map,
            title: "Estudio Palmero Belizan"
        });
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(arrayDescripciones[i].descripcion);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
      //  map.fitBounds(bounds);
}
