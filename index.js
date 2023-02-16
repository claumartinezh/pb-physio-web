function _displayMenu() {
  var mobileMenu = document.getElementById('navList');

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

function openCookies(ev) {
  var cookiesContent = document.getElementById('cookies-content');
  cookiesContent.className = cookiesContent.className.includes('active') ? 'cookies-content' : 'cookies-content-active';
}

function scrollFunction() {
  if (window.screen.width < 750) {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("headerLogo").style.width = "50px";
      document.getElementById("navList").style.top = "80px";
    } else {
      document.getElementById("headerLogo").style.width = "90px";
      document.getElementById("navList").style.top = "120px";
    }
  } else {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("headerLogo").style.width = "100px";
      document.getElementById("navList").style.top = "-5px";
      document.getElementById("title").style.fontSize = "28px";
      document.getElementById("title").style.lineHeight = "30px";
      document.getElementById("subtitle").style.fontSize = "20px";
    } else {
      document.getElementById("headerLogo").style.width = "130px";
      document.getElementById("navList").style.top = "0";
      document.getElementById("title").style.fontSize = "32px";
      document.getElementById("title").style.lineHeight = "50px";
      document.getElementById("subtitle").style.fontSize = "22px";
    }
  }
}

function handleFlip(id) {
  const front = document.getElementById(`front-${id}`)
  const back = document.getElementById(`back-${id}`)

  front.classList.toggle('flipped')
  back.classList.toggle('flipped')
}

function toggleDoneTrainings() {
  let hiddenCards = document.querySelectorAll('.hide');
  let shownCards = document.querySelectorAll('.show');
  hiddenCards.forEach(card => card.classList.replace('hide', 'show'));
  shownCards.forEach(card => card.classList.replace('show', 'hide'));
}
