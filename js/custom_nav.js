let closeButton = document.getElementById("close-button");
let connectIcon = document.getElementById('connect-icon');
let navbar = document.getElementsByClassName(
  'navbar navbar-inverse sticky-navigation navbar-fixed-top'
)[0];
let navClass = navbar.className;

let hideDarkTopNav = () => {
  connectIcon.style.display = 'none'
  navbar.childNodes[1].setAttribute('id', '');
  navbar.setAttribute('id', '');
  $('#open-button').hide();

  hideDarkTopNav.called = true;
};

connectIcon.addEventListener('click', hideDarkTopNav);

let hideSideNav = () => {
    closeButton.click();
    hideDarkTopNav();
};

$(window).scroll(function() {
  let connect = document.getElementById('connect-icon');
  let topNav = document.getElementsByClassName(
    'navbar navbar-inverse sticky-navigation navbar-fixed-top'
  )[0];
  let topNavClass = navbar.className;

  if (hideDarkTopNav.called === undefined || hideDarkTopNav.called === false) {
    if (topNavClass.includes('affix-top') === false){
      connect.style.display = 'block';
      topNav.childNodes[1].setAttribute('id', 'want-it-darker');
      topNav.setAttribute('id', 'want-it-darker');
      $('#open-button').show();
    } else {
      connect.style.display = 'none'
      topNav.childNodes[1].setAttribute('id', '');
      topNav.setAttribute('id', '');
      $('#open-button').hide();
    }
  } else if (hideDarkTopNav.called === true) {
    hideDarkTopNav.called = false
  }
});
