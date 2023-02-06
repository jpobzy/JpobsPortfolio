let slideIndexB = 1;
showSlidesB(slideIndexB);

function plusSlidesB(n) {
  showSlidesB(slideIndexB += n);
}

function currentSlideB(n) {
  showSlidesB(slideIndexB = n);
}

function showSlidesB(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesB");
  let dots = document.getElementsByClassName("dotB");
  if (n > slides.length) {slideIndexB = 1}    
  if (n < 1) {slideIndexB = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexB-1].style.display = "block";  
  dots[slideIndexB-1].className += " active";
}