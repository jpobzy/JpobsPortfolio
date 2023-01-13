const button = document.getElementById('scroll-to-top-btn');
button.addEventListener('click', event => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

var footer = document.getElementById("footer");
var footerHeight = footer.clientHeight;

scrollToTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0 - footerHeight,
    behavior: "smooth"
  });
});










function scrollToAboutMe() {
  var aboutMe = document.querySelector(".aboutme-title");
  var aboutMePosition = aboutMe.getBoundingClientRect();
  var aboutMePositionFromTop = aboutMePosition.top + window.pageYOffset;
  window.scrollTo({
    top: aboutMePositionFromTop,
    behavior: "smooth"
  });
}



// function scrollToAboutMe() {
//   var aboutMe = document.querySelector(".aboutme-title");
//   var aboutMePosition = aboutMe.getBoundingClientRect();
//   window.scrollTo({
//     top: aboutMePosition.top,
//     behavior: "smooth"
//   });
// }




$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if( target.length ) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 1000);
  }
});
