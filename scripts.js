// Buttons

var contactArrowTimeline = gsap.timeline({paused: true, onComplete: function() {contactArrowTimeline.restart(); contactArrowTimeline.pause()}});

var contactArrow = document.querySelector(".--contact-arrow");

contactArrowTimeline.to(".--contact-arrow", {
    duration: 0.75,
    x: 100,
    y: -100,
    ease: "back.in"
}).to(".--contact-arrow", {
    duration: 0,
    x: -100,
    y: 100,
}).to(".--contact-arrow", {
    duration: 0.75,
    x: 0,
    y: 0,
    ease: "ease.out",
    ease: "back.out"
});

    contactArrow.addEventListener("mouseenter", function() {
        contactArrowTimeline.play();
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

