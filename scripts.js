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

var mX = 0;
var mY = 0;

onmousemove = function(e){
    mX = e.clientX;
    mY = e.clientY;
}

const btn_anim_1 = document.querySelectorAll("button");
const btn_anim_1_inner = document.createElement("div");
btn_anim_1_inner.classList.add("btna1-inner");

btn_anim_1.forEach((e) => {
    if (e.classList.contains("btna-1")) {
        e.addEventListener("mouseenter", buttonAnimation1In);
        e.addEventListener("mouseout", buttonAnimation1Out)
        e.appendChild(btn_anim_1_inner);
    }
});

function buttonAnimation1In() {
    gsap.set(".btna1-inner", {
        x: e.getBoundingRect.left - mX,
        y: e.getBoundingRect.top - mY,
        scale: 0
    });
    gsap.to(".btna1-inner", {
        duration: 0.5,
        scale: 5,
        ease: "power4.out",
        repeatRefresh: true
    })
    console.log("entered at: " + mX + ", " + mY);
}

function buttonAnimation1Out() {

}