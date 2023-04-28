// // Buttons

// var contactArrowTimeline = gsap.timeline({paused: true, onComplete: function() {contactArrowTimeline.restart(); contactArrowTimeline.pause()}});

// var contactButton = document.querySelector(".--sticky-contact");

// contactArrowTimeline.to(".--contact-arrow", {
//     duration: 0.75,
//     x: 100,
//     y: -100,
//     ease: "back.in"
// }).to(".--contact-arrow", {
//     duration: 0,
//     x: -100,
//     y: 100,
// }).to(".--contact-arrow", {
//     duration: 0.75,
//     x: 0,
//     y: 0,
//     ease: "ease.out",
//     ease: "back.out"
// });

//     contactButton.addEventListener("mouseenter", function() {
//         contactArrowTimeline.play();
//     });

// // Hero

// var heroMainRightWave1 = lottie.loadAnimation({
//     container: document.getElementsByClassName("--wave-1")[0],
//     renderer: "svg",
//     autoplay: true,
//     loop: true,
//     path: "JSON/heroRightMainWave.json",
// });

// var heroMainRightWave2 = lottie.loadAnimation({
//     container: document.getElementsByClassName("--wave-2")[0],
//     renderer: "svg",
//     autoplay: true,
//     loop: true,
//     path: "JSON/heroRightMainWave2.json",
// });

// heroMainRightWave1.setSpeed(0.5);
// heroMainRightWave2.setSpeed(0.25);

// function mapNumbers(number, inMin, inMax, outMin, outMax) {
//     return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
// }

// var testLines = document.getElementsByClassName("--svg-object");
// console.log(testLines)

// Mouse movemement

var mX = 0;
var mY = 0;

onmousemove = function(e){
    mX = e.clientX;
    mY = e.clientY;
}

// Button animation 1

const btn_elements = document.querySelectorAll("button");

let btna1 = gsap.to(".btna1-inner", {
    duration: 0.75,
    paused: true,
    height: 100,
    width: 100,
    scale: 5,
    ease: "power1.in",
}); 

btn_elements.forEach((e) => {
    if (e.classList.contains("btna1")) {
        e.addEventListener("mouseenter", () => {
            let inner;
            for (var i = 0; i < e.childNodes.length; i++) {
                if (e.childNodes[i].className == "btna1-inner") {
                    inner = e.childNodes[i];
                }
            }
            inner.style.top = (mY - e.getBoundingClientRect().top) + "%";
            inner.style.left = (mX - e.getBoundingClientRect().left) + "px";
            btna1.play();
        });
        e.addEventListener("mouseout", () => {
            btna1.reverse();
        });
    }
});

// Hero navigation hover animations
