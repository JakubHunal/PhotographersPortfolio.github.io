let arrowHome = document.querySelector(".arrowHome");
window.addEventListener("scroll", function(e) {
    if (window.scrollY > "300") {
        arrowHome.style.visibility = "visible";
    } else {
        arrowHome.style.visibility = "hidden";
    }
})

let video = document.querySelector("video");
video.play();

let i = 0;
let butNext = document.querySelector(".butNext");
let butPreview = document.querySelector(".butPreview");
let slide = document.querySelector(".slide");
butNext.addEventListener("click", function(event) {
    i++;
    console.log(i);

    if (i == 1) {
        slide.style.marginLeft = "-20%";
    }
    if (i == 2) {
        slide.style.marginLeft = "-40%";
    }
    if (i == 3) {
        slide.style.marginLeft = "-60%";

    }
    if (i == 4) {
        slide.style.marginLeft = "-80%";

    }
    if (i == 5) {
        slide.style.marginLeft = "0%";
        i = 0;
    }

    slide.style.transition = "all 1.5s ease";

})
butPreview.addEventListener("click", function(event) {
    i--;
    console.log(i);

    if (i < 0) {
        i = 0;
    }
    if (i == 0) {
        slide.style.marginLeft = "0%";
    }
    if (i == 1) {
        slide.style.marginLeft = "-20%";

    }
    if (i == 2) {
        slide.style.marginLeft = "-40%";

    }
    if (i == 3) {
        slide.style.marginLeft = "-60%";
    }
    if (i == 4) {
        slide.style.marginLeft = "-80%";
    }

    slide.style.transition = "all 1.5s ease";
})