/////////////////////////////// FOR L4D BUTTONS ////////////////////

// select the buttons and images
const beforeButton = document.querySelector('.before-button');
const afterButton = document.querySelector('.after-button');
const beforeImage = document.querySelector('.before-image');
const afterImage = document.querySelector('.after-image');

// add event listeners to the buttons
beforeButton.addEventListener('click', () => {
  beforeImage.style.display = 'block';
  afterImage.style.display = 'none';
});

afterButton.addEventListener('click', () => {
  beforeImage.style.display = 'none';
  afterImage.style.display = 'block';
});



// $(".new-header a").click(function(){
//   $(".new-header a").removeClass("active");
//   $(this).addClass("active");
// });






