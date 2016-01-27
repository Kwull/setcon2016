window.onload = (function() {
    var myLatLng = {
        lat: 52.0931856,
        lng: 23.6793996
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: myLatLng,
        scaleControl: true,
            overviewMapControl: true
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map
    });
})();
