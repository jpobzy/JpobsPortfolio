const button = document.getElementById('scroll-to-top-button');
button.addEventListener('click', event => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});