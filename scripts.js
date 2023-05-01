gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


// Page detection

var currentPage = window.location.pathname;
var navAnimations = document.getElementsByClassName("nav-link-hover-container");

if (currentPage == "/index.html") {
    for (let i = 0; i < navAnimations.length; i++) {
        navAnimations[i].classList.remove("active");
    };
    navAnimations[0].classList.add("active");
}

// Mouse movemement

var mX = 0;
var mY = 0;

onmousemove = function(e){
    mX = e.clientX;
    mY = e.clientY;
}

// Page animation

let pt1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-me",
        start: "top center",
        end: "top top",
        scrub: 4,
    },
});

pt1.fromTo(".about-me-main", {
    height: 0,
    ease: "power1.out"
},{
    height: 100 + "vh"
}).to(".about-me-main", {
    duration: 2,
    width: 100 + "vw"
});

// Button animation 1

// var btn_elements = document.querySelectorAll(".btna1");

// btn_elements.forEach(e => {

//     var btn_inner = document.createElement("div");
//     btn_inner.className = "btna1-inner"
//     e.appendChild(btn_inner);

//     t1 = gsap.timeline(e, {duration: 2});
//     t1.pause();

//     t1.to(".btna1-inner", {
//         height: "200%",
//         width: "200%",
//         y: -50,
//         opacity: 100
//     });

//     e.addEventListener("mouseenter", () => {
//         t1.play()
//     })

//     e.addEventListener("mouseout", () => {
//         t1.reverse()
//     })
// })

