const $next = document.querySelector('.next');
const $prev = document.querySelector('.prev');

$next.addEventListener(
    'click',
    () => {
        const items = document.querySelectorAll('.item');document.querySelector('.slide').
        appendChild(items[0]);
    },
);

$prev.addEventListener(
    'click',
    () => {
        const items = document.querySelectorAll('.item');document.querySelector('.slide').
        prepend(items[items.length - 1]);
    },
);

var slideIndex1 = 0;
var slides1 = document.querySelectorAll("#myPopup1 .carousel-slide");

var slideIndex2 = 0;
var slides2 = document.querySelectorAll("#myPopup2 .carousel-slide");

var slideIndex3 = 0;
var slides3 = document.querySelectorAll("#myPopup3 .carousel-slide");

var slideIndex4 = 0;
var slides4 = document.querySelectorAll("#myPopup4 .carousel-slide");

var slideIndex5 = 0;
var slides5 = document.querySelectorAll("#myPopup5 .carousel-slide");

var slideIndex6 = 0;
var slides6 = document.querySelectorAll("#myPopup6 .carousel-slide");

var slideIndex7 = 0;
var slides7 = document.querySelectorAll("#myPopup7 .carousel-slide");

var slideIndex8 = 0;
var slides8 = document.querySelectorAll("#myPopup8 .carousel-slide");

var slideIndex9 = 0;
var slides9 = document.querySelectorAll("#myPopup9 .carousel-slide");

var slideIndex10 = 0;
var slides10 = document.querySelectorAll("#myPopup10 .carousel-slide");

function openPopup1() {
  document.getElementById("myPopup1").style.display = "block";
}

function closePopup1() {
  document.getElementById("myPopup1").style.display = "none";
}

function nextSlide1() {
  slideIndex1++;
  if (slideIndex1 > slides1.length - 1) {
    slideIndex1 = 0;
  }
  showSlide1();
}

function prevSlide1() {
  slideIndex1--;
  if (slideIndex1 < 0) {
    slideIndex1 = slides1.length - 1;
  }
  showSlide1();
}

function showSlide1() {
  for (var i = 0; i < slides1.length; i++) {
    slides1[i].classList.remove("active");
  }
  slides1[slideIndex1].classList.add("active");
}

function openPopup2() {
  document.getElementById("myPopup2").style.display = "block";
}

function closePopup2() {
  document.getElementById("myPopup2").style.display = "none";
}

function nextSlide2() {
  slideIndex2++;
  if (slideIndex2 > slides2.length - 1) {
    slideIndex2 = 0;
  }
  showSlide2();
}

function prevSlide2() {
  slideIndex2--;
  if (slideIndex2 < 0) {
    slideIndex2 = slides2.length - 1;
  }
  showSlide2();
}

function showSlide2() {
  for (var i = 0; i < slides2.length; i++) {
    slides2[i].classList.remove("active");
  }
  slides2[slideIndex2].classList.add("active");
}

function openPopup3() {
  document.getElementById("myPopup3").style.display = "block";
}

function closePopup3() {
  document.getElementById("myPopup3").style.display = "none";
}

function nextSlide3() {
  slideIndex3++;
  if (slideIndex3 > slides3.length - 1) {
    slideIndex3 = 0;
  }
  showSlide3();
}

function prevSlide3() {
  slideIndex3--;
  if (slideIndex3 < 0) {
    slideIndex3 = slides3.length - 1;
  }
  showSlide3();
}

function showSlide3() {
  for (var i = 0; i < slides3.length; i++) {
    slides3[i].classList.remove("active");
  }
  slides3[slideIndex3].classList.add("active");
}

function openPopup4() {
  document.getElementById("myPopup4").style.display = "block";
}

function closePopup4() {
  document.getElementById("myPopup4").style.display = "none";
}

function nextSlide4() {
  slideIndex4++;
  if (slideIndex4 > slides4.length - 1) {
    slideIndex4 = 0;
  }
  showSlide4();
}

function prevSlide4() {
  slideIndex4--;
  if (slideIndex4 < 0) {
    slideIndex4 = slides4.length - 1;
  }
  showSlide4();
}

function showSlide4() {
  for (var i = 0; i < slides4.length; i++) {
    slides4[i].classList.remove("active");
  }
  slides4[slideIndex4].classList.add("active");
}

function openPopup5() {
  document.getElementById("myPopup5").style.display = "block";
}

function closePopup5() {
  document.getElementById("myPopup5").style.display = "none";
}

function nextSlide5() {
  slideIndex5++;
  if (slideIndex5 > slides5.length - 1) {
    slideIndex5 = 0;
  }
  showSlide5();
}

