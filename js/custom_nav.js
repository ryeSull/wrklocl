let closeButton = document.getElementById("close-button");
let connectIcon = document.getElementById('connect-icon');
let navbar = document.getElementsByClassName(
  'navbar navbar-inverse sticky-navigation navbar-fixed-top'
)[0];
let navClass = navbar.className;

function hideNav() {
    closeButton.click();
};

$(window).scroll(function() {
  let connectIcon = document.getElementById('connect-icon');
  let navbar = document.getElementsByClassName(
    'navbar navbar-inverse sticky-navigation navbar-fixed-top'
  )[0];
  let navClass = navbar.className;

  if (hideDarkTopNav.called === undefined || hideDarkTopNav.called === false) {
    if (navClass.includes('affix-top') === false){
      connectIcon.style.display = 'block';
      navbar.childNodes[1].setAttribute('id', 'want-it-darker');
    } else {
      connectIcon.style.display = 'none'
      navbar.childNodes[1].setAttribute('id', '');
    }
  } else if (hideDarkTopNav.called === true) {
    hideDarkTopNav.called = false
  }
});

let hideDarkTopNav = () => {
  connectIcon.style.display = 'none'
  navbar.childNodes[1].setAttribute('id', '');

  hideDarkTopNav.called = true;
};


connectIcon.addEventListener('click', hideDarkTopNav);
