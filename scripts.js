// Buttons

gsap.from(".--button-arrow-SVG", {
    duration: 2,
    delay: 0.25,
    ease: "elastic"
})

buttonArrow = document.querySelectorAll(".--button-arrow-SVG").forEach(function(i) {
    i.addEventListener("onmouseenter", function() {
        console.log("NOW");
        gsap.to(".--button-arrow-SVG", {
            duration: 2,
            x: 100,
            y: -100,
            ease: "back.in"
        });
    });
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

