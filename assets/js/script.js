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

  var mediaS = window.matchMedia('(max-width: 664px)');
  var mediaB = window.matchMedia('(min-width: 665px)');
  var li = document.querySelector('ul');

  if (mediaS.matches) {
    li.addEventListener('click', function (e) {
      toggle.classList.toggle('is-active');
      nav.classList.toggle('mobile-nav');
    });
  }

  if (mediaB.matches) {
    li.removeEventListener('click', function () {
      toggle.classList.toggle('is-active');
      nav.classList.toggle('mobile-nav');
    })
    nav.classList.remove('mobile-nav');
    toggle.classList.remove('is-active');
  }

  window.addEventListener('resize', function (e) {
    if (mediaB.matches) {
      console.log('grande');
      li.removeEventListener('click', function () {
        e.preventDefault();
        toggle.classList.toggle('is-active');
        nav.classList.toggle('mobile-nav');
      })
      nav.classList.remove('mobile-nav');
      toggle.classList.remove('is-active');
    } else {
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