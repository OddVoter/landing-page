console.log('working');

// $(window).scroll(function() {
//   if($(window).scrollTop() + $(window).height() == $(document).height()) {
//     alert("bottom");
//   }
// });

window.onscroll = function() {
  // if (document.body.scrollTop + )
  console.log(document.body.scrollTop);
};

function isScrolledIntoView(el) {
  var top = el.getBoundingClientRect().top;
  var bottom = el.getBoundingClientRect().bottom;

  var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  return isVisible;
}

// if we reach the bottom, the bg should change to the one below the bottom
// if we reach the top, it should change to the one above the top
