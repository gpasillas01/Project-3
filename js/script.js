
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
//*
// Initialize and add the map//
function initMap() {
   // map option //
  var options = {
   zoom: 8,
   center:{lat:41.834433,lng: -87.627020}
  }

  //new map//
  var map = new
  google.maps.Map (document.getElementById('map'), options);
  
  //Listen for map clicks 
  google.maps.event.addListener(map,'click',
   function(event){
    //adding random location pins when clicked
    addMarker({coords:event.lating});
  });
  
  /*
  //marker//
  var marker = new google.maps.Marker({
    position:{lat:41.834815,lng: -87.626904},
    map:map
    icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
  }};
 var infoWindow = new google.maps.InfoWindow({
     content:'<h1>Chicago, IL</h1>'});
  //listener//
  marker.addListener('click',function(){
    infoWindow.open(map, marker);
  });
  */
  //Array maarkers
  vars markers=[
    { 
    coords:{lat:41.834433,lng: -87.627020},
    iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    content:'<h1>Chicago</h1>'
  },
    {
  coords:{lat:41.882697,lng: -87.624205},
    },
      {    
  coords:{lat:39.735088,lng: -104.959735},
      },
    {
     coords:{29.766089, -95.367785}
    }
   ];
  
  
  //loop through markers
  for(var i=0;i<markers.length;i++){
    //add marker
    addMarker(markers[i];
              }
  
  
  //add marker function
  function addMarker(coords){
   var marker = new google.maps.Marker({
    position:{coords},
    map:map
    //icon:props.iconImage
     
  }};
   //check custom.                                    
  if(props.iconImage){
     //icon image
     marker.setIcon(props.iconImage);
}
    //check content
    if(props.content){
      var infoWindow = new google.maps.InfoWindow({
     content:props.content 
      
      });
  //listener//
  marker.addListener('click',function(){
    infoWindow.open(map, marker);
  });
  }
}
                                      
                                      
