
//Adding slide show with nav////
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Initialize and adding  map//

var map;
function initMap()
{
    // The location of//
var latlang={lat:4.710859,lng:-74.074955};
mapa=new google.maps.Map(
		document.getElementById('gmaps'),
		{center: new google.maps.LatLng(41.835812, -87.625853), zoom:15});
//^map centered mtcc//
var marker= new google.maps.Marker({position:latlang,map:map});
//movement control w marker//
marker= new google.maps.Marker({
	map:map,
	draggable:true,
	animation:google.maps.Animation.BOUNCE,
	position:new google.maps.LatLng(8.2, -75.90),
});
}


