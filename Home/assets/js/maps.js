(function($) {

    'use strict';

    /**
     * Table Of Content
     * 
     *  1. [GOOGLE MAP]  	- MAP CONTACT PAGE
     *
     */

		//  Init Map
        initMap()

    	// 5. MAP CONTACT PAGE	
    	var map;
        function initMap() {

            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 13,
                center: new google.maps.LatLng(29.940719, -90.028403),
                mapTypeId: 'roadmap',
                zoomControl: false,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                rotateControl: false,
                scrollwheel: false,
                fullscreenControl: true
            });

        }
    	
})(jQuery);
        