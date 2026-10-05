//your JS code here. If required.
const circles = document.querySelectorAll(".circle");

const progress = document.getElementById("progress");

const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

let currentStep = 1;


/* NEXT button */
nextButton.addEventListener("click", function () {

    if (currentStep < circles.length) {

        currentStep++;

        updateProgress();

    }

});


/* PREVIOUS button */
prevButton.addEventListener("click", function () {

    if (currentStep > 1) {

        currentStep--;

        updateProgress();

    }

});


/* Update progress bar */
function updateProgress() {

    /* Activate circles */
    circles.forEach(function (circle, index) {

        if (index < currentStep) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }

    });


    /* Update progress line */
    const progressPercentage =
        ((currentStep - 1) / (circles.length - 1)) * 100;

    progress.style.width = progressPercentage + "%";


    /* Update buttons */
    if (currentStep === 1) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }


    if (currentStep === circles.length) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }

}