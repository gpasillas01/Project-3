function initMap() {
  var iit_tower = {lat: 41.831602, lng: -87.627231};
  var map = new google.maps.Map(document.getElementById('map'), {
		  zoom: 18, 
		  center: iit_tower,
	      mapTypeId: 'satellite'
	  });
  var marker = new google.maps.Marker({position: iit_tower, map: map});
}

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


window.onload = changeImg;
