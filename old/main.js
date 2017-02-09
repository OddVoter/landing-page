var imageShowing = 'first';
window.onscroll = function() {
  var swapPoint = window.innerHeight * 2 + 30;
  if (imageShowing === 'first') {
    if (document.body.scrollTop > swapPoint) {
      imageShowing = 'second';
      document.getElementById('fixed-background').style.backgroundImage = "url('assets/orange-graffiti.jpg')";
    }
  }
  if (imageShowing === 'second') {
    if (document.body.scrollTop < swapPoint) {
      imageShowing = 'first';
      document.getElementById('fixed-background').style.backgroundImage = "url('assets/orange-skyline.jpg')";
    }
  }
};
