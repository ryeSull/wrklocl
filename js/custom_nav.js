let closeButton = document.getElementById('close-button');
let connectIcon = document.getElementById('connect-icon');
let learnMoreBtn = document.getElementById('learn-more');

let hideTopbarIcons = () => {
  connectIcon.style.display = 'none';
  $('#open-button').hide();

  hideTopbarIcons.called = true;
};

connectIcon.addEventListener('click', hideTopbarIcons);

let showTopbarIcons = () => {
  connectIcon.style.display = 'block';
  $('#open-button').show();
};

learnMoreBtn.addEventListener('click', showTopbarIcons);

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
