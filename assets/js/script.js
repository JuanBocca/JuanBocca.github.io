window.addEventListener('load', function (e) {
  setTimeout(function () {
    document.querySelector('#spinner-wrapper').style.display = 'none';
  }, 200);

  window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > ((document.documentElement.clientHeight / 2) - 100));
  });

  var mediaS = window.matchMedia('(max-width: 664px)');

  var toggle = document.querySelector('.hamburger');
  var nav = document.querySelector('.nav');
  var li = document.querySelector('ul');

  function mediaResponse(mediaS) {
    if (mediaS.matches) {
      li.addEventListener('click', hideShowToggle);
    } else {
      li.removeEventListener('click', hideShowToggle);
      nav.classList.remove('mobile-nav');
      toggle.classList.remove('is-active');
    }
  }

  function hideShowToggle() {
    toggle.classList.toggle('is-active');
    nav.classList.toggle('mobile-nav');
  }

  mediaResponse(mediaS);
  mediaS.addListener(mediaResponse);

  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('is-active');
    nav.classList.toggle('mobile-nav');
  });
});