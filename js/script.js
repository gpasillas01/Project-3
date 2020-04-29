
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

// Initialize and add the map//
 function initMap() {
   // IIT Location//
   var uluru = {lat:41.834433,lng: -87.627020};
   //  map, centered on IIT campus//
   var map = new google.maps.Map(
       document.getElementById('map'), {zoom: 8, center: uluru});
   // add marker//
   var marker = new google.maps.Marker({position: uluru, map: map});
 }
                                      
                                      
