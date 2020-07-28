window.addEventListener('load', function (e) {
  setTimeout(function () {
    document.querySelector('#spinner-wrapper').style.display = 'none';
  }, 200);

  window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > ((document.documentElement.clientHeight / 2) - 100));
  });

  var toggle = document.querySelector('.hamburger');
  var nav = document.querySelector('.nav');

  var media = window.matchMedia('(min-width: 665px)');
  media.addListener(function () {
    if (media.matches) {
      nav.classList.remove('mobile-nav');
      toggle.classList.remove('is-active');
    } else {
      var li = document.querySelector('ul');
      li.addEventListener('click', function (e) {
        toggle.classList.toggle('is-active');
        nav.classList.toggle('mobile-nav');
      });
    }
  });

  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('is-active');
    nav.classList.toggle('mobile-nav');
  });
});