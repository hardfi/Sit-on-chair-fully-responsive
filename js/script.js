document.addEventListener("DOMContentLoaded", function () {

// slider
var buttonRight = document.getElementById('nextPicture'),
    buttonLeft = document.getElementById('prevPicture'),
    allImages = document.querySelectorAll('.slider ul li'),
    ulFirst = document.querySelector('.slider ul').firstElementChild,
    ulLast = document.querySelector('.slider ul').lastElementChild,
    elemVisible = '',
    timer1 = 0;

function clearTime() {
  clearTimeout(timer1);
  timer1 = setTimeout(changeSlideAuto, 10000);
}
function removeClass() {
  elemVisible = document.querySelector('.visible');
  elemVisible.classList.remove('visible');
}
function changeNext() {
  if (elemVisible.nextElementSibling === null) {
    ulFirst.classList.add('visible');
  } else {
    elemVisible.nextElementSibling.classList.add('visible');
  }
}
function changePrev() {
  if (elemVisible.previousElementSibling === null) {
    ulLast.classList.add('visible');
  } else {
    elemVisible.previousElementSibling.classList.add('visible');
  }
}
buttonRight.addEventListener('click', function() {
  clearTime();
  removeClass();
  changeNext();
});
buttonLeft.addEventListener('click', function() {
  clearTime();
  removeClass();
  changePrev();
});
function changeSlideAuto() {
  removeClass();
  changeNext();
  clearTime();
}
changeSlideAuto();


// ==================================================== //

var menu_btn = document.getElementById('menu_btn'),
menu_ul = document.querySelector('.menu'),
tip = document.getElementById('tip1'),
subMenu = document.querySelector('.sub_menu1'),
liOfirmie = document.querySelector('nav .menu').firstElementChild,
allLinks = document.querySelectorAll('.menu_href');

// hides menu on click
menu_btn.addEventListener('click', function() {
    menu_btn.nextElementSibling.classList.toggle('hidden');
    tip.classList.toggle('hidden');

    if (!subMenu.classList.contains('hidden')) {
      subMenu.classList.add('hidden');
    }
});

// hide/show sub_menu
liOfirmie.addEventListener('click', function() {
  subMenu.classList.toggle('hidden');
});

// hides/shows certain elements based on media width
// hide manu on small screens (show hamburger)
var mobile = window.matchMedia('(min-width:641px)');

  function mobileMenu(){
      if(mobile.matches){
          menu_ul.classList.remove('hidden');
          tip.classList.remove('hidden');
          subMenu.classList.add('hidden');

      }else{
          menu_ul.classList.add('hidden');
          tip.classList.add('hidden');
          subMenu.classList.add('hidden');
      }
    }
  mobileMenu();
  mobile.addListener(mobileMenu);

  // hide top menu (if it's open) when link is clicked
  allLinks.forEach(function(element) {
    element.addEventListener('click', function(e) {
      tip.classList.add('hidden');
      subMenu.classList.add('hidden');
        if(!mobile.matches){
          menu_ul.classList.add('hidden');
        }
    });
  });

// checkbox
document.getElementById('chbox').addEventListener('click', function() {
  var realChbox = document.querySelector('.checkbox input'),
      fakeChbox = document.querySelector('.fa-check');
    if (realChbox.checked === false) {
      realChbox.checked = true;
      fakeChbox.style.display = "inline"
    } else {
      realChbox.checked = false;
      fakeChbox.style.display = "none"
    }
});


});


/*
clearHtmlView();
array.forEach(function(object) {
  buildHtmlView(object);
});
*/
