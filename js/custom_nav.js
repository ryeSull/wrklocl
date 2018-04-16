function hideNav() {
  let closeButton = document.getElementById("close-button");
    closeButton.click();
};

$(window).scroll(function() {
   let connectIcon = document.getElementById('connect-icon');
   let navbar = document.getElementsByClassName(
     'navbar navbar-inverse sticky-navigation navbar-fixed-top'
   )[0];
   let navClass = navbar.className;


   if (navClass.includes('affix-top') === false){
     connectIcon.style.display = 'block';
     navbar.childNodes[1].setAttribute('id', 'want-it-darker');
   } else {
     connectIcon.style.display = 'none'
     navbar.childNodes[1].setAttribute('id', '');
   }
});
