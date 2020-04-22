function initMap() {
  var iit_tower = {lat: 41.831602, lng: -87.627231};
  var map = new google.maps.Map(document.getElementById('map'), {
		  zoom: 18, 
		  center: iit_tower,
	      mapTypeId: 'satellite'
	  });
  var marker = new google.maps.Marker({position: iit_tower, map: map});
}
