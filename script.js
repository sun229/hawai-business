//benefits-slider
var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("benefits-image");
  var benefitsBtns = document.getElementsByClassName("benefits-btn");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < benefitsBtns.length; i++) {
    benefitsBtns[i].className = benefitsBtns[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  benefitsBtns[slideIndex-1].className += " active";
}


//serviceinfo-slider
var serviceSlideIndex = 1;
showServiceSlides(serviceSlideIndex);

function currentServiceSlide(n) {
  showServiceSlides(serviceSlideIndex = n);
}

function showServiceSlides(n) {
  var i;
  var serviceSlides = document.getElementsByClassName("serviceinfo-image");
  var serviceBtns = document.getElementsByClassName("service-btn");
  if (n > serviceSlides.length) {serviceSlideIndex = 1}
  if (n < 1) {serviceSlideIndex = serviceSlides.length}
  for (i = 0; i < serviceSlides.length; i++) {
    serviceSlides[i].style.display = "none";
  }
  for (i = 0; i < serviceBtns.length; i++) {
    serviceBtns[i].className = serviceBtns[i].className.replace(" active", "");
  }
  serviceSlides[serviceSlideIndex-1].style.display = "block";
  serviceBtns[serviceSlideIndex-1].className += " active";
}