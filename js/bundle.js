var mapModule = (function() {
    var myLatLng = {
        lat: 52.1436483,
        lng: 23.6816669
    };

    function initMapWithMarker() {
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
    }

    return {
        initMap: initMapWithMarker
    };
})();

var menuToogler = (function() {
    return {
        toggleMenu: function(classToggleName) {
            document.getElementById('mobile-menu').classList.toggle(classToggleName);
        }
    };
})();
