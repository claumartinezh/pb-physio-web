function _displayMenu() {
  var mobileMenu = document.getElementById('nav-list');

  if (mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.remove('hidden');
    setTimeout(() => mobileMenu.classList.remove('visually-hidden'), 20);
  } else {
    mobileMenu.classList.add('visually-hidden');
    mobileMenu.addEventListener('transitionend', function(e) {
      mobileMenu.classList.add('hidden');
    }, {
      capture: false,
      once: true,
      passive: false
    });
  }
}

function selectTab(ev, service) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(service).style.display = "block";
  ev.currentTarget.className += " active";
}

function acceptCookies() {
  var cookiesMessage = document.getElementById("snackbar");
  cookiesMessage.className = "hide";
}