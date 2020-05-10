                    // When the window has finished loading create our google map below
                    // google.maps.event.addDomListener(window, 'load', init);

                    function init() {
                        // Basic options for a simple Google Map
                        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                        var myLatlng = new google.maps.LatLng(37.5967007, -77.5162545);


                        var mapOptions = {
                            // How zoomed in you want the map to start at (always required)
                            zoom: 10,
                            disableDefaultUI: false,
							scrollwheel: true, 
                            
                            // The latitude and longitude to center the map (always required)

                            center: myLatlng, // New York

                            // How you would like to style the map. 
                            // This is where you would paste any style found on Snazzy Maps.
                            // styles: [{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":0.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}]
                        }; 

                        // Get the HTML DOM element that will contain your map 
                        // We are using a div with id="map" seen below in the <body>
                        var mapElement = document.getElementById('map');

                        // Create the Google Map using out element and options defined above
                        var map = new google.maps.Map(mapElement, mapOptions);
                        
                        var infowindow = new google.maps.InfoWindow({
                            content: "<span>The Kittrell Company</span>"+"<br/>"+
                            "<span>6327 Mallory Drive</span>"+"<br/>"+
                            "<span>Richmond, Virginia - 23226</span>"+"<br/>"+
                            "<span><strong>Phone:</strong>804-285-7869</span>"+"<br/>"+
                            "<span><strong>Email:</strong><a href='mailto:thekittrellcompany@gmail.com'>thekittrellcompany@gmail.com</a></span>"
                          });
                        
                        var marker = new google.maps.Marker({
                            position: myLatlng,
                            map: map,
                            // label:'The Kittrell Company',
                            // animation: google.maps.Animation.DROP,
							// icon: 'images/map-marker.png',
                            title: 'The Kittrell Company',
                            
                        });
						// marker.addListener('click', function() {
                            infowindow.open(map, marker);
                        //   });
						

                    }