function prevSlide5() {
  slideIndex5--;
  if (slideIndex5 < 0) {
    slideIndex5 = slides5.length - 1;
  }
  showSlide5();
}

function showSlide5() {
  for (var i = 0; i < slides5.length; i++) {
    slides5[i].classList.remove("active");
  }
  slides5[slideIndex5].classList.add("active");
}

function openPopup6() {
  document.getElementById("myPopup6").style.display = "block";
}

function closePopup6() {
  document.getElementById("myPopup6").style.display = "none";
}

function nextSlide6() {
  slideIndex6++;
  if (slideIndex6 > slides6.length - 1) {
    slideIndex6 = 0;
  }
  showSlide6();
}

function prevSlide6() {
  slideIndex6--;
  if (slideIndex6 < 0) {
    slideIndex6 = slides6.length - 1;
  }
  showSlide6();
}

function showSlide6() {
  for (var i = 0; i < slides6.length; i++) {
    slides6[i].classList.remove("active");
  }
  slides6[slideIndex6].classList.add("active");
}

function openPopup7() {
  document.getElementById("myPopup7").style.display = "block";
}

function closePopup7() {
  document.getElementById("myPopup7").style.display = "none";
}

function nextSlide7() {
  slideIndex7++;
  if (slideIndex7 > slides7.length - 1) {
    slideIndex7 = 0;
  }
  showSlide7();
}

function prevSlide7() {
  slideIndex7--;
  if (slideIndex7 < 0) {
    slideIndex7 = slides7.length - 1;
  }
  showSlide7();
}

function showSlide7() {
  for (var i = 0; i < slides7.length; i++) {
    slides7[i].classList.remove("active");
  }
  slides7[slideIndex7].classList.add("active");
}

function openPopup8() {
  document.getElementById("myPopup8").style.display = "block";
}

function closePopup8() {
  document.getElementById("myPopup8").style.display = "none";
}

function nextSlide8() {
  slideIndex8++;
  if (slideIndex8 > slides8.length - 1) {
    slideIndex8 = 0;
  }
  showSlide8();
}

function prevSlide8() {
  slideIndex8--;
  if (slideIndex8 < 0) {
    slideIndex8 = slides8.length - 1;
  }
  showSlide8();
}

function showSlide8() {
  for (var i = 0; i < slides8.length; i++) {
    slides8[i].classList.remove("active");
  }
  slides8[slideIndex8].classList.add("active");
}

function openPopup9() {
  document.getElementById("myPopup9").style.display = "block";
}

function closePopup9() {
  document.getElementById("myPopup9").style.display = "none";
}

function nextSlide9() {
  slideIndex9++;
  if (slideIndex9 > slides9.length - 1) {
    slideIndex9 = 0;
  }
  showSlide9();
}

function prevSlide9() {
  slideIndex9--;
  if (slideIndex9 < 0) {
    slideIndex9 = slides9.length - 1;
  }
  showSlide9();
}

function showSlide9() {
  for (var i = 0; i < slides9.length; i++) {
    slides9[i].classList.remove("active");
  }
  slides9[slideIndex9].classList.add("active");
}

function openPopup10() {
  document.getElementById("myPopup10").style.display = "block";
}

function closePopup10() {
  document.getElementById("myPopup10").style.display = "none";
}

function nextSlide10() {
  slideIndex10++;
  if (slideIndex10 > slides10.length - 1) {
    slideIndex10 = 0;
  }
  showSlide10();
}

function prevSlide10() {
  slideIndex10--;
  if (slideIndex10 < 0) {
    slideIndex10 = slides10.length - 1;
  }
  showSlide10();
}

function showSlide10() {
  for (var i = 0; i < slides10.length; i++) {
    slides10[i].classList.remove("active");
  }
  slides10[slideIndex10].classList.add("active");
}

$(document).ready(function(){
  $('.slide').slick({
      slidesToShow: 3, // Default to showing 3 slides
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
  });

  // Media query logic to change slidesToShow based on screen width
  function updateSlidesToShow() {
      var slidesToShow;
      if (window.matchMedia("(max-width: 300px)").matches) {
          slidesToShow = 1;
      } else if (window.matchMedia("(max-width: 500px)").matches) {
          slidesToShow = 2;
      } else {
          slidesToShow = 3;
      }
      $('.slide').slick('slickSetOption', 'slidesToShow', slidesToShow, true);
  }

  // Run on page load
  updateSlidesToShow();
// Run on window resize
$(window).resize(function() {
  updateSlidesToShow();
  });
});