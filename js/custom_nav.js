let closeButton = document.getElementById("close-button");
let connectIcon = document.getElementById('connect-icon');

let hideTopbarIcons = () => {
  connectIcon.style.display = 'none';
  $('#open-button').hide();

  hideTopbarIcons.called = true;
};

let showTopbarIcons = () => {
  connectIcon.style.display = 'block';
  $('#open-button').show();
};

connectIcon.addEventListener('click', hideTopbarIcons);

let hideSideNav = () => {
    closeButton.click();
    hideTopbarIcons();
};

$(window).scroll(function() {
  let topbar = document.getElementsByClassName(
    'navbar navbar-inverse sticky-navigation navbar-fixed-top'
  )[0];
  let topbarClass = topbar.className;

  if (hideTopbarIcons.called === undefined || hideTopbarIcons.called === false) {
    if (topbarClass.includes('affix-top') === false){
      showTopbarIcons();
    } else {
      hideTopbarIcons();
    }
  } else if (hideTopbarIcons.called === true) {
    hideTopbarIcons.called = false
  }
});
