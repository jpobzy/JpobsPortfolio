let slideIndexA = 1;
AshowSlides(slideIndexA);

function AplusSlides(n) {
  AshowSlides(slideIndexA += n);
}

function AcurrentSlide(n) {
  AshowSlides(slideIndexA = n);
}

function AshowSlides(n) {
  let i;
  let slides = document.getElementsByClassName("AmySlides");
  let dots = document.getElementsByClassName("dotA");
  if (n > slides.length) {slideIndexA = 1}    
  if (n < 1) {slideIndexA = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexA-1].style.display = "block";  
  dots[slideIndexA-1].className += " active";
}