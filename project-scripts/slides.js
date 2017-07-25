var slideIndex = 1;
var slideIndex2 = 1;
var slideIndex3 = 1;

function plusSlides(n, name) {
  if (name === "mySlides") {
    showSlides(slideIndex += n, name);
  } else if (name === "mySlides2"){
    showSlides(slideIndex2 +=n, name);
  } else {
    showSlides(slideIndex3 += n, name);
  }
}



function showSlides(n, name) {
  var i;
  var slides = document.getElementsByClassName(name);
  if (n > slides.length) {
    if (name === "mySlides") {
      slideIndex = 1;
    } else if (name === "mySlides2") {
      slideIndex2 = 1;
    } else {
      slideIndex3 = 1;
    }
  }
  if (n < 1) {
    if (name === "mySlides") {
      slideIndex = slides.length;
    } else if (name === "mySlides2") {
      slideIndex2 = slides.length;
    } else {
      slideIndex3 = slides.length;
    }
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  if (name === "mySlides") {
    slides[slideIndex-1].style.display = "block";
  } else if (name === "mySlides2"){
    slides[slideIndex2-1].style.display = "block";
  } else {
    slides[slideIndex3-1].style.display = "block";
  }
}
