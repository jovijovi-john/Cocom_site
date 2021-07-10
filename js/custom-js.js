function exibeMenuMobile(){
    var menu = document.getElementById("menu-mobile");
    if(menu.style.display == 'none'){
        menu.style.display = "flex";
        menu.className = 'anim-menu-mobile-open';
        document.getElementById("nav-menu-mobile").className = 'nav-menu anim-menu-mobile-open';
    }else{
        menu.className = 'anim-menu-mobile-close';
        document.getElementById("nav-menu-mobile").className = 'nav-menu anim-menu-mobile-close';
        setTimeout(function (){
            menu.style.display = "none";
        }, 0075);
    }
};

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
}