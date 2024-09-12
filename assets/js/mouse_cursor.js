const body = document.querySelector("body");

gsap.set(".flair", { xPercent: -50, yPercent: -50 });

let xSetter = gsap.quickSetter(".flair", "x", "px"); //apply it to the #id element's x property and append a "px" unit
let ySetter = gsap.quickSetter(".flair", "y", "px"); //apply it to the #id element's x property and append a "px" unit

window.addEventListener("mousemove", e => {
    xSetter(e.x);
    ySetter(e.y);
});

//# sourceURL=pen.js

// Function to animate the flair to follow the mouse with a lazy effect
function animateFlairLazyFollow() {
    gsap.to('.flair', {
        duration: 1, // Duration of the animation
        x: mouseX - 0, // Move the flair slightly to the left of the mouse
        y: mouseY - 0, // Move the flair slightly above the mouse
        ease: 'power2.out' // Easing function for smooth animation
    });
}

// Function to update mouse coordinates
function updateMouseCoords(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
}

// Variables to store mouse coordinates
let mouseX = 0;
let mouseY = 0;

// Event listener for mouse movement
window.addEventListener("mousemove", event => {
    updateMouseCoords(event);
    animateFlairLazyFollow();
});

body.addEventListener("mousedown", (event) => {
    gsap.to('.flair', {
        duration: 0.3,
        opacity: 1,
        scale: 0,
        transformOrigin: "center center"
    });
});

body.addEventListener("mouseup", (event) => {
    gsap.to('.flair', {
        duration: 0.3,
        opacity: 1,
        scale: 1,
        transformOrigin: "center center"
    });
});

// Function to animate the flair to show on mouse move
function showFlairOnMouseMove() {
    gsap.to('.flair', {
        duration: 0.3,
        opacity: 1,
        scale: 1,
        transformOrigin: "center center",
    });
}

// Function to animate the flair to hide on mouse move
function hideFlairOnMouseMove() {
    gsap.to('.flair', {
        duration: 0.3,
        opacity: 0,
        scale: 0,
        transformOrigin: "center center",
    });
}

// Event listener for mouse movement to show/hide the flair
window.addEventListener("mousemove", event => {
    updateMouseCoords(event);
    showFlairOnMouseMove(); // Show the flair when mouse moves
});

// Event listener for mouse leaving the window to hide the flair
window.addEventListener("mouseleave", event => {
    hideFlairOnMouseMove(); // Hide the flair when mouse leaves the window
});