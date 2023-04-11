// Buttons

let arrowAnimation = document.querySelector(".--svg-object.--arrow.--contact-arrow")

var arrowTimeline = gsap.timeline();

let stickyContact = document.getElementsByClassName("--sticky-contact")[0];

arrowTimeline.to(".--svg-object.--arrow.--contact-arrow", {
    duration: 1,
    x: 100,
    y: -100,
    ease: "back.in"
}).to(".--svg-object.--arrow.--contact-arrow", {
    duration: 1,
    x: 0,
    y: 0,
    ease: "back.out"
});;

stickyContact.addEventListener("mouseenter", () => {
    arrowTimeline.play();
});

stickyContact.addEventListener("mouseleave", () => {
    arrowTimeline.restart();
});

// Hero

var heroMainRightWave1 = lottie.loadAnimation({
    container: document.getElementsByClassName("--wave-1")[0],
    renderer: "svg",
    autoplay: true,
    loop: true,
    path: "JSON/heroRightMainWave.json",
});

var heroMainRightWave2 = lottie.loadAnimation({
    container: document.getElementsByClassName("--wave-2")[0],
    renderer: "svg",
    autoplay: true,
    loop: true,
    path: "JSON/heroRightMainWave2.json",
});

heroMainRightWave1.setSpeed(0.5);
heroMainRightWave2.setSpeed(0.25);

function mapNumbers(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

