
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

var map;
function initMap()
{
var latlang={lat:4.710859,lng:-74.074955};
mapa=new google.maps.Map(
		document.getElementById('gmaps'),
		{center: new google.maps.LatLng(41.835668, -87.624221), zoom:15});

var marker= new google.maps.Marker({position:latlang,map:map});

marker= new google.maps.Marker({
	map:map,
	draggable:true,
	animation:google.maps.Animation.BOUNCE,
	position:new google.maps.LatLng(6.219131, -75.566329),
});
}

