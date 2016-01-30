var mapModule = (function() {
    var myLatLng = {
        lat: 52.0931856,
        lng: 23.6793996
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
            var classList = document.getElementById('mobile-menu').classList;
            if(classList.contains(classToggleName))
                classList.remove(classToggleName)
            else classList.add(classToggleName);
        }
    };
})();
