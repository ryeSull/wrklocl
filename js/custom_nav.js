function hideNav() {
  let closeButton = document.getElementById("close-button");
    closeButton.click();
};

$(window).scroll(function() {
   let connectIcon = document.getElementById('connect-icon');
   let navClass = document.getElementsByClassName(
     'navbar navbar-inverse sticky-navigation navbar-fixed-top'
   )[0].className;


   if (navClass.includes('affix-top') === false){
     connectIcon.style.display = 'block';
   } else {
     connectIcon.style.display = 'none'
   }
});
