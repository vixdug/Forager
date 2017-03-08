
$('.ui.page.dimmer').dimmer('show');

$('.ui.sticky')
  .sticky({
    context: '#map'
  })
;


$('.ui.dropdown').dropdown({
  onChange: function (val) {
    $('.card').show()
    console.log(val);
    if (val == "All") {
      $('.card').show()
    } else {
    filterByType(val)
    }
    }})





    // getSelectedTextValue()
function filterByType(val) {
    $('.header').filter(function(){
      var upperCase = $(this).text().toUpperCase()
      var upperCaseValue = val.toUpperCase()
      console.log(upperCase, "vs", upperCaseValue);
      return $(this).text() !== val
    }).closest('.card').hide();
  }



 // function getSelectedTextValue() {
 //   console.log(($('.ui.dropdown').dropdown('get value') ))
 // }


 $('.veg').state({
   onChange: function() {
     $('.card').show()
     console.log("veg");
     $('.card').filter('#Fruit')
     .hide()
     .end()
   }})


$('.fruit').state({
  onChange: function() {
    $('.card').show()
    console.log("fruit");
    $('.card').filter('#Vegetable')
    .hide()
    .end()
  }})

  $('.ui.page.dimmer')
    .dimmer('show')
  ;

    $('.button.all').state({
      onChange: function() {
        $('.card').show()
        console.log("all");
      }})

      // var previous = null;
      // var current = null;
      //     setInterval(function() {
      //         $.getJSON("/markers.json", function(json) {
      //             current = JSON.stringify(json);
      //             if (previous && current && previous !== current) {
      //                 console.log('refresh');
      //                 location.reload();
      //             }
      //             previous = current;
      //         });
      //     }, 2000);



var markerYo;
var saveData;
var formattedAddress;
  function initMap() {
    var vancouver = {lat: 49.28617129915935, lng: -123.12309265136719};
    console.log("init?");
		// Creating a new map
		var map = new google.maps.Map(document.getElementById("map"), {
          center: vancouver,
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });


  var json = (function () {
               var json = null;
               $.ajax({
                   'async': false,
                   'global': false,
                   'url': "/markers.json",
                   'dataType': "json",
                   'success': function (data) {
                   json = data.markers;
                    }
               });
               return json;
           })();



           var infowindow = new google.maps.InfoWindow();
            var formInfoWindow =  new google.maps.InfoWindow({
                      content: document.getElementById('form')
                    })


           var input = document.getElementById('pac-input');
                var searchBox = new google.maps.places.SearchBox(input);
                map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

              // search map based on address
                map.addListener('bounds_changed', function() {
                  searchBox.setBounds(map.getBounds());
                });

                var markers = [];
                console.log("markers in da house", markers);

                searchBox.addListener('places_changed', function() {
                  var places = searchBox.getPlaces();

                  if (places.length == 0) {
                    return;
                  }

                  markers.forEach(function(marker) {
                    marker.setMap(null);

                  });

                  markers = [];

                  // For each place, get the icon, name and location.
                  var bounds = new google.maps.LatLngBounds();
                  places.forEach(function(place) {
                    if (!place.geometry) {
                      console.log("Location not found, please enter a different address.");
                      return;
                    }
                    var icon = {
                      url: place.icon,
                      size: new google.maps.Size(71, 71),
                      origin: new google.maps.Point(0, 0),
                      anchor: new google.maps.Point(17, 34),
                      scaledSize: new google.maps.Size(25, 25)
                    };


                    markers.push(new google.maps.Marker({
                      map: map,
                      icon: icon,
                      title: place.name,
                      position: place.geometry.location,
                      infowindow: infowindow

              }))
                    if (place.geometry.viewport) {
                      // Only geocodes have viewport.
                      bounds.union(place.geometry.viewport);
                    } else {
                      bounds.extend(place.geometry.location);
                    }
                  });
                  map.fitBounds(bounds);
                });

                google.maps.event.addListener(map, 'click', function(event) {
                         markerYo = new google.maps.Marker({
                           position: event.latLng,
                           map: map,
                           animation: google.maps.Animation.DROP,
                           infowindow: infowindow
                         });

                         google.maps.event.addListener(markerYo, 'click', function() {
                                  infowindow.setContent(document.getElementById('form'))
                                   infowindow.open( map, markerYo );
                                  });
                       })


                       // markers are stored in an array of objects markers.
                       var foundID = findID()

                    //    function getID(id){
                    //    var cardClick = document.getElementsByName(id)[0];
                    //    google.maps.event.addDomListener(cardClick, 'click', function(){
                    //       console.log("testing listener");
                    //      console.log(id);
                    //    })
                    //  }

                     function bounceMarker(marker){
                       marker.setAnimation(google.maps.Animation.BOUNCE)
                       console.log("bouncing");
                     setTimeout(function(){ marker.setAnimation(null); }, 750);
                   }

                   function findMarker(staticID){
                     for (var i = 0, length = markers.length; i < length; i++) {
                       var currentMarkerID = markers[i].id
                       if (currentMarkerID == staticID) {
                         marker = markers[i]
                         bounceMarker(marker)
                       }
                     }
                   }




		// Looping through the JSON data
		for (var i = 0, length = json.length; i < length; i++) {
			var data = json[i],
				latLng = new google.maps.LatLng(data.latitude, data.longitude)
        console.log(latLng);

			// Creating a marker and putting it on the map
			var marker = new google.maps.Marker({
				position: latLng,
        map: map,
				title: data.name,
        category: data.category,
        id: data.id
			});
      markers.push(marker);






			// Creating a closure to retain the correct data, notice how I pass the current data in the loop into the closure (marker, data)
			(function(marker, data) {

				// Attaching a click event to the current marker
				google.maps.event.addListener(marker, "click", function() {
					infowindow.setContent("<div>"+ "Name: "+data.name+"<br>"+"Category: "+data.category+"<br>"+"Location: "+ data.address);
					infowindow.open(map, marker);
				});
        console.log("marker", marker);
			})(marker, data);



		}

    function findID() {
      $('.card').on('click', function (e) {
      var staticID = $(this).attr("name")
      findMarker(staticID);
      })
    }


    saveData = function(){
      var name = escape(document.getElementById('name').value);
      var category = document.getElementById('type').value;
      var latlng = markerYo.getPosition();
      infowindow.close();


      var geocoder = new google.maps.Geocoder;
      geocoder.geocode({'location': latlng},
      function(results, status) {
      formattedAddress = results[0].formatted_address
        console.log(results[0].formatted_address);
        console.log("latlng"+ latlng);
        infowindow.setContent("<div>"+ "Name: "+name+"<br>"+"Category: "+category+"<br>"+"Location: "+formattedAddress)
        infowindow.open(map, markerYo)



      $.ajax({
        'async': false,
        url : '/markers',
        type: 'POST',
        dataType : "json",
        data: {
        "marker": {
        "name": name,
        "category": category,
        "longitude": latlng.lng(),
        "latitude": latlng.lat(),
        "address": formattedAddress

        //TODO: add formatted address

      }},
        success:function(data) { alert(JSON.stringify(data)); },
        error: function(data) { alert(JSON.stringify(data)); }
      })
})
    }

	}
