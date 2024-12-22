let slideIndex1 = 1;
let slideIndex2 = 1;
showSlides(1, slideIndex1);
showSlides(2, slideIndex2);

function plusSlides(slideGroup, n) {
    if (slideGroup === 1) {
        showSlides(1, slideIndex1 += n);
    } else if (slideGroup === 2) {
        showSlides(2, slideIndex2 += n);
    }
}

function currentSlide(slideGroup, n) {
    if (slideGroup === 1) {
        showSlides(1, slideIndex1 = n);
    } else if (slideGroup === 2) {
        showSlides(2, slideIndex2 = n);
    }
}

function showSlides(slideGroup, n) {
    let i;
    let slides = document.getElementsByClassName("mySlides" + slideGroup);
    let dots = document.getElementsByClassName("dot" + slideGroup);
    if (n > slides.length) {n = 1}
    if (n < 1) {n = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[n-1].style.display = "block";
    dots[n-1].className += " active";
}
