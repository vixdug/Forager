// $('.ui.sticky')
//   .sticky({
//     context: '#map'
//   })
// ;
//
//
// $('.ui.dropdown').dropdown({
//   onChange: function (val) {
//     $('.card').show()
//     console.log(val);
//     if (val == "All") {
//       $('.card').show()
//     } else {
//     filterByType(val)
//     }
//     }})
//
//
//
//     // getSelectedTextValue()
// function filterByType(val) {
//     $('.header').filter(function(){
//       var upperCase = $(this).text().toUpperCase()
//       var upperCaseValue = val.toUpperCase()
//       return upperCase !== upperCaseValue
//     }).closest('.card').hide();
//   }
//
//  // function getSelectedTextValue() {
//  //   console.log(($('.ui.dropdown').dropdown('get value') ))
//  // }
//
// $('.fruit').state({
//   onChange: function() {
//     $('.card').show()
//     console.log("fruit");
//     $('.card').filter('#Veg')
//     .hide()
//     .end()
//   }})
//
//   $('.veg').state({
//     onChange: function() {
//       $('.card').show()
//       console.log("veg");
//       $('.card').filter('#Fruit')
//       .hide()
//       .end()
//     }})
//
//     $('.button.all').state({
//       onChange: function() {
//         $('.card').show()
//         console.log("all");
//
//       }})
//
//
//       var map;
//       var marker;
//       var infowindow;
//       // var messagewindow;
//
//       function initMap() {
//         console.log("map init");
//         var vancouver = {lat: 49.28617129915935, lng: -123.12309265136719};
//         map = new google.maps.Map(document.getElementById('map'), {
//           center: vancouver,
//           zoom: 13
//         });
//
//       var input = document.getElementById('pac-input');
//       var searchBox = new google.maps.places.SearchBox(input);
//       map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
//
//       addMarkers()
//     // search map based on address
//       map.addListener('bounds_changed', function() {
//         searchBox.setBounds(map.getBounds());
//       });
//
//       var markers = [];
//
//       searchBox.addListener('places_changed', function() {
//         var places = searchBox.getPlaces();
//
//         if (places.length == 0) {
//           return;
//         }
//
//         markers.forEach(function(marker) {
//           marker.setMap(null);
//
//         });
//
//         infowindow = new google.maps.InfoWindow({
//           content: document.getElementById('form')
//         })
//
//
//
//         markers = [];
//
//         // For each place, get the icon, name and location.
//         var bounds = new google.maps.LatLngBounds();
//         places.forEach(function(place) {
//           if (!place.geometry) {
//             console.log("Location not found, please enter a different address.");
//             return;
//           }
//           var icon = {
//             url: place.icon,
//             size: new google.maps.Size(71, 71),
//             origin: new google.maps.Point(0, 0),
//             anchor: new google.maps.Point(17, 34),
//             scaledSize: new google.maps.Size(25, 25)
//           };
//
//
//           markers.push(new google.maps.Marker({
//             map: map,
//             icon: icon,
//             title: place.name,
//             position: place.geometry.location,
//             infowindow: infowindow
//     }))
//           if (place.geometry.viewport) {
//             // Only geocodes have viewport.
//             bounds.union(place.geometry.viewport);
//           } else {
//             bounds.extend(place.geometry.location);
//           }
//         });
//         map.fitBounds(bounds);
//       });
//
//
//
//
//     //need closure to persist data?
//         google.maps.event.addListener(map, 'click', function(event) {
//           marker = new google.maps.Marker({
//             position: event.latLng,
//             map: map,
//             infowindow: infowindow
//           });
//           console.log(infowindow);
//           console.log(event.latLng);
//
//           google.maps.event.addListener(marker, 'click', function() {
//               // infowindow.setContent(document.getElementById('form'))
//            infowindow.open( map, this );
//           });
//         });
//
// 
//       }
//
//       function infoBox(map, marker, data) {
//             var infoWindow = new google.maps.InfoWindow();
//             // Attaching a click event to the current marker
//             google.maps.event.addListener(marker, "click", function(e) {
//                 infoWindow.setContent(data.content);
//                 infoWindow.open(map, marker);
//             });
//
//            (function(marker, data) {
//              google.maps.event.addListener(marker, "click", function(e) {
//                infoWindow.setContent(data.content);
//                infoWindow.open(map, marker);
//              });
//            })(marker, data);
//           }
//
//
//
//     //function to save data from form
//       function saveData() {
//         var name = escape(document.getElementById('name').value);
//         var category = document.getElementById('type').value;
//         var latlng = marker.getPosition();
//         infowindow.close();
//
//
//         var geocoder = new google.maps.Geocoder;
//         geocoder.geocode({'location': latlng},
//         function(results, status) {
//           var formattedAddress = results[1].formatted_address
//           console.log(results[1].formatted_address);
//           console.log("latlng"+ latlng);
//             this.infowindow.setContent("<div>"+ "Name: "+name+"<br>"+"Category: "+category+"<br>"+"Location: "+formattedAddress)
//         })
//
//
//         $.ajax({
//           url : '/markers',
//           type: 'POST',
//           dataType : "json",
//           data: {
//           "marker": {
//           "name": name,
//           "category": category,
//           "longitude": latlng.lng(),
//           "latitude": latlng.lat(),
//
//         }},
//           success:function(data) { alert(JSON.stringify(data)); },
//           error: function(data) { alert(JSON.stringify(data)); }
//         })
//
//       }
//
//
//
//
//
//       // function addMarkers(center, radius, map) {
//       //     var json = (function () {
//       //         var json = null;
//       //         $.ajax({
//       //             'async': false,
//       //             'global': false,
//       //             'url': "/markers.json",
//       //             'dataType': "json",
//       //             'success': function (data) {
//       //             json = data.markers;
//       //              }
//       //         });
//       //         return json;
//       //
//       //     })();
//       //
//       //     for (var i = 0, length = json.length; i < length; i++) {
//       //         var data = json[i],
//       //         latLng = new google.maps.LatLng(data.latitude, data.longitude);
//       //         console.log("data working?",data);
//       //
//       //             var marker = new google.maps.Marker({
//       //                 position: latLng,
//       //                 map: map,
//       //                 title: data.name
//       //               })
//       //               // infoBox(map, marker, data);
//       //           }
//       //         }
